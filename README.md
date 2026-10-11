<div align="center">

# kerntau 个人主页 · Homepage

**基于 Nuxt 4 的个人主页与项目导航**<br>
*A Nuxt 4 personal homepage for projects, writing and links*

[![Status](https://img.shields.io/badge/Status-Active-2ea44f?style=for-the-badge)](https://github.com/kerntau/homepage)
[![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://github.com/kerntau/homepage)
[![Vue](https://img.shields.io/badge/Vue-3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://github.com/kerntau/homepage)
[![pnpm](https://img.shields.io/badge/pnpm-10-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://github.com/kerntau/homepage)

</div>

---

## 01. 项目定位 // POSITIONING

这是一个基于 Nuxt 4 的个人主页项目，集中展示个人介绍、项目、博客入口和站点导航。页面内容与配置按 kerntau / cotovo 的资料维护，适合 Node 服务或静态生成部署。

## 02. 功能与边界 // SCOPE

- Nuxt 页面、布局和路由。
- Pinia / VueUse 状态与交互工具。
- Nuxt Image、Nuxt Icon、Nuxt SEO。
- Embla Carousel、Vue Tippy 等交互模块。
- 项目本身不提供博客 CMS、账号系统或固定线上主页地址。

## 03. 技术矩阵 // TECHNICAL MATRIX

| 层级 | 技术 | 责任 |
| --- | --- | --- |
| 应用 | Nuxt 4、Vue 3、Vue Router 5 | 页面、布局和路由 |
| 状态 | Pinia、VueUse | 交互与状态 |
| 内容与媒体 | Nuxt Image、Nuxt Icon | 图片和图标 |
| SEO | Nuxt SEO | metadata 与分享信息 |
| 构建 | pnpm 10、Sass | 开发、构建和静态生成 |

## 04. 目录拓扑 // REPOSITORY TOPOLOGY

~~~text
.
├── app/                    # Nuxt 页面、布局与路由
├── components/             # 可复用 UI 组件
├── public/                 # 静态资源
├── server/                 # 服务端接口（如有）
├── homepage.config.ts      # 主页内容配置
├── nuxt.config.ts          # Nuxt 配置
└── package.json
~~~

## 05. 快速开始 // QUICK START

环境要求：Node.js 20+、pnpm 10（packageManager 为 pnpm@10.33.0）。

~~~bash
pnpm install
pnpm dev
# 默认打开 http://localhost:3000
~~~

## 06. 部署与验证 // DEPLOYMENT & VALIDATION

~~~bash
pnpm lint
pnpm build
pnpm preview
pnpm generate
~~~

build / preview 适合 Nuxt 生产服务，generate 生成 dist/ 静态文件。部署前请检查主页配置、导航、图片资源和 SEO metadata；仓库没有固定线上主页地址。



## 09. 许可证 // LICENSE

仓库当前未附带 LICENSE 文件。使用或再分发前，请先补充许可证并同步更新本节。
