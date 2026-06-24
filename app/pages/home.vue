<script setup lang="ts">
useHead({ title: '' })
definePageMeta({
	alias: ['/'],
	title: '主页',
})
const appConfig = useAppConfig()
</script>

<template>
<ZhiluAvatar class="avatar" />

<div class="wrapper">
	<ZField>
		<template #label>
			<span style="font-size: 3rem;">👋</span>
		</template>
		<h1 style="font-size: 3rem;">
			你好，<br>我是<mark>{{ appConfig.author.name }}</mark>
		</h1>
		<p class="desc">
			{{ appConfig.subtitle }}
		</p>
		<div>
			<ZButton
				icon="ri:file-list-3-line"
				to="https://blog.cot.wiki/"
				text="博客"
				primary
			/>
			<ZButton
				icon="ri:github-line"
				to="https://github.com/cotovo"
				text="GitHub"
			/>
		</div>
	</ZField>

	<ZField label="介绍">
		<p>你好，我是 <strong>kerntau</strong>，一名即将毕业的信息安全专业学生。</p>
		<p>这里主要记录我的网络安全学习心得、开发实践经历与技术笔记，也连接着我的博客、知识库与个人项目。</p>
		<p>除了信息安全领域的渗透测试与网络基础，我也热衷于 Web 开发，熟悉 C 与 Python，目前主要使用 React 和 Nuxt 等框架构建现代化 Web 应用。</p>
	</ZField>

	<ZField label="近期活动">
		<p><strong>2026 年 4 月 - 至今</strong> · 在完成一件事。</p>
		<p><strong>2026 年 3 月</strong> · 使用 Nuxt 4 重构个人主站。</p>
		<p><strong>2026 年 2 月</strong> · 使用 React / Next.js 重构 <ZLink to="https://blog.cot.wiki/">个人博客</ZLink>。</p>
	</ZField>

	<ZField label="关于主页">
		<p>
			这个主页直接基于开源项目
			<ZLink to="https://github.com/L33Z22L11/homepage-v5" icon="ri:github-line">L33Z22L11/homepage-v5</ZLink>
			改造，并按我的博客资料进行了替换。
		</p>
		<p>
			博客开发也受到开源社区启发，特别感谢以下项目与作者：<br>
		</p>
		<p><ZBadge v-for="item in appConfig.fork" :key="item.link" v-bind="item" /></p>
	</ZField>
</div>
</template>

<style lang="scss" scoped>
.avatar {
	position: fixed;
	opacity: 0.2;
	right: 20vw;
	margin-right: -0.382em; // (1 - √5)/2
	mask-image: radial-gradient(#FFF 43.7%, transparent 70.7%); // (√5 - 1) / 2 x, x = √2 / 2
	font-size: min(100vw, 61.8vh);
	z-index: -1;
}

.desc {
	margin: 1rem 0;
	font-size: 1.5rem;
	color: var(--c-text-2);
}
</style>
