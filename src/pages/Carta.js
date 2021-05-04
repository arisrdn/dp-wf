import map from "../compnents/assets/img/map.svg";

import Pin from "../compnents/maps/Pin";

import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import { useState, useContext, useCallback, useEffect } from "react";
import { useMutation } from "react-query";
import { API } from "../config/api";
import { useHistory } from "react-router-dom";

import { KeranjangContext } from "../contexts/keranjangContext";
import { Link } from "react-router-dom";
import convertToRupiah from "../compnents/utils/ToRupiah";
import Maps from "../compnents/maps/Modal";
import {
	Container,
	Col,
	Row,
	Form,
	Button,
	Modal,
	Alert,
} from "react-bootstrap";
const Cart = () => {
	const router = useHistory();

	const [state, dispatch] = useContext(KeranjangContext);
	const [modalShow, setModalShow] = useState(false);
	const [modalShow2, setModalShow2] = useState(false);

	const deleteProductFromCart = (id) => {
		dispatch({
			type: "REMOVE_CART",
			payload: {
				id,
			},
		});
	};
	const minusProductFromCart = (id) => {
		console.log(id);
		dispatch({
			type: "MINUS_CART",
			payload: {
				id,
			},
		});
	};

	const addProductToCart = (data) => {
		dispatch({
			type: "ADD_CART",
			payload: data,
		});
	};
	const sum = (data) => {
		var sum = 0;
		data.forEach(function (obj) {
			sum += obj.qty;
		});
		return sum;
	};

	function getSubTotal(data) {
		var subtotal = 0;
		data.forEach(function (obj) {
			subtotal += obj.qty * obj.price;
		});
		return subtotal;
	}
	function getTotal(data, ongkir) {
		var subtotal = 0;
		data.forEach(function (obj) {
			subtotal += obj.qty * obj.price;
		});
		return subtotal + ongkir;
	}

	//Maps
	const token =
		"pk.eyJ1IjoiYXJpc2FyZXMyMiIsImEiOiJja21hNHN4bncxbzN1Mm5wcnZqZmhmd245In0.mo6lAUdwinLZchtCADFthw";

	const [place, setPlace] = useState("");
	const [form, setForm] = useState({
		location: " 106.88203,-6.91506",
	});
	const { location } = form;

	const [address, setAddress] = useState("");

	const [marker, setMarker] = useState({
		longitude: 106.91905,
		latitude: -6.9123,
	});
	const [events, logEvents] = useState({});
	const onMarkerDragStart = useCallback((event) => {
		logEvents((_events) => ({ ..._events, onDragStart: event.lngLat }));
	}, []);

	const onMarkerDrag = useCallback((event) => {
		logEvents((_events) => ({ ..._events, onDrag: event.lngLat }));
	}, []);

	const onMarkerDragEnd = useCallback((event) => {
		logEvents((_events) => ({ ..._events, onDragEnd: event.lngLat }));
		setMarker({
			longitude: event.lngLat[0],
			latitude: event.lngLat[1],
		});
		setForm({
			// ...form,
			location: event.lngLat[0] + "," + event.lngLat[1],
		});
	}, []);
	const fetchLocation = async () => {
		const token =
			"pk.eyJ1IjoiaWxoYW0yNSIsImEiOiJja20yczc0dm0zOWczMndwMzVmdmJ1bjI4In0.1l2Zgxjy5R0iW2SlySO_fQ";
		const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?limit=1&access_token=${token}`;

		const api = await fetch(apiUrl);
		const response = await api.json();

		setPlace(response?.features[0]?.text);
		setAddress(response?.features[0]?.place_name);
	};

	// console.log("asas", onMarkerDragEnd)
	useEffect(() => {
		fetchLocation();
	}, [location]);

	// ??order
	const product = state.carts;
	// console.log("prou", product);
	const createTransaction = useMutation(async () => {
		const body = JSON.stringify({
			shippingFee: 10000,
			locationDelivery: location,
			product,
		});

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		await API.post("/transaction", body, config);
	});

	const handleOrder = () => {
		// e.preventDefault();
		// alert("hello");
		// handleClose();
		createTransaction.mutate();
		dispatch({
			type: "EMPETY_CART",
		});

		router.push("/profile");
	};

	console.log("state", state.carts);

	return (
		<>
			<div className="container pt-3">
				<div className="row py-3 mt-3 mt-custom justify-content-center">
					{state.carts.length ? (
						<>
							<div className="my-2 col-10 ">
								<div class="mb-4">
									<h2>ORDER</h2>
								</div>
								<div class="input-group mb-3">
									<div className="col-12 px-1">
										<p> Delivery Location</p>
									</div>
									<div className="col px-0">
										<input
											type="text"
											class="form-control"
											placeholder="Search"
											value={address}
										/>
									</div>
									<div className="col-3 pr-0">
										<button
											class="btn btn-brown btn-block"
											onClick={() => setModalShow(true)}
										>
											Select On Map
											<img src={map} alt="map" className="ml-2" />
										</button>
									</div>
								</div>
								<div class="input-group mb-3">
									<div className="col-12 px-1">
										<p>Review Order</p>
									</div>
									<div className="col-md-7 px-0">
										<table class="table">
											{state.carts.map((cart) => (
												<>
													<tr
														style={{
															borderTop: "2px solid",
														}}
													>
														<th
															rowspan="2"
															style={{
																width: "20%",
																borderBottom: "2px solid",
															}}
														>
															<img
																src={
																	"http://localhost:5000/uploads/" + cart.image
																}
																alt="menu"
																style={{
																	height: "80px",
																	width: "80px",
																	objectFit: "cover",
																}}
															/>{" "}
														</th>
														<td>{cart.tittle}</td>
														<td
															className="text-danger	text-right"
															style={{ width: "35%" }}
														>
															{convertToRupiah(cart.price * cart.qty)}
														</td>
													</tr>
													<tr
														style={{
															borderBottom: "2px solid",
														}}
													>
														<td>
															<div
																class="input-group mb-3"
																style={{ width: "50%" }}
															>
																<div class="">
																	{cart.qty === 1 ? (
																		<button
																			class=""
																			type="button"
																			onClick={() =>
																				deleteProductFromCart(cart.id)
																			}
																			style={{
																				border: "0",
																				background: "transparent",
																				fontSize: "20px",
																				fontWeight: "bolder",
																			}}
																		>
																			-
																		</button>
																	) : (
																		<button
																			onClick={() =>
																				minusProductFromCart(cart.id)
																			}
																			class=""
																			type="button"
																			style={{
																				border: "0",
																				background: "transparent",
																				fontSize: "20px",
																				fontWeight: "bolder",
																			}}
																		>
																			-
																		</button>
																	)}
																</div>
																<input
																	value={cart.qty}
																	type="text"
																	style={{
																		width: "34px",
																		background: "#F6E6DA",
																		borderRadius: "5px",
																		textAlign: "center",
																		border: "0",
																	}}
																/>
																<div class="input-group-append">
																	<button
																		style={{
																			border: "0",
																			background: "transparent",
																			fontSize: "20px",
																			fontWeight: "bolder",
																		}}
																		onClick={() => addProductToCart(cart)}
																	>
																		+
																	</button>
																</div>
															</div>
														</td>
														<td className="text-right">
															<Link
																href="/#"
																onClick={() => deleteProductFromCart(cart.id)}
															>
																<img src="trash.svg" alt="Delete" />
															</Link>
														</td>
													</tr>
												</>
											))}
										</table>
									</div>
									<div className="col-5 pr-0">
										<table
											class="table"
											style={{
												fontFamily: "Avenir",
												fontSize: "14px",
												lineHeight: "19px",
											}}
										>
											<tr
												style={{
													borderTop: "2px solid",
												}}
											>
												<td>Subtotal</td>
												<td className="text-danger text-right">
													{convertToRupiah(getSubTotal(state.carts))}
												</td>
											</tr>
											<tr>
												<td>Qty</td>
												<td className="text-right">{sum(state.carts)}</td>
											</tr>
											<tr>
												<td>ongkir</td>
												<td className="text-danger text-right">
													{convertToRupiah(10000)}
												</td>
											</tr>
											<tr
												className="font-weight-bold text-danger "
												style={{ borderTop: "2px solid black" }}
											>
												<td>Total</td>
												<td className="text-right">
													{convertToRupiah(getTotal(state.carts, 10000))}
												</td>
											</tr>
										</table>
									</div>
								</div>
							</div>
							<div className="my-2 col-10 row px-0 ">
								<div className="col"></div>
								<div className="col-4">
									<button
										class="btn btn-brown btn-block"
										onClick={() => setModalShow2(true)}
										// onClick={handleOrder}
									>
										Order
									</button>
								</div>
							</div>
						</>
					) : (
						<div className="col">
							<div className="container-fluid mt-100">
								<div className="row">
									<div className="col-md-12">
										<div className="card">
											<div className="card-body cart">
												<div
													className="col-sm-12 empty-cart-cls text-center"
													style={{ background: "whitesmoke" }}
												>
													{" "}
													<img
														src="https://www.pngitem.com/pimgs/m/174-1749315_shopping-cart-buy-online-icon-png-transparent-png.png"
														width="130"
														height="130"
														class="img-fluid mb-4 mr-3"
													/>
													<h3>
														<strong>Your Cart is Empty</strong>
													</h3>
													<h4>Add something to make me happy :)</h4>{" "}
													<Link to="/" className="btn btn-yellow mb-4">
														continue shopping
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>

			<Maps
				show={modalShow}
				onHide={() => setModalShow(false)}
				children={
					<>
						<Marker
							longitude={marker.longitude}
							latitude={marker.latitude}
							offsetTop={-20}
							offsetLeft={-10}
							draggable
							onDragStart={onMarkerDragStart}
							onDrag={onMarkerDrag}
							onDragEnd={onMarkerDragEnd}
						>
							<Pin size={20} />
						</Marker>
						<div
							className="shadow p-3 overflow-auto"
							style={{
								width: "400px",
								height: "150px",
								position: "absolute",
								left: "50%",
								bottom: "0",
								backgroundColor: "white",
								transform: "translateX(-50%)",
								borderRadius: "5px",
							}}
						>
							<Row className="mb-2">
								<Col>
									<h5 className="font-weight-bold text-center mb-0">
										Select delivery location
									</h5>
								</Col>
							</Row>
							<Row className="mb-3">
								<Col lg={2}>
									{/* <img src={iconMapPointer} alt="map pointer" width="55" /> */}
								</Col>
								<Col lg={10}>
									<Row>
										<Col lg={12}>
											{/* <small className="font-weight-bold">{place}</small> */}
										</Col>

										<Col lg={12} style={{ lineHeight: "1" }}>
											<small className="text-sm">{address}</small>
										</Col>
									</Row>
								</Col>
							</Row>
							<Row>
								<Col>
									<Button
										// onClick={handleMapClose}
										variant="brown"
										className="w-100"
										onClick={() => setModalShow(false)}
									>
										Confirm Location
									</Button>
								</Col>
							</Row>
						</div>
					</>
				}
			/>
			<Maps
				show={modalShow2}
				onHide={() => setModalShow2(false)}
				children={
					<>
						<Marker
							longitude={marker.longitude}
							latitude={marker.latitude}
							offsetTop={-20}
							offsetLeft={-10}
							draggable
							onDragStart={onMarkerDragStart}
							onDrag={onMarkerDrag}
							onDragEnd={onMarkerDragEnd}
						>
							<Pin size={20} />
						</Marker>
						<div
							className="shadow p-3 overflow-auto"
							style={{
								width: "200px",
								height: "100%",
								position: "absolute",
								right: "3px",
								top: "3px",
								backgroundColor: "white",
								borderRadius: "5px",
							}}
						>
							<Row className="mb-4">
								<Col>
									<h5 className="font-weight-bold mb-0">
										Waiting for the transaction to be approved
									</h5>
								</Col>
							</Row>
							<Row className="mb-5">
								<Col lg={2}>
									{/* <img src={iconMapPointer} alt="map pointer" width="55" /> */}
								</Col>
								<Col lg={10}>
									<Row>
										<Col lg={12}>
											<small className="font-weight-bold">{place}</small>
										</Col>

										<Col lg={12} style={{ lineHeight: "1" }}>
											<small className="text-sm">{address}</small>
										</Col>
									</Row>
								</Col>
							</Row>
							<Row>
								<Col lg={12} className="mb-4">
									<h5 className="font-weight-bold mb-0">Delivery Time</h5>
								</Col>
								<Col>
									<p>10 - 15 minutes</p>
								</Col>
							</Row>
							{/* {isFinished && ( */}
							<Row className="mt-4">
								<Col lg={12}>
									<Button
										variant="brown"
										className="w-100"
										// onClick={handleFinished}
									>
										Finished Order
									</Button>
								</Col>
							</Row>
						</div>
					</>
				}
			/>
		</>
	);
};

export default Cart;
