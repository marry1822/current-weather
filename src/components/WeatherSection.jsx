import { Button, ButtonGroup, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useState } from "react";
import { connect } from "react-redux";
import classes from "../components/WeatherSection.module.css";
import { getWeatherData } from "../store/weatherReducer";
import Preloader from "./preloader/Preloader";
import WeatherData from "./WeatherData";

const WeatherSection = (props) => {
	const onCitySelect = (value) => {
		if (!value) {
			return "";
		}
		props.getWeatherData(value.slice(0, -4), value.slice(-3, -1));
	};
	const [value, setValue] = useState("");

	return (
		<div>
			<ButtonGroup size="small" aria-label="small outlined button group">
				<Button>Metric: °C, m/s</Button>
				<Button>Imperial: °F, mph</Button>
			</ButtonGroup>
			<Autocomplete
				options={props.cities.map(
					(city) => `${city.city_name} (${city.country_code})`
				)}
				onChange={(event, value) => {
					setValue(value);
					onCitySelect(value);
				}}
				style={{ width: 300 }}
				renderInput={(params) => (
					<TextField
						{...params}
						label="Select city"
						margin="normal"
						variant="outlined"
					/>
				)}
			/>
			{props.isFetching && <Preloader />}
			{value && !props.isFetching && (
				<WeatherData weatherData={props.weatherData} />
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
	getWeatherData,
})(WeatherSection);

export default WeatherSectionContainer;
