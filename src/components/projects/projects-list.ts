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
				description: t("projects.fischlehrpfad.page.description"),
				website: t("projects.fischlehrpfad.page.website"),
				tools: ["Grav", "PHP", "Twig", "HTML5", "CSS3", "JavaScript"],
				link: "https://fischlehrpfad.ch",
			},
		),
		// TODO: split project to chraebsli ti services and portfolio
		new Project(
			"personal",
			t("projects.personal.title"),
			"/project/personal",
			{
				description: t("projects.personal.card.description"),
				tags: t("projects.personal.card.tags", {returnObjects: true}),
			},
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/homepage",
				description: t("projects.personal.page.description"),
				website: t("projects.personal.page.website"),
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
				description: t("projects.sgrumisberg.page.description"),
				website: t("projects.sgrumisberg.page.website"),
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
				description: t("projects.mgrumisberg.page.description"),
				website: t("projects.mgrumisberg.page.website"),
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
				description: t("projects.homeDashboard.page.description"),
				website: t("projects.homeDashboard.page.website"),
				tools: ["React", "Node.JS", "Next.JS", "TypeScript", "MUI"],
				link: "https://github.com/chraebsli/home-dashboard",
			},
		),
	];
}
