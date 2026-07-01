<script setup lang="ts">
useHead({ title: '日志' })
definePageMeta({ headerText: '互联网上的活动记录' })

const timeline = {
	'2026-07': '使用域名 coox.one，并全面使用 Cloudflare。',
	'2026-04': '进行中的一项长期事项。',
	'2026-03': '个人主页：使用 Nuxt 4 重构主站界面。',
	'2026-02': '博客：使用 React 重构序栈。',
	'2025-11': ['博客：站点正式成型，名称定为 ', h('code', '序栈 / COT')],
	'2025-03': '开始持续推进个人博客与知识库一体化建设。',
}
</script>

<template>
<ZTimeline :timeline />
</template>
