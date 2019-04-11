import React from "react";
import { render } from "react-dom";

import App from "./components/App/App";
import styles from "./../scss/globals/_index.pcss";
import MeshHelper from "mesh-helper";

import * as RevealJs from "./../../../src/js/index";

if (process.env.NODE_ENV === "development") {
	const meshHelper = new MeshHelper({
		containerClass: "nervo-container",
		voidClass: "nervo-void",
		columnClass: "nervo-col",
		isHidden: true,
	});
}

const target = document.getElementById("root");
if (target) render(<App />, target);

const agent = new RevealJs.Agent(".js-section", {
	spottedClass: "is-spotted",
});
