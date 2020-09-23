import React from "react";
import classes from "../components/MainPage.module.css";
import WeatherSectionContainer from "./WeatherSection";
const MainPage = (props) => {
	return (
		<div>
			<div className={classes.header}>Weather app</div>
			<div className={classes.about}>About</div>
			<WeatherSectionContainer/>
			<div className={classes.footer}>Footer</div>
		</div>
	);
};

export default MainPage;
