#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

PROJECT_NAME="PersonalWebsite"

echo "==> Project: ${PROJECT_NAME}"
echo "==> Working directory: ${PWD}"
echo

if ! command -v node >/dev/null 2>&1; then
  echo "ERROR: Node.js was not found. Install Node.js 20 or a compatible version before working on this project." >&2
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "ERROR: npm was not found. Install npm before working on this project." >&2
  exit 1
fi

echo "==> Detected tools"
echo "Node.js: $(node --version)"
echo "npm:     $(npm --version)"
echo

echo "==> Safe startup guidance"
echo "This script only checks the local toolchain and prints suggested commands."
echo "It does not install dependencies, change project files, run git commands, or start a server automatically."
echo

if [ ! -d "node_modules" ]; then
  echo "Dependencies are not installed locally."
  echo "Recommended next step:"
  echo "  npm install"
  echo
fi

echo "Recommended verification commands:"
echo "  npm run lint"
echo "  npm run build"
echo

echo "Development server command:"
echo "  npm run dev"
echo

echo "Deployment note:"
echo "  The project is configured for static export. GitHub Pages deployment builds the site and publishes ./out."
