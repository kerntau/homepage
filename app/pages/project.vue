<script setup lang="ts">
useHead({ title: '项目' })
definePageMeta({ headerText: '参与的开源项目' })

const projects = [
	{
		title: 'blog',
		github: 'cotovo/blog',
		description: '基于 Next.js 16 App Router 构建的全栈技术主页与知识库系统，统一整合博客、知识库、搜索、归档、多语言与 SEO 管线。',
	},
	{
		title: 'homepage',
		github: 'cotovo/homepage',
		description: '当前个人主页仓库，基于 Nuxt 的开源主页模板改造，用于承接个人简介、项目索引与博客入口。',
	},
	{
		title: 'homepage-v5',
		github: 'L33Z22L11/homepage-v5',
		description: '本主页直接使用的上游开源模板，保留原有交互结构并替换为我自己的资料。',
	},
]
</script>

<template>
<section>
	<ZProject v-for="project in projects" :key="project.title" v-bind="project" />
</section>
</template>

<style lang="scss" scoped>
section {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
	gap: 1rem;
}
</style>
