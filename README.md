# PersonalWebsite

TSANG KWOK HIN (HENRY) 的个人网站项目，用于展示个人简介、教育经历、技术栈和项目作品。

## 项目用途

本项目是一个个人网站 / 作品展示 / 个人品牌主页。当前页面内容围绕个人资料、履历信息、技术能力和项目详情组织，适合作为公开 GitHub 仓库和 GitHub Pages 站点维护。

## 技术栈

根据当前项目文件和 `package.json`，项目主要使用：

- Next.js 16
- React 19
- Tailwind CSS 4
- ESLint 9 + `eslint-config-next`
- MDX 内容渲染：`next-mdx-remote`
- Frontmatter 解析：`gray-matter`
- 图标：`lucide-react`
- 样式工具：`clsx`、`tailwind-merge`

## 本地开发

### 环境要求

- Node.js：GitHub Actions 当前使用 Node.js 20
- npm：项目包含 `package-lock.json`

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

默认访问地址为：

```text
http://localhost:3000
```

### 构建静态站点

```bash
npm run build
```

当前 `next.config.mjs` 使用 `output: "export"`，构建产物输出到 `out/`。

### 运行生产预览

```bash
npm run start
```

注意：项目当前配置为静态导出模式，实际部署以 `out/` 静态产物为准。

### 代码检查

```bash
npm run lint
```

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `npm install` | 安装项目依赖 |
| `npm run dev` | 启动 Next.js 开发服务器 |
| `npm run build` | 构建静态导出产物 |
| `npm run start` | 启动 Next.js 生产服务器 |
| `npm run lint` | 运行 ESLint 检查 |

## 项目目录说明

```text
.
├── .github/                 # GitHub Actions 工作流
├── public/                  # 静态图片和 SVG 资源
├── src/
│   ├── app/                 # Next.js App Router 页面、布局和全局样式
│   ├── components/          # 页面组件和 UI 组件
│   ├── content/projects/    # 项目详情 MDX 内容
│   └── lib/                 # 数据读取和工具函数
├── ARCHITECTURE.md          # 架构说明
├── feature_list.json        # 功能清单和维护状态
├── init.sh                  # 仓库启动脚本
├── next.config.mjs          # Next.js 静态导出配置
└── package.json             # npm 脚本和依赖声明
```

## 当前页面与内容

- 首页 `/`：个人简介和技术栈。
- 履历页 `/resume`：教育经历、项目经历和技能。
- 项目列表页 `/project`：从 `src/content/projects/*.mdx` 读取项目并展示卡片。
- 项目详情页 `/project/[slug]`：渲染单个 MDX 项目的详情内容。

当前未发现后端服务、数据库或运行时 API 路由实现。页面数据主要来自组件内静态数组、`src/lib` 工具函数和 MDX 文件。

## 部署说明

项目已包含 GitHub Pages 部署工作流：`.github/workflows/deploy.yml`。

当前部署流程为：

1. 推送到 `main` 分支，或在 GitHub Actions 手动触发工作流。
2. GitHub Actions 使用 Node.js 20 安装依赖。
3. 执行 `npx next build`。
4. 上传 `./out` 静态产物。
5. 使用 `actions/deploy-pages` 部署到 GitHub Pages。

`next.config.mjs` 中已设置：

- `output: "export"`：启用静态导出。
- `images.unoptimized: true`：适配 GitHub Pages 不支持 Next.js 默认图片优化的限制。

站点最终访问地址以 GitHub Pages 配置和 Actions 输出为准。

## 后续计划 / TODO

- 补充更多项目 MDX 内容和外部链接。
- 确认 `init.sh` 中的标准验证命令是否与当前 `package.json` 保持一致。
- 根据需要完善 Gallery、Blog 等未接入导航的组件或移除未使用内容。
- 持续维护 `feature_list.json`，记录功能状态、优先级和验证证据。

## 维护说明

- 修改页面结构前，请先阅读 `ARCHITECTURE.md` 和 `feature_list.json`。
- 新增项目内容时，优先在 `src/content/projects/` 中添加 MDX 文件，并保持 frontmatter 字段一致。
- 静态资源应放在 `public/` 下，并注意 GitHub Pages 子路径资源引用。
- 部署相关改动应同步检查 `.github/workflows/deploy.yml` 和 `next.config.mjs`。
