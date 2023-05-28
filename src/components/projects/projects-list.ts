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
			["web", "client", "deployed"],
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
			t("projects.portfolio.description"),
			"/project/portfolio",
			["web", "personal", "deployed"],
			{
				wakaTimeBadge: "https://wakatime.com/badge/user/2b5dcd85-63c3-46d3-8185-6766880e0b04/project/b7091aeb-09e8-4ca5-94d0-aa4455bc771a",
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
			["web", "personal", "deployed"],
			{
				wakaTimeBadge: "https://wakatime.com/badge/user/2b5dcd85-63c3-46d3-8185-6766880e0b04/project/5f370487-9580-4e93-bf8e-17cb2bebd579",
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
			["web", "client", "deployed"],
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
			["web", "client", "development"],
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
			t("projects.homeDashboard.title"),
			t("projects.homeDashboard.description"),
			"/project/home-dashboard",
			["web", "personal", "development"],
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
