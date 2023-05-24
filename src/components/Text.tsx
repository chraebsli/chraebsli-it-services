import React from "react";
import { Typography, useTheme } from "@mui/material";

type LineProps = {
	top?: number;
	bottom?: number;
}

export function Line({top, bottom}: LineProps) {
	const primary = useTheme().palette.primary.main;
	return (
		<hr
			style={{
				border: `2px solid ${primary}`,
				marginTop: `${top}rem` ?? 0,
				marginBottom: `${bottom}rem` ?? 0,
			}}
		/>
	);
}

type ImageProps = {
	src: any;
	alt: string;
	height?: number;
	width?: number | string;
	sx?: React.CSSProperties,
	m?: boolean,
	r?: boolean
}

export function Image({src, alt, height, width, sx, m, r}: ImageProps) {
	return <img
		className={r ? "r" : ""} src={src} alt={alt} height={height} width={width}
		style={{marginBottom: m ? "2rem" : 0, ...sx}} />;
}

type TitleProps = {
	children: React.ReactNode;
}

export function PageTitle({children}: TitleProps) {
	return <Typography variant={"h4"}>{children}</Typography>;
}

export function SectionTitle({children}: TitleProps) {
	return <Typography variant={"h5"}>{children}</Typography>;
}
