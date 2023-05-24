import React from "react";
import { Stack, Typography } from "@mui/material";
import Page from "../../components/common/Page";
import { Image, Line, PageTitle, SectionTitle } from "../../components/Text";
import { Picture } from "../../components/Picture";
import { useTranslation } from "react-i18next";

export default function NotFound404() {
	const { t } = useTranslation("pages");

	return (
		<Page page={ "error.404" }>
			<section>
				<PageTitle>Error 404</PageTitle>
				<Line bottom={ 2 } />
			</section>

			<article className="page-content">
				<Image src={ "/media/404.webp" } alt={ "Illustration Error 404" } height={ 200 } m r />
				<Stack spacing={ 3 }>
					<section>
						<SectionTitle>{ t("error.404.title") }</SectionTitle>
						<Typography>
							{ t("error.404.description") }
						</Typography>
					</section>
				</Stack>
			</article>
		</Page>
	);
}
