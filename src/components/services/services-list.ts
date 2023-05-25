import { useTranslation } from "react-i18next";
import FullService from "../../models/service";

export default function servicesList(): FullService[] {
	const {t} = useTranslation("common");
	return [
		new FullService(
			"website",
			t("services.website.title"),
			"/service/website",
			t("services.website.features", {returnObjects: true}),
			{
				teaser: t("services.website.card.teaser"),
				description: t("services.website.card.description"),
			},
			{
				teaser: t("services.website.page.teaser"),
				description: t("services.website.page.description"),
			},
		),
		new FullService(
			"webapp",
			t("services.webapp.title"),
			"/service/webapp",
			t("services.webapp.features", {returnObjects: true}),
			{
				teaser: t("services.webapp.card.teaser"),
				description: t("services.webapp.card.description"),
			},
			{
				teaser: t("services.webapp.page.teaser"),
				description: t("services.webapp.page.description"),
			},
		),
		new FullService(
			"database",
			t("services.database.title"),
			"/service/database",
			t("services.database.features", {returnObjects: true}),
			{
				teaser: t("services.database.card.teaser"),
				description: t("services.database.card.description"),
			},
			{
				teaser: t("services.database.page.teaser"),
				description: t("services.database.page.description"),
			},
		),
		new FullService(
			"other",
			t("services.other.title"),
			"/service/other",
			t("services.other.features", {returnObjects: true}),
			{
				teaser: t("services.other.card.teaser"),
				description: t("services.other.card.description"),
			},
			{
				teaser: t("services.other.page.teaser"),
				description: t("services.other.page.description"),
			},
		),
	];
}