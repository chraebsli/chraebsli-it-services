import React from "react";
import { Typography, useTheme } from "@mui/material";

export function Line({ top, bottom }: { top?: number; bottom?: number }) {
	const primary = useTheme().palette.primary.main;
	return (
		<hr
			style={ {
				border: `2px solid ${ primary }`,
				marginTop: `${ top }rem` ?? 0,
				marginBottom: `${ bottom }rem` ?? 0,
			} }
		/>
	);
}

export function Image({ src, alt, height, width, sx, m, r }: { src: any; alt: string; height?: number; width?: number | string; sx?: React.CSSProperties, m?: boolean, r?: boolean }) {
	return <img
		className={ r ? "r" : "" } src={ src } alt={ alt } height={ height } width={width}
		style={ { marginBottom: m ? "2rem" : 0, ...sx } } />;
}

export function PageTitle({ children }: { children: React.ReactNode }) {
	return <Typography variant={ "h4" }>{ children }</Typography>;
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
	return <Typography variant={ "h5" }>{ children }</Typography>;
}
