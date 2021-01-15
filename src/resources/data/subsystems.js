/**
 * This file has all the information that has to do with our subsystems.
 */
import React from "react";
import {
	Collections,
	Settings,
	Power,
	Gamepad,
	PhoneAndroid,
	Storage,
} from "@material-ui/icons"; // import icons for each subsystem

export const SUBSYSTEM = {
	MECHANICAL: "mechanical",
	ELECTRICAL: "elecrtical",
	CONTROLS: "controls",
	FRONT_END: "front end",
	BACK_END: "back end",
	IMAGE_PROCESSIG: "image processing",
};

export const subsystemIcon = {
	[SUBSYSTEM.MECHANICAL]: <Settings />,
	[SUBSYSTEM.ELECTRICAL]: <Power />,
	[SUBSYSTEM.CONTROLS]: <Gamepad />,
	[SUBSYSTEM.FRONT_END]: <PhoneAndroid />,
	[SUBSYSTEM.BACK_END]: <Storage />,
	[SUBSYSTEM.IMAGE_PROCESSIG]: <Collections />,
};
