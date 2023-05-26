export default class Project {
	constructor(
		public readonly id: string,
		public readonly title: string,
		public readonly href: string,
		public readonly card: {
			description: string,
			tags: string[],
		},
		public readonly page: {
			wakaTimeBadge: string,
			description: string,
			website: string,
			tools: string[],
			link?: string
		},
	) {}
}
