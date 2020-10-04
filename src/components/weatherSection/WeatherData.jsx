import React from "react";
import classes from "./WeatherData.module.css";
import windIcon from "../../assets/wind.png";
import uvIcon from "../../assets/uv.png";
import sunsetIcon from "../../assets/sunset.png";
import sunriseIcon from "../../assets/daytime.png";

const WeatherData = (props) => {
	return (
		<div className={classes.weatherData}>
			<div className={classes.weatherData__locationName}>
				{props.weatherData.city_name}, {props.weatherData.country_code}
			</div>
			<div className={classes.weatherData__tempEndIcon}>
				<div>
					<img
						className={classes.weatherData__tempEndIconImg}
						src={`https://www.weatherbit.io/static/img/icons/${props.weatherData.weather.icon}.png`}
						alt="icon"
					/>
				</div>
				{props.units === "metric" ? (
					<div>{props.weatherData.temp}°C</div>
				) : (
					<div>{props.weatherData.temp}°F</div>
				)}
			</div>
			<div className={classes.weatherData__weatherDescription}>
				{props.units === "metric" ? (
					<div>
						Feels like {props.weatherData.app_temp}°C.{" "}
						{props.weatherData.weather.description}
					</div>
				) : (
					<div>
						Feels like {props.weatherData.app_temp}°F.{" "}
						{props.weatherData.weather.description}
					</div>
				)}
			</div>
			<div className={classes.weatherData__otherInfo}>
				<div className={classes.weatherData__otherInfoBlock}>
					{props.units === "metric" ? (
						<div>
							<img src={windIcon} alt="wind" />
							{Math.floor(props.weatherData.wind_spd)}m/s{" "}
							{props.weatherData.wind_cdir}
						</div>
					) : (
						<div>
							<img src={windIcon} alt="wind" />
							{Math.floor(props.weatherData.wind_spd)}mph{" "}
							{props.weatherData.wind_cdir}
						</div>
					)}
					<div>Humidity: {Math.floor(props.weatherData.rh)}%</div>
					<div>Pressure: {Math.floor(props.weatherData.pres)}hPa</div>
				</div>
				<div className={classes.weatherData__otherInfoBlock}>
					<div>Visibility: {props.weatherData.vis}km</div>
					<div>
						<img src={sunriseIcon} alt="sunrise" />
						{props.weatherData.sunrise}
					</div>
					<div>
						<img src={sunsetIcon} alt="sunset" />
						{props.weatherData.sunset}
					</div>
				</div>
				<div className={classes.weatherData__otherInfoBlock}>
					<div>AQI: {props.weatherData.aqi}</div>
					<div>UV: {Math.floor(props.weatherData.uv)}</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherData;
