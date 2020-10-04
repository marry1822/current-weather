import React from "react";
import classes from "./MainPage.module.css";
import Footer from '../footer/Footer';
import Header from '../header/Header';
import WeatherSectionContainer from "../weatherSection/WeatherSection";

const MainPage = () => {
	return (
		<div className={classes.mainPage}>
			<div className={classes.mainPage__container}>
				<Header />
				<WeatherSectionContainer />
			</div>
			<Footer />
		</div>
	);
};

export default MainPage;
