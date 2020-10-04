import React from "react";
import classes from "./Footer.module.css";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";

const Footer = () => {
	return (
		<div className={classes.footerContainer}>
			<div className={classes.footerContainer__contacts}>
				<div>Visit my:</div>
				<div>
					<a
						className={classes.footerContainer__contactsLink}
						href="https://github.com/marry1822?tab=repositories"
						title="GitHub"
					>
						<img
							className={classes.footerContainer__contactsImg}
							src={githubIcon}
							alt="github"
						/>
						GitHub
					</a>
				</div>
				<div>
					<a
						className={classes.footerContainer__contactsLink}
						href="https://www.linkedin.com/in/mariiadrozdova/"
						title="LinkedIn"
					>
						<img
							className={classes.footerContainer__contactsImg}
							src={linkedinIcon}
							alt="linkedin"
						/>
						LinkedIn
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
