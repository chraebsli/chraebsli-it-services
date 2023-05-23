import React from "react";
import { Card, Stack, Typography } from "@mui/material";
import Page from "../../components/common/Page";

// assets and styles
import "./About.sass";
import PersonIcon from "@mui/icons-material/Person";
import { Trans, useTranslation } from "react-i18next";

export default function About() {
	const {t} = useTranslation("pages");

	return (
		<Page page={"about"}>
			<article>
				<Stack spacing={3}>
					<Card id={"about"} sx={{padding: "2rem"}}>
						<h2>
							<PersonIcon /> {t("about.title")}
						</h2>
						<Typography>
							<Trans i18nKey="about.description" t={t}>
								We are Chraebsli IT Services
							</Trans>
						</Typography>
					</Card>
				</Stack>
			</article>
		</Page>
	);
}
