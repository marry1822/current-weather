// import { TextField } from "@material-ui/core";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import React from "react";
// import { connect, Provider } from "react-redux";
// import "./App.css";
// import { getCityList } from "./store/locationsReducer";
// import { getWeatherData } from "./store/weatherReducer";
// import store from "./store/store";
// import MainPage from "./components/MainPage";
// import WeatherSection from "./components/WeatherSection";

// class App extends React.Component {
// 	componentDidMount() {
// 		this.props.getCityList();
// 	}

// 	onCitySelect = (value) => {
// 		this.props.getWeatherData(
// 			value.split(" ")[0],
// 			value.split(" ")[1].replace(/[()]/g, "")
// 		);
// 	};

// 	render() {
// 		return (
// 			<div className="App">
// 				<MainPage />
// 				<WeatherSection />
// 				<Autocomplete
// 					options={this.props.cities.map(
// 						(city) => `${city.city_name} (${city.country_code})`
// 					)}
// 					onChange={(event, value) => {
// 						this.onCitySelect(value);
// 					}}
// 					renderInput={(params) => (
// 						<TextField
// 							{...params}
// 							label="Select city"
// 							margin="normal"
// 							variant="outlined"
// 						/>
// 					)}
// 				/>
// 			</div>
// 		);
// 	}
// }

// const mapStateToProps = (state) => ({
// 	cities: state.locations.cities,
// 	weather: state.weather.weather,
// });

// let AppContainer = connect(mapStateToProps, { getCityList, getWeatherData })(
// 	App
// );
// const MainApp = () => {
// 	return (
// 		<Provider store={store}>
// 			<AppContainer />
// 		</Provider>
// 	);
// };

// export default MainApp;

import React from "react";
import {Provider } from "react-redux";
import "./App.css";
import store from "./store/store";
import MainPage from "./components/MainPage";

const App = () => {
	return (
		<div className="App">
			<MainPage />
		</div>
	);
};

const MainApp = () => {
	return (
		<Provider store={store}>
			<App/>
		</Provider>
	);
};

export default MainApp;
