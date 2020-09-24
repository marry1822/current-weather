import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import locationsReducer from "./locationsReducer";
import thunkMiddleware from "redux-thunk";
import weatherReducer from "./weatherReducer";
import appReducer from "./appReducer";

let reducers = combineReducers({
	locations: locationsReducer,
	weather: weatherReducer,
	app: appReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunkMiddleware))
);
window.__store__ = store;
export default store;
