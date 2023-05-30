import { useTranslation } from "react-i18next";
import FullService, { Services } from "../../models/service";

export default function servicesList(): FullService[] {
	const {t} = useTranslation("common");
	return [
		new FullService(
			Services.Website,
			t(`services.${Services.Website}.title`),
			`/service/${Services.Website}`,
			t(`services.${Services.Website}.teaser`),
			t(`services.${Services.Website}.description`),
			t(`services.${Services.Website}.features`, {returnObjects: true}),
			{
				description: t(`services.${Services.Website}.page.description`, {returnObjects: true}),
			},
		),
		new FullService(
			Services.Webapp,
			t(`services.${Services.Webapp}.title`),
			`/service/${Services.Webapp}`,
			t(`services.${Services.Webapp}.teaser`),
			t(`services.${Services.Webapp}.description`),
			t(`services.${Services.Webapp}.features`, {returnObjects: true}),
			{
				description: t(`services.${Services.Webapp}.page.description`, {returnObjects: true}),
			},
		),
		new FullService(
			Services.Database,
			t(`services.${Services.Database}.title`),
			`/service/${Services.Database}`,
			t(`services.${Services.Database}.teaser`),
			t(`services.${Services.Database}.description`),
			t(`services.${Services.Database}.features`, {returnObjects: true}),
			{
				description: t(`services.${Services.Database}.page.description`, {returnObjects: true}),
			},
		),
		new FullService(
			Services.Other,
			t(`services.${Services.Other}.title`),
			`/service/${Services.Other}`,
			t(`services.${Services.Other}.teaser`),
			t(`services.${Services.Other}.description`),
			t(`services.${Services.Other}.features`, {returnObjects: true}),
			{
				description: t(`services.${Services.Other}.page.description`, {returnObjects: true}),
			},
		),
	];
}