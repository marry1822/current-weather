import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
	return (
		<div className={classes.footerContainer}>
			<div className={classes.contacts}>
				<div>Visit my:</div>
				<div>
					{" "}
					<a href="https://github.com/marry1822?tab=repositories">GitHub</a>
				</div>
				<div>
				{" "}
				<a href="https://www.linkedin.com/in/mariiadrozdova/">LinkedIn</a>
			</div>
			</div>

		</div>
	);
};

export default Footer;
