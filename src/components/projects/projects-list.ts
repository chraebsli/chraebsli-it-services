import { useTranslation } from "react-i18next";
import Project from "../../models/project";

export default function projectsList(): Project[] {
	const {t} = useTranslation("common");

	return [
		new Project(
			"fischlehrpfad",
			t("projects.fischlehrpfad.title"),
			"/project/fischlehrpfad",
			{
				description: t("projects.fischlehrpfad.card.description"),
				tags: t("projects.fischlehrpfad.card.tags", {returnObjects: true}),
			},
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/Fischlehrpfad-Burgdorf",
				description: t("projects.fischlehrpfad.page.description", {returnObjects: true}),
				website: t("projects.fischlehrpfad.page.website", {returnObjects: true}),
				tools: ["Grav", "PHP", "Twig", "HTML5", "CSS3", "JavaScript"],
				link: "https://fischlehrpfad.ch",
			},
		),
		new Project(
			"portfolio",
			t("projects.portfolio.title"),
			"/project/portfolio",
			{
				description: t("projects.portfolio.card.description"),
				tags: t("projects.portfolio.card.tags", {returnObjects: true}),
			},
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/homepage",
				description: t("projects.portfolio.page.description", {returnObjects: true}),
				website: t("projects.portfolio.page.website", {returnObjects: true}),
				tools: ["React", "Node.JS", "TypeScript", "MUI"],
				link: "https://nicholas-krebs.ch",
			},
		),
		new Project(
			"chraebsli-it-services",
			t("projects.chraebsli-it-services.title"),
			"/project/chraebsli-it-services",
			{
				description: t("projects.chraebsli-it-services.card.description"),
				tags: t("projects.chraebsli-it-services.card.tags", {returnObjects: true}),
			},
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/homepage",
				description: t("projects.chraebsli-it-services.page.description", {returnObjects: true}),
				website: t("projects.chraebsli-it-services.page.website", {returnObjects: true}),
				tools: ["React", "Node.JS", "TypeScript", "MUI"],
			},
		),
		new Project(
			"sgrumisberg",
			t("projects.sgrumisberg.title"),
			"/project/sgrumisberg",
			{
				description: t("projects.sgrumisberg.card.description"),
				tags: t("projects.sgrumisberg.card.tags", {returnObjects: true}),
			},
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/sgrumisberg.ch",
				description: t("projects.sgrumisberg.page.description", {returnObjects: true}),
				website: t("projects.sgrumisberg.page.website", {returnObjects: true}),
				tools: ["Grav", "PHP", "Twig", "HTML5", "CSS3", "JavaScript"],
				link: "https://sgrumisberg.ch",
			},
		),
		new Project(
			"mgrumisberg",
			t("projects.mgrumisberg.title"),
			"/project/mgrumisberg",
			{
				description: t("projects.mgrumisberg.card.description"),
				tags: t("projects.mgrumisberg.card.tags", {returnObjects: true}),
			},
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/mgrumisberg.ch",
				description: t("projects.mgrumisberg.page.description", {returnObjects: true}),
				website: t("projects.mgrumisberg.page.website", {returnObjects: true}),
				tools: ["Grav", "PHP", "Twig", "HTML5", "CSS3", "JavaScript"],
				link: "https://mgrumisberg.ch",
			},
		),
		new Project(
			"home-dashboard",
			t("projects.homeDashboard.title"),
			"/project/home-dashboard",
			{
				description: t("projects.homeDashboard.card.description"),
				tags: t("projects.homeDashboard.card.tags", {returnObjects: true}),
			},
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/home-dashboard",
				description: t("projects.homeDashboard.page.description", {returnObjects: true}),
				website: t("projects.homeDashboard.page.website", {returnObjects: true}),
				tools: ["React", "Node.JS", "Next.JS", "TypeScript", "MUI"],
				link: "https://github.com/chraebsli/home-dashboard",
			},
		),
	];
}
