import React from "react";
import classes from "../components/MainPage.module.css";
import Footer from "./Footer";
import Header from "./Header";
import WeatherSectionContainer from "./WeatherSection";

const MainPage = () => {
	return (
		<div className={classes.mainPage}>
			<div className={classes.main}>
				<Header />
				<WeatherSectionContainer />
			</div>
			<Footer />
		</div>
	);
};

export default MainPage;
