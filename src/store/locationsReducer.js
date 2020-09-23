import { locationAPI } from "../plugins/axios/axios";

const SET_CITIES = "SET_CITIES";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
	cities: [],
	isFetching: true,
};

const locationsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CITIES: {
			return { ...state, cities: action.cities };
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

export const setCities = (cities) => ({
	type: "SET_CITIES",
	cities,
});
export const toggleIsFetching = (isFetching) => ({
	type: "TOGGLE_IS_FETCHING",
	isFetching,
});

export const getCityList = () => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));

		const response = await locationAPI.getLocations();

		dispatch(setCities(response));
		dispatch(toggleIsFetching(false));

	};
};

export default locationsReducer;
