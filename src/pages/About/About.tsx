import React from "react";
import { Card, Stack, Typography } from "@mui/material";
import Page from "../../components/common/Page";
import "./About.sass";
import PersonIcon from "@mui/icons-material/Person";
import { useTranslation } from "react-i18next";

export default function About() {
	const {t} = useTranslation("pages");
	const description = t("about.description", {returnObjects: true}) as string[];

	return (
		<Page page={"about"}>
			<article>
				<Stack spacing={3}>
					<Card id={"about"} sx={{padding: "2rem"}}>
						<h2>
							<PersonIcon /> {t("about.title")}
						</h2>
						{description.map((paragraph, index) => <Typography key={index}>{paragraph}</Typography>)}
					</Card>
				</Stack>
			</article>
		</Page>
	);
}
