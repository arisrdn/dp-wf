import React, { useState, useEffect, useContext } from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";

import { KeranjangContextProvider } from "./contexts/keranjangContext";
import { AuthContext } from "./contexts/authContext";

import Navigation from "./compnents/navbar/Nav";

import Home from "./pages/home/";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Test from "./pages/Test";
import Product from "./pages/product/index";
// import Profile from "./pages/Profile";
import Profile from "./pages/Profile/index";
import Cart from "./pages/Cart";
import EditProfile from "./pages/Profile/Edit";
// import EditProfile from "./pages/EditProfile";
import AddProduct from "./pages/product/Create";
import EditProduct from "./pages/product/Edit";
// import AddProduct from "./pages/AddProduct";
import Transaction from "./pages/Transaction";

import CreateRestaurant from "./pages/restaurant/Create";
import MyRestaurant from "./pages/restaurant/index";
import Editrestaurant from "./pages/restaurant/Edit";

import PrivateRoute from "./compnents/route/PrivateRoute";
import Modal from "./compnents/Modala";
import { API, setAuthToken } from "./config/api";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

// init accessToken
if (localStorage.token) {
	setAuthToken(localStorage.token);
}

export default function MasterRoute() {
	let query = useQuery();
	const [state, dispatch] = useContext(AuthContext);
	const checkUser = async () => {
		try {
			const response = await API.get("/check-auth");

			if (response.status === 401) {
				// alert("Hello! I am an alert box!");
				// console.log("error");
				return dispatch({
					type: "AUTH_ERROR",
				});
			}

			let payload = response.data.data.user;
			payload.token = localStorage.token;

			dispatch({
				type: "LOGIN_SUCCESS",
				payload,
			});
		} catch (error) {
			console.log(error);
			dispatch({
				type: "AUTH_ERROR",
			});
		}
	};

	useEffect(() => {
		checkUser();
	}, []);

	return (
		<KeranjangContextProvider>
			<Navigation />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<PrivateRoute exact path="/profile" component={Profile} />
				<PrivateRoute exact path="/profile/edit" component={EditProfile} />
				{/* <PrivateRoute exact path="/profile" component={Profile} /> */}
				{/* <PrivateRoute exact path="/product/add" component={AddProduct} /> */}
				<PrivateRoute exact path="/Cart" component={Cart} />
				<PrivateRoute exact path="/transaction" component={Transaction} />
				<PrivateRoute exact path="/restaurant/:id" component={Product} />
				<PrivateRoute exact path="/restaurant" component={Product} />
				<PrivateRoute
					exact
					path="/my-restaurant/create"
					component={CreateRestaurant}
				/>
				<PrivateRoute exact path="/my-restaurant" component={MyRestaurant} />
				<PrivateRoute
					exact
					path="/my-restaurant/edit"
					component={Editrestaurant}
				/>
				<PrivateRoute
					exact
					path="/my-restaurant/transaction"
					component={Transaction}
				/>
				editProduct
				<PrivateRoute
					exact
					path="/my-restaurant/addbook"
					component={AddProduct}
				/>
				<PrivateRoute
					exact
					path="/my-restaurant/editbook/:id"
					component={EditProduct}
				/>
				{/* <PrivateRoute exact path="/my-restaurant/book" component={AddProduct} /> */}
				<Route exact path="/test">
					<Test />
				</Route>
			</Switch>
			<Register />
			<Modal />
			<Login />
			<Child popUP={query.get("popup")} />
		</KeranjangContextProvider>
	);
}

function Child({ popUP }) {
	const history = useHistory();
	const [show, setShow] = useState(true);
	const close = () => {
		history.push("/");
		setShow(false);
	};
	const open = () => {
		setShow(true);
	};
	useEffect(() => {
		if (popUP) {
			open();
		}
	}, [open]);

	return (
		<>
			{popUP === "login" && (
				<>
					<Login show={show} onHide={close} />
					{console.log("show", show)}
				</>
			)}
		</>
	);
}
