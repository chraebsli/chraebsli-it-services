export default class Project {
	constructor(
		public readonly id: string,
		public readonly title: string,
		public readonly description: string[],
		public readonly href: string,
		public readonly tags: Tag[],
		public readonly page: {
			wakaTimeBadge: string,
			description: string[],
			website: string[],
			tools: string[],
			link?: string
		},
	) {}
}

type Tag = "web" | "client" | "server" | "deployed" | "inProgress" | "finished" | "personal" | "development"
