<script setup lang="ts">
import type { CardProps } from '~/components/partial/Card.vue'

useHead({ title: '站点' })
definePageMeta({ headerText: '一些网站' })

const toolSites: Array<CardProps> = [
	{
		name: '序栈博客',
		nameAlt: 'blog.cot.wiki',
		buttons: [
			{ icon: 'ph:planet-duotone', text: '访问', to: 'https://blog.cot.wiki' },
			{ icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/cotovo/blog' },
		],
		desc: '我的主博客与技术沉淀站点，围绕网络安全、底层原理、全栈架构与工程化实践持续更新。',
	},
	{
		name: '知识库',
		nameAlt: 'blog.cot.wiki/kb',
		buttons: [
			{ icon: 'ph:planet-duotone', text: '访问', to: 'https://blog.cot.wiki/kb' },
			{ icon: 'ph:github-logo-duotone', text: '源码', to: 'https://github.com/cotovo/blog' },
		],
		desc: '博客中的知识库分区，聚焦 C 语言、算法、基础原理与长期可复用的技术笔记整理。',
	},
	{
		name: '个人主页',
		nameAlt: 'cotovo/homepage',
		buttons: [
			{ icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/cotovo/homepage' },
			{ icon: 'ph:code-duotone', text: '模板来源', to: 'https://github.com/L33Z22L11/homepage-v5' },
		],
		desc: '当前主页项目，使用开源 Nuxt 模板承接个人简介、项目索引与博客跳转，作为博客之外更轻量的对外入口。',
	},

]

const orgSites: Array<CardProps> = [
	{
		name: 'GitHub 主页',
		nameAlt: 'github.com/cotovo',
		buttons: [
			{ icon: 'ph:planet-duotone', text: '访问', to: 'https://github.com/cotovo' },
		],
		desc: '集中展示我的公开仓库、实验项目与代码轨迹，也是博客源码与主页源码的统一入口。',
	},
	{
		name: 'Bilibili',
		nameAlt: 'space.bilibili.com/9655855',
		buttons: [
			{ icon: 'ph:planet-duotone', text: '访问', to: 'https://space.bilibili.com/9655855' },
		],
		desc: '视频与动态内容的补充出口，用来承接更轻量的分享与非长文形式的表达。',
	},
	{
		name: 'Douyin',
		nameAlt: 'v.douyin.com/HWMgjLaTtFk',
		buttons: [
			{ icon: 'ph:planet-duotone', text: '访问', to: 'https://v.douyin.com/HWMgjLaTtFk' },
		],
		desc: '短内容与日常表达的补充渠道，和博客长文形成不同节奏的输出方式。',
	},
]
</script>

<template>
<ZTitle>工具类站点</ZTitle>
<ZCardList :data-list="toolSites" />
<ZTitle>组织门户</ZTitle>
<ZCardList :data-list="orgSites" />
</template>

<style lang="scss" scoped>
</style>
