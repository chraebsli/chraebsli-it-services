import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const specialPages = {
	noFollow: ["projects", "imprint"],
	noIndex: [""],
};

type Props = {
	page: string;
}
export default function Meta({page}: Props) {
	const parentPage = page.split(".")[0];
	const customKey = parentPage === "projects" && "projects" || parentPage === "services" && "services";
	const customMeta = customKey ? "common" : null;
	const {t} = useTranslation(customMeta ?? "meta");

	const title = t(`${page}.title`);
	const description = t(`${page}.description`);

	const follow = specialPages.noFollow.includes(parentPage) ? "nofollow" : "follow";
	const index = specialPages.noIndex.includes(parentPage) ? "noindex" : "index";
	return (
		<Helmet>
			<title>{`${title} | chraebsli IT-Services`}</title>
			<meta name="description" content={description} />
			<meta name="robots" content={`${follow}, ${index}`} />
			<meta name="googlebot" content={`${follow}, ${index}`} />
		</Helmet>
	);
}
