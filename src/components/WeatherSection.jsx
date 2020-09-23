import { Divider, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import classes from "../components/WeatherSection.module.css";
import { getCityList } from "../store/locationsReducer";
import { getWeatherData } from "../store/weatherReducer";
import Preloader from "./preloader/Preloader";


const WeatherSection = (props) => {
	useEffect(() => {
		props.getCityList();
	}, [props.getCityList]);

	const onCitySelect = (value) => {
		props.getWeatherData(value.slice(0, -4), value.slice(-3, -1));
	};

	const [inputValue, setInputValue] = useState("");

	return (
		<div>
			<Autocomplete
				options={props.cities.map(
					(city) => `${city.city_name} (${city.country_code})`
				)}
				onChange={(event, value) => {
					onCitySelect(value);
				}}
				inputValue={inputValue}
				onInputChange={(event, newInputValue) => {
					setInputValue(newInputValue);
				}}
				renderInput={(params) => (
					<TextField
						{...params}
						label="Select city"
						margin="normal"
						variant="outlined"
					/>
				)}
			/>

			{!inputValue && null}
			{inputValue && !props.isFetching && (
				<div>
					<div>City: {props.weatherData.city_name}</div>
					<div>
						<div>Temp: {props.weatherData.app_temp}</div>
						<div>{props.weatherData.lat}</div>
						<div>{props.weatherData.weather.description}</div>
						<img
							src={`https://www.weatherbit.io/static/img/icons/${props.weatherData.weather.icon}.png`}
							alt="icon"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	cities: state.locations.cities,
	weatherData: state.weather.weatherData,
	isFetching: state.weather.isFetching,
});

let WeatherSectionContainer = connect(mapStateToProps, {
	getCityList,
	getWeatherData,
})(WeatherSection);

export default WeatherSectionContainer;
