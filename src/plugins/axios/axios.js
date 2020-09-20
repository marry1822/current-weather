import axios from "axios";

const API_KEY = "85fb0c02993c4292b8658d154b33c237";

const instance = axios.create({
	baseURL: "https://api.weatherbit.io/v2.0/current",
});

export const weatherAPI = {
	getWeather() {
		return instance.get(`?city=Raleigh,NC&key=${API_KEY}`);
	},
};

export const locationAPI = {
 getLocations() {
		return instance
			.get("https://current-weather-api.herokuapp.com/cities")
			.then((response) => response.data);
	},
};
