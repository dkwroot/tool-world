import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Home from "./components/home";
import Profile from "./components/profile";
import Inventory from "./components/inventory";
import Register from "./components/register";
import Cart from "./components/cart";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, StoreProvider } from "easy-peasy";
import storeModel from "./models";

//import "./clear.css";
import "./styles.css";

// Gather Icons from FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faUser,
	faShoppingCart,
	faBars,
	faSignInAlt,
	faHardHat,
	faCog,
	faToolbox,
	faStar
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(
	faUser,
	faShoppingCart,
	faBars,
	faSignInAlt,
	faHardHat,
	faCog,
	faToolbox,
	faStar,
	fab
);

const store = createStore(storeModel);

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/profile" component={Profile} />
				<Route exact path="/store" component={Inventory} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/cart" component={Cart} />
			</Switch>
		</BrowserRouter>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	rootElement
);
