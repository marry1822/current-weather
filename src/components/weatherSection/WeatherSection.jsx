import { Button, ButtonGroup, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useState } from "react";
import { connect } from "react-redux";
import classes from "./WeatherSection.module.css";
import { getWeatherData } from "../../store/weatherReducer";
import Preloader from "../preloader/Preloader";
import WeatherData from "./WeatherData";

const WeatherSection = (props) => {
	const [value, setValue] = useState("");

	const onCitySelect = (value) => {
		if (!value) {
			return "";
		}
		props.getWeatherData(value.slice(0, -4), value.slice(-3, -1));
	};

	return (
		<div className={classes.weatherSection}>
			<div className={classes.searchBlock}>
				<div className={classes.searchBlockContainer}>
					<Autocomplete
						options={props.cities.map(
							(city) => `${city.city_name} (${city.country_code})`
						)}
						onChange={(event, value) => {
							setValue(value);
							onCitySelect(value);
						}}
						style={{ width: 400 }}
						renderInput={(params) => (
							<TextField
								{...params}
								label="Select city"
								margin="normal"
								variant="outlined"
							/>
						)}
					/>
					<ButtonGroup size="small" aria-label="small outlined button group">
						<Button
							onClick={() =>
								props.getWeatherData(
									value.slice(0, -4),
									value.slice(-3, -1),
									"metric"
								)
							}
						>
							Metric: °C, m/s
						</Button>
						<Button
							onClick={() =>
								props.getWeatherData(
									value.slice(0, -4),
									value.slice(-3, -1),
									"imperial"
								)
							}
						>
							Imperial: °F, mph
						</Button>
					</ButtonGroup>
				</div>
			</div>

			{props.isFetching && <Preloader />}
			{value && !props.isFetching && (
				<WeatherData weatherData={props.weatherData} units={props.units}/>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	cities: state.locations.cities,
	weatherData: state.weather.weatherData,
	isFetching: state.weather.isFetching,
	units: state.weather.units
});

let WeatherSectionContainer = connect(mapStateToProps, {
	getWeatherData,
})(WeatherSection);

export default WeatherSectionContainer;
