import { weatherAPI } from "../plugins/axios/axios";

const SET_WEATHER = "SET_WEATHER";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
	weatherData: [],
	isFetching: true,
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

export const getWeatherData = (cityName, countryCode) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));
		const response = await weatherAPI.getWeather(cityName, countryCode);
		dispatch(setWeather(response.data[0]));
		dispatch(toggleIsFetching(false));

	};
};

export default weatherReducer;
