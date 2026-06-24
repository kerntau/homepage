import type { Nav } from '~/types/nav'
import { h } from 'vue'
import homepageConfig from '~~/homepage.config'

// 图标查询：https://yesicon.app/ph
// 图标插件：https://marketplace.visualstudio.com/items?itemName=antfu.iconify

// @keep-sorted
export default defineAppConfig({
	...homepageConfig,

	footer: [
		`© ${new Date().getFullYear()} kerntau`,
		h('a', { href: 'https://github.com/cotovo/homepage', target: '_blank', rel: 'noopener nofollow' }, 'cotovo/homepage'),
	],

	// 用于在主页展示下游引用
	fork: [
		{
			img: 'https://github.com/L33Z22L11.png',
			link: 'https://github.com/L33Z22L11/homepage-v5',
			text: 'homepage-v5',
		},
		{
			img: 'https://github.com/lxchapu.png',
			link: 'https://github.com/lxchapu/astro-gyoza',
			text: 'astro-gyoza',
		},
		{
			img: 'https://github.com/innei.png',
			link: 'https://github.com/innei/Shiro',
			text: 'Shiro',
		},
	],

	nav: [
		{
			title: '',
			items: [
				{ icon: 'ri:id-card-line', text: '简介', url: '/' },
				{ icon: 'ri:quill-pen-line', text: '文章', url: '/article' },
				{ icon: 'ri:code-line', text: '项目', url: '/project' },
				{ icon: 'ri:planet-line', text: '站点', url: '/site' },
				{ icon: 'ri:history-line', text: '日志', url: '/log' },
			],
		},
		{
			title: '社交',
			items: [
				{ icon: 'ri:mail-line', text: 'cotovo@163.com', url: 'mailto:cotovo@163.com' },
				{ icon: 'ri:github-line', text: 'GitHub', url: 'https://github.com/cotovo' },
				{ icon: 'ri:bilibili-line', text: 'Bilibili', url: 'https://space.bilibili.com/9655855' },
				{ icon: 'ri:music-2-line', text: 'Douyin', url: 'https://v.douyin.com/HWMgjLaTtFk' },
			],
		},
	] satisfies Nav,

	themes: {
		light: {
			icon: 'ri:sun-line',
			tip: '浅色模式',
		},
		system: {
			icon: 'ri:tv-2-line',
			tip: '跟随系统',
		},
		dark: {
			icon: 'ri:moon-line',
			tip: '深色模式',
		},
	},
})
