import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/logo.png";

const Header = () => {
	return (
		<div className={classes.headerContainer}>
			<div>
				<img
				className={classes.headerContainer__img}
				src={logo} alt="logo"/>
			</div>
		</div>
	);
};

export default Header;
