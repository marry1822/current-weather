import React from "react";
import { connect, Provider } from "react-redux";
import "./App.css";
import store from "./store/store";
import MainPage from "./components/MainPage";
import { initializeApp } from "./store/appReducer";
import Preloader from "./components/preloader/Preloader";

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />;
		}
		return (
			<div className="App">
				<MainPage />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
});

let AppContainer = connect(mapStateToProps, { initializeApp })(App);

const MainApp = () => {
	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
	);
};

export default MainApp;
