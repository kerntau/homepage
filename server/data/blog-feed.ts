export const fallbackBlogFeed: Array<{
	title: string
	link: { $href: string }
	id: string
	published: string
	updated: string
	summary: string
	category: Array<{ $term: string; $scheme: string }>
}> = []
