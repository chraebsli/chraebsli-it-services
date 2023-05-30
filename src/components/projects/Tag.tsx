import React from "react";
import { Chip, Typography } from "@mui/material";
import { Tag as TagName } from "@models/project";

type Props = {
	name: TagName
}
export default function Tag({name}: Props) {
	let color: "secondary" | "default" | "success" | "warning" | "error" | "primary" | "info";
	// TODO: enum
	switch (name) {
	case "development":
		color = "warning";
		break;
	case "published":
		color = "success";
		break;
	case "client":
		color = "error";
		break;
	case "personal":
		color = "info";
		break;
	case "website":
		color = "primary";
		break;
	case "webapp":
		color = "primary";
		break;
	default:
		color = "default";
	}

	return (
		<Chip
			variant="outlined"
			color={color}
			label={<Typography variant={"subtitle2"} color={"text.primary"}>{name}</Typography>}
		/>
	);
}
