import React from "react";
import classes from "../components/WeatherData.module.css";

const WeatherData = (props) => {
	return (
		<div>
			<div>
				{props.weatherData.city_name}, {props.weatherData.country_code}
			</div>
			<div>
				<div>
					<img
						src={`https://www.weatherbit.io/static/img/icons/${props.weatherData.weather.icon}.png`}
						alt="icon"
					/>
				</div>
				<div>{props.weatherData.temp}°C</div>
			</div>
			<div>
				<div>Feels like {props.weatherData.app_temp}°C</div>
				<div>{props.weatherData.weather.description}</div>
			</div>
			<div>
				<div>
					Wind:
					{Math.floor(props.weatherData.wind_spd)}m/s{" "}
					{props.weatherData.wind_cdir}
				</div>
				<div>
					Humidity:
					{Math.floor(props.weatherData.rh)}%
				</div>
				<div>
					Pressure:
					{Math.floor(props.weatherData.pres)}hPa
				</div>
				<div>Visibility: {props.weatherData.vis}km</div>
				<div>Sunrise: {props.weatherData.sunrise}</div>
				<div>Sunset: {props.weatherData.sunset}</div>
				<div>AQI: {props.weatherData.aqi}</div>
				<div>UV Index: {Math.floor(props.weatherData.uv)}</div>
			</div>
		</div>
	);
};

export default WeatherData;
