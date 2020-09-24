import axios from "axios";

const API_KEY = "85fb0c02993c4292b8658d154b33c237";

const instance = axios.create({
	baseURL: "https://api.weatherbit.io/v2.0/current",
});

export const weatherAPI = {
	async getWeather(cityName, countryCode, units="M") {
		return await instance
			.get(`?city=${cityName}&country=${countryCode}&${units}=M&key=${API_KEY}`)
			.then((response) => response.data);
	},
};

export const locationAPI = {
	async getLocations() {
		return await axios
			.get("https://current-weather-api.herokuapp.com/cities")
			.then((response) => response.data);
	},
};
