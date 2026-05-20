# PersonalWebsite 架构说明

## 整体架构概览

PersonalWebsite 是一个基于 Next.js App Router 的静态个人作品集网站。项目以静态页面和静态内容为主，通过组件组合展示个人简介、履历、技术栈、项目列表和项目详情。

当前架构没有发现后端服务、数据库或运行时 API 路由。项目详情内容通过本地 MDX 文件维护，在构建阶段读取并生成静态页面，最终由 GitHub Pages 托管 `out/` 静态产物。

## 技术栈说明

- 框架：Next.js 16
- UI：React 19
- 样式：Tailwind CSS 4，全局入口为 `src/app/globals.css`
- 路由：Next.js App Router，页面位于 `src/app`
- 内容：`src/content/projects/*.mdx`
- MDX 渲染：`next-mdx-remote`
- Frontmatter 解析：`gray-matter`
- 图标：`lucide-react`
- 工具函数：`clsx`、`tailwind-merge`
- 代码检查：ESLint 9 + `eslint-config-next`
- 部署：GitHub Actions + GitHub Pages

## 目录结构说明

```text
.
├── .github/
│   └── workflows/deploy.yml      # GitHub Pages 部署流程
├── public/                       # 头像、项目图、学校 logo、框架默认 SVG 等静态资源
├── src/
│   ├── app/
│   │   ├── layout.js             # 根布局和站点 metadata
│   │   ├── page.jsx              # 首页 About 页面
│   │   ├── page.js               # 当前也存在首页实现，需后续确认保留策略
│   │   ├── resume/page.jsx       # 履历页面
│   │   ├── project/page.jsx      # 项目列表页面
│   │   ├── project/[slug]/       # 项目详情动态路由
│   │   └── globals.css           # 全局样式和 Tailwind 引入
│   ├── components/
│   │   ├── portfolio/            # 作品集业务组件
│   │   └── ui/                   # 通用 UI 组件
│   ├── content/projects/         # 项目详情 MDX 文件
│   └── lib/                      # 内容读取、静态数据和通用工具
├── next.config.mjs               # 静态导出与图片优化配置
├── jsconfig.json                 # `@/*` 路径别名
├── package.json                  # npm 脚本和依赖
└── feature_list.json             # 功能清单
```

## 页面组织方式

当前已发现的主要路由：

- `/`：首页，使用 `PortfolioLayout`，展示 `AboutSection` 和 `TechStackSection`。
- `/resume`：履历页，展示 `ResumeSection`。
- `/project`：项目列表页，通过 `getAllProjects()` 从 MDX 内容目录读取项目。
- `/project/[slug]`：项目详情页，通过 `getProjectBySlug()` 读取单个 MDX 文件并渲染内容。

`src/app/page.jsx` 和 `src/app/page.js` 当前都存在首页实现。Next.js 对同一路径同时存在多个 page 文件的处理需要后续验证，当前文档只记录现状，不调整目录或代码。

## 组件组织方式

`src/components/portfolio/` 中包含作品集页面的主要组合组件：

- `PortfolioLayout.jsx`：页面外壳，组合左侧个人信息栏和右侧内容区。
- `ProfileSidebar.jsx`：头像、姓名、身份、联系方式和社交链接。
- `NavigationTabs.jsx`：About、Resume、Project 导航。
- `AboutSection.jsx`：个人简介。
- `TechStackSection.jsx`：技术栈分组展示。
- `ResumeSection.jsx`：教育经历、项目经历和技能列表。
- `ProjectCard.jsx`：项目卡片。
- `BlogSection.jsx`、`GallerySection.jsx` 等组件当前存在，但未在已确认的主导航页面中发现直接接入。

通用 UI 组件当前位于 `src/components/ui/`，例如 `button.jsx`。

## 样式组织方式

项目使用 Tailwind CSS 4。全局样式入口是 `src/app/globals.css`，其中通过 `@import "tailwindcss";` 引入 Tailwind，并定义基础颜色变量。

组件样式主要通过 Tailwind className 内联在 JSX 中。部分组件使用少量内联 style 定义渐变、边框和阴影效果。

## 静态资源组织方式

静态资源位于 `public/`，包括：

- 个人头像：如 `image0.jpg`
- 项目图片：如 `frontend_Website.png`、`whatsapp-16-9.png`
- 学校或机构相关图片：如 `HKUST_symbol.svg`、`hkuspace.jpg`
- 框架默认 SVG：如 `next.svg`、`vercel.svg`

部分资源路径带有 `/PersonalWebsite/` 前缀，用于适配 GitHub Pages 仓库子路径部署。后续维护时需要保持资源路径和实际部署路径一致。

## 数据来源说明

当前未发现后端、数据库或运行时 API。

页面数据主要来自以下位置：

- 组件内静态数组：例如履历、技能、联系方式、技术栈。
- `src/content/projects/*.mdx`：项目详情内容和 frontmatter 元数据。
- `src/lib/mdx.js`：使用 Node.js `fs` 和 `gray-matter` 在构建阶段读取 MDX 文件。
- `src/lib/projectsData.js`：仍存在项目静态数据，但当前 `/project` 页面使用 MDX 数据源。

由于项目为静态导出，新增内容通常需要重新构建并部署后才会更新线上站点。

## 构建与部署流程

本地构建命令：

```bash
npm run build
```

`next.config.mjs` 当前配置：

- `output: "export"`：生成静态站点。
- `images.unoptimized: true`：关闭 Next.js 默认图片优化，以适配 GitHub Pages。

GitHub Pages 部署流程位于 `.github/workflows/deploy.yml`：

1. 在 `main` 分支 push 或手动触发时运行。
2. 使用 Node.js 20。
3. 执行 `npm install`。
4. 执行 `npx next build`。
5. 上传 `./out`。
6. 通过 `actions/deploy-pages@v4` 发布到 GitHub Pages。

## 当前架构的优点

- 静态导出适合个人网站，部署简单，运行成本低。
- 项目详情使用 MDX 管理，便于后续追加项目案例和长文内容。
- 页面组件拆分较清晰，个人信息、导航、履历、项目卡片等职责相对独立。
- GitHub Actions 已包含自动部署流程。
- `@/*` 路径别名降低了相对路径嵌套复杂度。

## 当前架构的限制

- 当前未发现后端、数据库或 CMS，内容更新依赖代码仓库和重新部署。
- 部分页面内容仍硬编码在组件中，非技术维护者编辑成本较高。
- `src/app/page.jsx` 和 `src/app/page.js` 同时存在，需后续确认构建和路由行为。
- `init.sh` 当前引用 `npm test`，但 `package.json` 未发现 `test` 脚本，标准启动验证流程需后续确认。
- `BlogSection`、`GallerySection` 等组件当前存在，但是否属于正式功能待确认。
- 部分 MDX frontmatter 中日期文本存在拼写或格式不统一情况，后续可单独整理。

## 后续可演进方向

- 统一项目内容来源，优先将项目、履历、技能等可维护数据集中到 MDX、JSON 或其他结构化文件。
- 明确是否保留未接入的 Blog、Gallery 组件，并在功能清单中跟踪状态。
- 为构建、lint 和静态导出部署建立明确的验证记录。
- 根据 GitHub Pages 实际路径，统一静态资源引用策略。
- 若内容更新频率提高，可评估引入轻量 CMS 或外部内容源；当前未发现必须立即引入的需求。
