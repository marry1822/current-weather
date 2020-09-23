import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import locationsReducer from "./locationsReducer";
import thunkMiddleware from "redux-thunk";
import weatherReducer from "./weatherReducer";

let reducers = combineReducers({
	locations: locationsReducer,
	weather: weatherReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunkMiddleware))
);
window.__store__ = store;
export default store;
