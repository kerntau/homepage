# kerntau 个人主页

这是一个基于 Nuxt 4 的个人主页项目，整合个人介绍、项目展示、博客入口和站点导航。项目源自 Nuxt 个人主页模板，页面内容与配置已按 kerntau / cotovo 的资料调整。

## 技术栈

- Nuxt 4、Vue 3、Vue Router 5
- Pinia、VueUse
- Nuxt Image、Nuxt Icon、Nuxt SEO
- Sass、Embla Carousel、Vue Tippy
- pnpm workspace（Node.js 版本需满足 Nuxt 4 要求）

## 本地开发

需要 Node.js 20+ 与 pnpm 10（仓库声明 pnpm@10.33.0）。

    pnpm install
    pnpm dev
    # 默认打开 http://localhost:3000

## 构建与部署

    pnpm build
    pnpm preview
    pnpm generate

pnpm generate 的输出目录为 dist/，可部署到 Vercel、Netlify、Cloudflare Pages 等 Nuxt 静态托管环境。请在部署平台配置站点域名和 SEO 环境变量；仓库未固定线上主页地址。

## 目录

    app/                 # Nuxt 页面、布局与路由
    components/          # 可复用 UI 组件
    public/              # 静态资源
    server/              # 服务端接口（如有）
    nuxt.config.ts       # Nuxt 配置
    homepage.config.ts   # 主页内容配置

## 代码质量

    pnpm lint
    pnpm lint --fix

项目本体与上游模板的版权和署名要求请一并遵守。
