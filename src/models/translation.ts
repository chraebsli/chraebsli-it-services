export type Translation = {
	meta: {
		home: PageMeta,
		about: PageMeta,
		projects: PageMeta,
		services: PageMeta,
		contact: PageMeta,
		imprint: PageMeta,
		error: {
			404: PageMeta,
		},
	},
	common: {
		projects: {
			title: string,
			learnMore: string,
			imageAlt: string,
			titles: {
				description: string,
				website: string,
				tools: string,
			},
			fischlehrpfad: Project,
			portfolio: Project,
			"chraebsli-it-services": Project,
			sgrumisberg: Project,
			mgrumisberg: Project,
			"home-dashboard": Project,
			"coding-crab-blog": Project,
		},
		services: {
			title: string,
			learnMore: string,
			illustration: string,
			includedFeatures: string,
			sendRequest: string,
			website: Service
			webapp: Service,
			database: Service,
			other: Service,
		},
	},
	components: {
		header: {
			title: string,
			links: {
				about: string,
				services: string,
				projects: string,
				contact: string,
			},
		},
		footer: {
			copyright: string,
			links: {
				imprint: string,
				contact: string,
				privacy: string,
			},
		},
		cookieDisclaimer: {
			title: string,
			learnMore: string,
			accept: string,
		},
	},
	pages: {
		error: {
			404: {
				title: string,
				description: string,
			},
		},
		home: {
			welcome: string,
			subWelcome: string,
			description: string,
			sections: {
				servicesTitle: string,
				servicesDescription: string,
				projectsTitle: string,
				projectsDescription: string,
				socialTitle: string,
				socialDescription: string,
			},
		},
		about: {
			title: string,
			description: string[],
		},
		contact: {
			title: string,
			contactMe: string,
			emailAddress: string,
			or: string,
			form: {
				firstName: string,
				lastName: string,
				email: string,
				service: string,
				message: string,
				required: string,
				send: string,
				success: string,
			},
		},
		imprint: {
			title: string,
			operator: string,
			operatorText: string,
			contactMe: string,
			resources: string,
			resourcesText: string,
			links: {
				illustrations: string,
				icons: string,
			},
		},
	},
}

type PageMeta = {
	title: string,
	description: string,
}

type Project = {
	title: string,
	description: string,
	page: {
		description: string[],
		website: string[],
	},
}

type Service = {
	title: string,
	teaser: string,
	description: string,
	features: string[],
	page: {
		description: string[],
	},
}
