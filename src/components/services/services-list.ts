import { useTranslation } from "react-i18next";
import FullService from "../../models/service";

export default function servicesList(): FullService[] {
	const {t} = useTranslation("common");
	return [
		new FullService(
			"website",
			t("services.website.title"),
			"/service/website",
			t("services.website.teaser"),
			t("services.website.description"),
			t("services.website.features", {returnObjects: true}),
			{
				description: t("services.website.page.description", {returnObjects: true}),
			},
		),
		new FullService(
			"webapp",
			t("services.webapp.title"),
			"/service/webapp",
			t("services.webapp.teaser"),
			t("services.webapp.description"),
			t("services.webapp.features", {returnObjects: true}),
			{
				description: t("services.webapp.page.description", {returnObjects: true}),
			},
		),
		new FullService(
			"database",
			t("services.database.title"),
			"/service/database",
			t("services.database.teaser"),
			t("services.database.description"),
			t("services.database.features", {returnObjects: true}),
			{
				description: t("services.database.page.description", {returnObjects: true}),
			},
		),
		new FullService(
			"other",
			t("services.other.title"),
			"/service/other",
			t("services.other.teaser"),
			t("services.other.description"),
			t("services.other.features", {returnObjects: true}),
			{
				description: t("services.other.page.description", {returnObjects: true}),
			},
		),
	];
}