import React from "react";
import classes from "./WeatherData.module.css";

const WeatherData = (props) => {
	return (

			<div className={classes.weatherData}>
				<div className={classes.locationName}>
					{props.weatherData.city_name}, {props.weatherData.country_code}
				</div>
				<div className={classes.tempEndIcon}>
					<div>
						<img
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
				<div className={classes.weatherDescription}>
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
				<div className={classes.otherInfo}>
					<div className={classes.block}>
						{props.units === "metric" ? (
							<div>
								Wind: {Math.floor(props.weatherData.wind_spd)}m/s{" "}
								{props.weatherData.wind_cdir}
							</div>
						) : (
							<div>
								Wind: {Math.floor(props.weatherData.wind_spd)}mph{" "}
								{props.weatherData.wind_cdir}
							</div>
						)}
						<div>Humidity: {Math.floor(props.weatherData.rh)}%</div>
						<div>Pressure: {Math.floor(props.weatherData.pres)}hPa</div>
					</div>
					<div className={classes.block}>
						<div>Visibility: {props.weatherData.vis}km</div>
						<div>Sunrise: {props.weatherData.sunrise}</div>
						<div>Sunset: {props.weatherData.sunset}</div>
					</div>
					<div className={classes.block}>
						<div>AQI: {props.weatherData.aqi}</div>
						<div>UV Index: {Math.floor(props.weatherData.uv)}</div>
					</div>
				</div>
			</div>
	);
};

export default WeatherData;
