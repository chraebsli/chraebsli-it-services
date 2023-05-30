import { useTranslation } from "react-i18next";
import Project from "../../models/project";

export default function projectsList(): Project[] {
	const {t} = useTranslation("common");

	return [
		new Project(
			"fischlehrpfad",
			t("projects.fischlehrpfad.title"),
			t("projects.fischlehrpfad.description"),
			"/project/fischlehrpfad",
			["website", "client", "published"],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/Fischlehrpfad-Burgdorf-user",
				description: t("projects.fischlehrpfad.page.description", {returnObjects: true}),
				website: t("projects.fischlehrpfad.page.website", {returnObjects: true}),
				tools: ["Grav", "PHP", "Twig", "HTML5", "CSS3", "JavaScript"],
				link: "https://fischlehrpfad.ch",
			},
		),
		new Project(
			"portfolio",
			t("projects.portfolio.title"),
			t("projects.portfolio.description"),
			"/project/portfolio",
			["website", "personal", "published"],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebsli/portfolio",
				description: t("projects.portfolio.page.description", {returnObjects: true}),
				website: t("projects.portfolio.page.website", {returnObjects: true}),
				tools: ["React", "Node.JS", "TypeScript", "MUI"],
				link: "https://nicholas-krebs.ch",
			},
		),
		new Project(
			"chraebsli-it-services",
			t("projects.chraebsli-it-services.title"),
			t("projects.chraebsli-it-services.description"),
			"/project/chraebsli-it-services",
			["website", "personal", "published"],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebsli/chraebsli-it-services",
				description: t("projects.chraebsli-it-services.page.description", {returnObjects: true}),
				website: t("projects.chraebsli-it-services.page.website", {returnObjects: true}),
				tools: ["React", "Node.JS", "TypeScript", "MUI"],
			},
		),
		new Project(
			"sgrumisberg",
			t("projects.sgrumisberg.title"),
			t("projects.sgrumisberg.description"),
			"/project/sgrumisberg",
			["website", "client", "published"],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebsli/sgrumisberg.ch",
				description: t("projects.sgrumisberg.page.description", {returnObjects: true}),
				website: t("projects.sgrumisberg.page.website", {returnObjects: true}),
				tools: ["Grav", "PHP", "Twig", "HTML5", "CSS3", "JavaScript"],
				link: "https://sgrumisberg.ch",
			},
		),
		new Project(
			"mgrumisberg",
			t("projects.mgrumisberg.title"),
			t("projects.mgrumisberg.description"),
			"/project/mgrumisberg",
			["website", "client", "published"],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebsli/mgrumisberg.ch",
				description: t("projects.mgrumisberg.page.description", {returnObjects: true}),
				website: t("projects.mgrumisberg.page.website", {returnObjects: true}),
				tools: ["Grav", "PHP", "Twig", "HTML5", "CSS3", "JavaScript"],
				link: "https://mgrumisberg.ch",
			},
		),
		new Project(
			"home-dashboard",
			t("projects.home-dashboard.title"),
			t("projects.home-dashboard.description"),
			"/project/home-dashboard",
			["webapp", "personal", "development"],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebsli/home-dashboard",
				description: t("projects.home-dashboard.page.description", {returnObjects: true}),
				website: t("projects.home-dashboard.page.website", {returnObjects: true}),
				tools: ["React", "Node.JS", "Next.JS", "TypeScript", "MUI"],
				link: "https://github.com/chraebsli/home-dashboard",
			},
		),
		new Project(
			"coding-crab-blog",
			t("projects.coding-crab-blog.title"),
			t("projects.coding-crab-blog.description"),
			"/project/coding-crab-blog",
			["website", "personal", "published"],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebsli/coding-crab-blog",
				description: t("projects.coding-crab-blog.page.description", {returnObjects: true}),
				website: t("projects.coding-crab-blog.page.website", {returnObjects: true}),
				tools: ["Ruby", "Jekyll", "SASS", "GitHub Pages"],
				link: "https://blog.chraebsli.dev",
			},
		),
	];
}
