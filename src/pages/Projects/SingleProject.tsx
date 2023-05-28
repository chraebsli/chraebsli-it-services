import React from "react";
import { useParams } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import Page from "../../components/common/Page";
import { Line, PageTitle, SectionTitle } from "../../components/Text";
import NotFound404 from "../Error/404";
import { useTranslation } from "react-i18next";
import "./Projects.sass";
import ToolImage from "../../components/projects/ToolImage";
import WakaTimeBadge from "../../components/projects/WakaTimeBadge";
import projectsList from "../../components/projects/projects-list";

export default function SingleProject$() {
	const {t} = useTranslation("common");

	const page = useParams().project;

	const projects = projectsList();
	const project = projects.find(project => project.id === page);

	if (!project) return <NotFound404 />;

	return (
		<Page page={`projects.${project.id}`} className={"single-project"}>
			<section>
				<PageTitle>{project.title}</PageTitle>
				<WakaTimeBadge url={project.page.wakaTimeBadge} />
				<Line bottom={2} />
			</section>

			<article className="page-content">
				<Stack spacing={3}>
					<section>
						<SectionTitle> {t("projects.titles.description")} </SectionTitle>
						{project.page.description.map((paragraph: string, i: number) => <Typography key={i}> {paragraph} </Typography>)}
					</section>
					<section>
						<SectionTitle> {t("projects.titles.website")} </SectionTitle>
						{project.page.website.map((paragraph: string, i: number) => <Typography key={i}> {paragraph} </Typography>)}
						<br />
					</section>
					<section>
						<SectionTitle> {t("projects.titles.tools")} </SectionTitle>
						<div className={"project-tools"} data-count={6}>
							{project.page.tools.map((tool: string, i: number) => <ToolImage key={i} name={tool} />)}
						</div>
					</section>
				</Stack>
			</article>
		</Page>
	);
}
