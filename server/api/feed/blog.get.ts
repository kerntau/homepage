import { XMLParser } from 'fast-xml-parser'
import homepageConfig from '~~/homepage.config'
import { fallbackBlogFeed } from '~~/server/data/blog-feed'

function toArray<T>(value: T | T[] | undefined): T[] {
	if (!value) {
		return []
	}

	return Array.isArray(value) ? value : [value]
}

function toIsoDate(value: string | undefined): string | undefined {
	if (!value) {
		return value
	}

	const date = new Date(value)
	return Number.isNaN(date.getTime()) ? value : date.toISOString()
}

export default defineCachedEventHandler(async (_event) => {
	try {
		const parser = new XMLParser({
			attributeNamePrefix: '$',
			cdataPropName: '$',
			ignoreAttributes: false,
			isArray: name => name === 'entry' || name === 'category' || name === 'item',
			textNodeName: '_',
		})

		const resp = await fetch(homepageConfig.blogAtom)
		const xml = await resp.text()
		const parsed = parser.parse(xml)

		if (parsed.feed?.entry?.length) {
			return parsed.feed.entry
		}

		const rssItems = toArray(parsed.rss?.channel?.item)
		if (rssItems.length) {
			return rssItems.map((item: any) => ({
				title: item.title,
				link: { $href: item.link },
				id: item.guid ?? item.link,
				published: toIsoDate(item.pubDate),
				updated: toIsoDate(item.pubDate),
				summary: item.description,
				category: toArray(item.category).map((name: string) => ({
					$term: name,
					$scheme: '',
				})),
			}))
		}

		return fallbackBlogFeed
	}
	catch {
		return fallbackBlogFeed
	}
}, {
	maxAge: 60 * 60 * 24,
})
