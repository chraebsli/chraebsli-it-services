import { useTranslation } from "react-i18next";
import Project, { Projects } from "../../models/project";
import { Tags } from "../../models/project-tag";

export default function projectsList(): Project[] {
	const {t} = useTranslation("common");

	return [
		new Project(
			Projects.Fischlehrpfad,
			t(`projects.${Projects.Fischlehrpfad}.title`),
			t(`projects.${Projects.Fischlehrpfad}.description`),
			`/project/${Projects.Fischlehrpfad}`,
			[Tags.Website, Tags.Client, Tags.Published],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/Fischlehrpfad-Burgdorf-user",
				description: t(`projects.${Projects.Fischlehrpfad}.page.description`, {returnObjects: true}),
				website: t(`projects.${Projects.Fischlehrpfad}.page.website`, {returnObjects: true}),
				tools: ["Grav", "PHP", "Twig", "HTML5", "CSS3", "JavaScript"],
				link: "https://fischlehrpfad.ch",
			},
		),
		new Project(
			Projects.Portfolio,
			t(`projects.${Projects.Portfolio}.title`),
			t(`projects.${Projects.Portfolio}.description`),
			`/project/${Projects.Portfolio}`,
			[Tags.Website, Tags.Personal, Tags.Published],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebsli/portfolio",
				description: t(`projects.${Projects.Portfolio}.page.description`, {returnObjects: true}),
				website: t(`projects.${Projects.Portfolio}.page.website`, {returnObjects: true}),
				tools: ["React", "Node.JS", "TypeScript", "MUI"],
				link: "https://nicholas-krebs.ch",
			},
		),
		new Project(
			Projects.ChraebsliItServices,
			t(`projects.${Projects.ChraebsliItServices}.title`),
			t(`projects.${Projects.ChraebsliItServices}.description`),
			`/project/${Projects.ChraebsliItServices}`,
			[Tags.Website, Tags.Personal, Tags.Published],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebsli/chraebsli-it-services",
				description: t(`projects.${Projects.ChraebsliItServices}.page.description`, {returnObjects: true}),
				website: t(`projects.${Projects.ChraebsliItServices}.page.website`, {returnObjects: true}),
				tools: ["React", "Node.JS", "TypeScript", "MUI"],
			},
		),
		new Project(
			Projects.SGRumisberg,
			t(`projects.${Projects.SGRumisberg}.title`),
			t(`projects.${Projects.SGRumisberg}.description`),
			`/project/${Projects.SGRumisberg}`,
			[Tags.Website, Tags.Client, Tags.Published],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebsli/sgrumisberg.ch",
				description: t(`projects.${Projects.SGRumisberg}.page.description`, {returnObjects: true}),
				website: t(`projects.${Projects.SGRumisberg}.page.website`, {returnObjects: true}),
				tools: ["Grav", "PHP", "Twig", "HTML5", "CSS3", "JavaScript"],
				link: "https://sgrumisberg.ch",
			},
		),
		new Project(
			Projects.MGRumisberg,
			t(`projects.${Projects.MGRumisberg}.title`),
			t(`projects.${Projects.MGRumisberg}.description`),
			`/project/${Projects.MGRumisberg}`,
			[Tags.Website, Tags.Client, Tags.Published],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebsli/mgrumisberg.ch",
				description: t(`projects.${Projects.MGRumisberg}.page.description`, {returnObjects: true}),
				website: t(`projects.${Projects.MGRumisberg}.page.website`, {returnObjects: true}),
				tools: ["Grav", "PHP", "Twig", "HTML5", "CSS3", "JavaScript"],
				link: "https://mgrumisberg.ch",
			},
		),
		new Project(
			Projects.HomeDashboard,
			t(`projects.${Projects.HomeDashboard}.title`),
			t(`projects.${Projects.HomeDashboard}.description`),
			`/project/${Projects.HomeDashboard}`,
			[Tags.Webapp, Tags.Personal, Tags.Development],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebsli/home-dashboard",
				description: t(`projects.${Projects.HomeDashboard}.page.description`, {returnObjects: true}),
				website: t(`projects.${Projects.HomeDashboard}.page.website`, {returnObjects: true}),
				tools: ["React", "Node.JS", "Next.JS", "TypeScript", "MUI"],
				link: "https://github.com/chraebsli/home-dashboard",
			},
		),
		new Project(
			Projects.CodingCrabBlog,
			t(`projects.${Projects.CodingCrabBlog}.title`),
			t(`projects.${Projects.CodingCrabBlog}.description`),
			`/project/${Projects.CodingCrabBlog}`,
			[Tags.Website, Tags.Personal, Tags.Published],
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebsli/coding-crab-blog",
				description: t(`projects.${Projects.CodingCrabBlog}.page.description`, {returnObjects: true}),
				website: t(`projects.${Projects.CodingCrabBlog}.page.website`, {returnObjects: true}),
				tools: ["Ruby", "Jekyll", "SASS", "GitHub Pages"],
				link: "https://blog.chraebsli.dev",
			},
		),
	];
}
