import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import { connect, Provider } from "react-redux";
import "./App.css";
import { getCityList } from "./store/locationsReducer";
import store from "./store/store";

class App extends React.Component {
	componentDidMount() {
		this.props.getCityList();
	}

	render() {
		return (
			<div className="App">
				<Autocomplete
					options={this.props.cities.map((city) => city.city_name)}
					renderInput={(params) => (
						<TextField
							{...params}
							label="city"
							margin="normal"
							variant="outlined"
						/>
					)}
				/>
				<div></div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	cities: state.locations.cities,
});

let AppContainer = connect(mapStateToProps, { getCityList })(App);
const MainApp = () => {
	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
	);
};

export default MainApp;
