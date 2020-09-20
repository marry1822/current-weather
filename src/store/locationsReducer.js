import { locationAPI } from "../plugins/axios/axios";

const SET_CITIES = "SET_CITIES";


let initialState = {
	cities: [],
};

const locationsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CITIES: {
			return {cities: action.cities };
		}

		default:
			return state;
	}
};

export const setCities = (cities) => ({
	type: "SET_CITIES",
	cities,
});

export const getCities = () => ({
	type: "GET_CITIES",
});

export const getCityList = () => {
	return async (dispatch) => {
		const response = await locationAPI.getLocations();

		dispatch(setCities(response));
	};
};

export default locationsReducer;
