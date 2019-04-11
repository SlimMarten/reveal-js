import styles from "./styles.pcss";
import React, { Component } from "react";

class Logo extends Component {
	render() {
		if (this.props.big) {
			return "big logo";
		}
		return "small logo";
	}
}

export default Logo;
