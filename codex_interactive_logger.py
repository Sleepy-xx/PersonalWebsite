#!/usr/bin/env python3
from __future__ import annotations

import argparse
import os
import re
import sys
from datetime import datetime
from pathlib import Path

import pexpect


LOG_DIR = Path("logs")


# 匹配 ANSI escape sequence:
# - 颜色
# - 光标移动
# - 清屏
# - OSC 标题控制
# - bracketed paste 相关控制
ANSI_RE = re.compile(
    r"""
    \x1B
    (?:
        [@-Z\\-_]
        |
        \[
        [0-?]*
        [ -/]*
        [@-~]
        |
        \]
        .*?
        (?:\x07|\x1B\\)
    )
    """,
    re.VERBOSE,
)

# 去掉不可见控制字符，但保留 \n、\r、\t
CONTROL_RE = re.compile(r"[\x00-\x08\x0b-\x0c\x0e-\x1f\x7f]")


def make_log_path() -> Path:
    LOG_DIR.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    return LOG_DIR / f"codex-interactive-{timestamp}.log"


def clean_terminal_text(text: str) -> str:
    """
    在写入 log 前清洗终端控制字符。
    注意：这个函数不会影响屏幕显示，只影响 log 文件。
    """

    # 去掉 ANSI / OSC 控制序列
    text = ANSI_RE.sub("", text)

    # 去掉 bracketed paste 的残留标记
    text = text.replace("[200~", "")
    text = text.replace("[201~", "")

    # 去掉其他不可见控制字符
    text = CONTROL_RE.sub("", text)

    # \r 在 TUI 里经常用于回到行首刷新状态，这里转成 \n，避免一行粘在一起
    text = text.replace("\r", "\n")

    return text


class CleanLogWriter:
    """
    pexpect logfile 需要一个 file-like object。

    这个 writer 做两件事：
    1. 不负责输出到屏幕，因为 child.interact() 已经会显示。
    2. 写入文件前先清洗 ANSI / TUI 控制字符。
    """

    def __init__(self, log_file):
        self.log_file = log_file
        self._last_was_blank = False

    def write(self, data):
        if isinstance(data, bytes):
            text = data.decode("utf-8", errors="replace")
        else:
            text = data

        text = clean_terminal_text(text)

        if not text:
            return

        # 简单压缩过多空行，避免 spinner / 刷新导致 log 膨胀
        lines = text.splitlines(keepends=True)
        cleaned_lines = []

        for line in lines:
            if line.strip() == "":
                if self._last_was_blank:
                    continue
                self._last_was_blank = True
                cleaned_lines.append("\n")
            else:
                self._last_was_blank = False
                cleaned_lines.append(line)

        final_text = "".join(cleaned_lines)

        self.log_file.write(final_text.encode("utf-8", errors="replace"))
        self.log_file.flush()

    def flush(self):
        self.log_file.flush()


def write_header(log_file, command: str, cwd: str) -> None:
    header = (
        "\n===== Codex interactive session started =====\n"
        f"Time: {datetime.now().astimezone().isoformat(timespec='seconds')}\n"
        f"Command: {command}\n"
        f"Working directory: {cwd}\n"
        "===========================================\n\n"
    )
    log_file.write(header.encode("utf-8"))
    log_file.flush()


def write_footer(log_file) -> None:
    footer = (
        "\n\n===== Codex interactive session ended =====\n"
        f"Time: {datetime.now().astimezone().isoformat(timespec='seconds')}\n"
        "=========================================\n"
    )
    log_file.write(footer.encode("utf-8"))
    log_file.flush()


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Run Codex interactive mode and save a cleaned terminal transcript."
    )

    parser.add_argument(
        "--cmd",
        default="codext",
        help='Command to run. Example: "codext" or "npx codext"',
    )

    parser.add_argument(
        "--log",
        default=None,
        help="Custom log file path. Default: logs/codex-interactive-YYYYMMDD-HHMMSS.log",
    )

    parser.add_argument(
        "--cwd",
        default=None,
        help="Working directory to run Codex in. Default: current directory.",
    )

    parser.add_argument(
        "--rows",
        type=int,
        default=40,
        help="Pseudo terminal rows. Default: 40.",
    )

    parser.add_argument(
        "--cols",
        type=int,
        default=120,
        help="Pseudo terminal columns. Default: 120.",
    )

    args = parser.parse_args()

    log_path = Path(args.log) if args.log else make_log_path()
    log_path.parent.mkdir(parents=True, exist_ok=True)

    cwd = args.cwd or os.getcwd()

    print("Starting Codex interactive session...")
    print(f"Working directory: {cwd}")
    print(f"Clean log file: {log_path}")
    print("Exit Codex normally with /exit or Ctrl-D.")
    print()

    with log_path.open("ab") as log_file:
        write_header(log_file, args.cmd, cwd)

        # 用 bash -lc 启动，支持 "codex"、"npx codex"、"codex --xxx" 这种命令
        child = pexpect.spawn(
            "/bin/bash",
            ["-lc", args.cmd],
            cwd=cwd,
            encoding="utf-8",
            codec_errors="replace",
            dimensions=(args.rows, args.cols),
        )

        clean_writer = CleanLogWriter(log_file)

        # 关键点：
        # interact() 负责屏幕交互；
        # logfile_read / logfile_send 只负责把输入输出写入 log；
        # CleanLogWriter 会在写入前过滤乱码。
        child.logfile_read = clean_writer
        child.logfile_send = clean_writer

        try:
            child.interact()
        finally:
            write_footer(log_file)

    print()
    print(f"Session saved to: {log_path}")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nInterrupted.")
        sys.exit(130)