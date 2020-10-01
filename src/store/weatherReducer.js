import { weatherAPI } from "../plugins/axios/axios";

const SET_WEATHER = "SET_WEATHER";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_UNITS = "SET_UNITS";

const initialState = {
	weatherData: [],
	isFetching: true,
	units: "",
};
const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_WEATHER: {
			return { ...state, weatherData: action.weatherData };
		}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			};
		case SET_UNITS: {
			return {
				...state,
				units: action.units,
			};
		}
		default:
			return state;
	}
};

export const setWeather = (weatherData) => ({
	type: "SET_WEATHER",
	weatherData,
});
export const toggleIsFetching = (isFetching) => ({
	type: "TOGGLE_IS_FETCHING",
	isFetching,
});
export const setUnits = (units) => ({
	type: "SET_UNITS",
	units,
});

export const getWeatherData = (cityName, countryCode, units = "metric") => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));
		dispatch(setUnits(units));
		const response = await weatherAPI.getWeather(cityName, countryCode, units);
		dispatch(setWeather(response.data[0]));
		dispatch(toggleIsFetching(false));
	};
};

export default weatherReducer;
