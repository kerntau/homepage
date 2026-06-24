// 存储 nuxt.config 和 app.config 共用的配置

import type { NitroConfig } from 'nitropack'

const author = {
	name: 'kerntau',
	avatar: '/avatar.png',
	email: 'cotovo@163.com',
	homepage: 'https://blog.cot.wiki/',
}

const homepageConfig = {
	title: '序栈 (@cotovo)',
	subtitle: '知行合一，缄默前行。',
	description: 'kerntau 的个人主页，聚焦网络安全、底层原理与全栈架构实践。这里连接博客「序栈」与知识库内容，记录技术学习、开发实践与工程思考。',
	author,
	language: 'zh-CN',
	timeZone: 'Asia/Shanghai',
	favicon: '/logo.png',
	url: 'https://blog.cot.wiki/',
	blogAtom: 'https://blog.cot.wiki/feed.xml',
	icp: '鄂ICP备2025157857号',
}

// https://nitro.build/config#routerules
export const routeRules: NitroConfig['routeRules'] = {
	'/api/avatar.png': { redirect: author.avatar },
	'/api/icon.png': { redirect: homepageConfig.favicon },
	'/favicon.ico': { redirect: homepageConfig.favicon },
}

export default homepageConfig
