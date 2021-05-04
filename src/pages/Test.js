// // // // import { useContext, useState } from "react";
// // // // import { UserContext } from "../contexts/userContext";
// // // // import { Modal, Button } from "react-bootstrap";
// // // // import { useHistory } from "react-router-dom";

// // // // const Login = () => {
// // // // 	const router = useHistory();
// // // // 	const [state, dispatch] = useContext(UserContext);
// // // // 	const [show, setShow] = useState(false);
// // // // 	const [show2, setShow2] = useState(false);

// // // // 	const LoginUser = () => {
// // // // 		dispatch({
// // // // 			type: "LOGIN_SUCCESS",
// // // // 		});
// // // // 		handleClose();
// // // // 		router.push("/");
// // // // 	};

// // // // 	const handleClose = () => {
// // // // 		setShow(false);
// // // // 	};

// // // // 	const handleClose2 = () => {
// // // // 		setShow(false);
// // // // 	};

// // // // 	return (
// // // // 		<div className="d-flex justify-content-center align-items-center vh-100 flex-column">
// // // // 			<h1>{state.isLogin ? "ANDA LOGIN" : "TIDAK LOGIN"}</h1>
// // // // 			<button
// // // // 				className="btn btn-primary btn-block"
// // // // 				onClick={() => setShow(true)}
// // // // 			>
// // // // 				LOGIN
// // // // 			</button>
// // // // 			<Modal show={show} onHide={handleClose}>
// // // // 				<Modal.Header closeButton>
// // // // 					<Modal.Title>Modal heading</Modal.Title>
// // // // 				</Modal.Header>
// // // // 				<Modal.Body>
// // // // 					Woohoo, you're reading this text in a modal!
// // // // 					<h1
// // // // 						onClick={() => {
// // // // 							handleClose();
// // // // 							setShow2(true);
// // // // 						}}
// // // // 					>
// // // // 						go to register
// // // // 					</h1>
// // // // 				</Modal.Body>
// // // // 				<Modal.Footer>
// // // // 					<Button variant="secondary" onClick={handleClose}>
// // // // 						Close
// // // // 					</Button>
// // // // 					<Button variant="primary" onClick={LoginUser}>
// // // // 						LOGIN
// // // // 					</Button>
// // // // 				</Modal.Footer>
// // // // 			</Modal>

// // // // 			<Modal show={show2} onHide={handleClose2}>
// // // // 				<Modal.Header closeButton>
// // // // 					<Modal.Title>Modal heading</Modal.Title>
// // // // 				</Modal.Header>
// // // // 				<Modal.Body>
// // // // 					Woohoo, you're reading this text in a modal!
// // // // 					<h1
// // // // 						onClick={() => {
// // // // 							handleClose2();
// // // // 							setShow(true);
// // // // 						}}
// // // // 					>
// // // // 						go to login
// // // // 					</h1>
// // // // 				</Modal.Body>
// // // // 				<Modal.Footer>
// // // // 					<Button variant="secondary" onClick={handleClose2}>
// // // // 						Close
// // // // 					</Button>
// // // // 					<Button variant="primary" onClick={LoginUser}>
// // // // 						REGISTER
// // // // 					</Button>
// // // // 				</Modal.Footer>
// // // // 			</Modal>

// // // // 			<div className="mx-5">
// // // // 				<Button variant="primary" onClick={LoginUser}>
// // // // 					LOGIN
// // // // 				</Button>
// // // // 			</div>
// // // // 			<div className="mx-5">
// // // // 				<Button variant="primary" onClick={LoginUser}>
// // // // 					LOGIN
// // // // 				</Button>
// // // // 			</div>
// // // // 			<div className="mx-5">
// // // // 				<Button variant="primary" onClick={LoginUser}>
// // // // 					LOGIN
// // // // 				</Button>
// // // // 			</div>
// // // // 		</div>
// // // // 	);
// // // // };

// // // // export default Login;

// // // // import { useContext, useState } from "react";
// // // // import { AuthContext } from "../contexts/authContext";
// // // // import { UserContext } from "../contexts/userContext";

// // // // import { Button, Form, Modal } from "react-bootstrap";
// // // // import { Link, useHistory } from "react-router-dom";

// // // // function Login() {
// // // // 	const router = useHistory();
// // // // 	const [state, dispatch] = useContext(UserContext);
// // // // 	const LoginUser = () => {
// // // // 		dispatch({
// // // // 			type: "LOGIN",
// // // // 		});
// // // // 	};

// // // // 	const handleClose = () => {
// // // // 		dispatch({
// // // // 			type: "LOGOUT",
// // // // 		});
// // // // 	};
// // // // 	console.log(state.isLogin);

// // // // 	return (
// // // // 		<></>
// // // // 		// <Modal show={state.isLogin} onHide={handleClose} size="sm" centered>
// // // // 		// 	<Modal.Body>
// // // // 		// 		<div className="form-title mb-3">
// // // // 		// 			<h4 className="text-yellow">Login</h4>
// // // // 		// 			<h1>{state.isLogin ? "ANDA LOGIN" : "TIDAK LOGIN"}</h1>
// // // // 		// 		</div>
// // // // 		// 		<div className="d-flex flex-column">
// // // // 		// 			<Form>
// // // // 		// 				<Form.Group controlId="formBasicEmail">
// // // // 		// 					<Form.Control
// // // // 		// 						type="email"
// // // // 		// 						className="form-control input-bg"
// // // // 		// 						placeholder="Email"
// // // // 		// 					/>
// // // // 		// 				</Form.Group>

// // // // 		// 				<Form.Group controlId="formBasicPassword">
// // // // 		// 					<Form.Control
// // // // 		// 						type="password"
// // // // 		// 						className="form-control input-bg"
// // // // 		// 						placeholder="Password"
// // // // 		// 					/>
// // // // 		// 				</Form.Group>
// // // // 		// 				<Button
// // // // 		// 					variant="brown"
// // // // 		// 					className="btn btn-block btn-round"
// // // // 		// 					onClick={LoginUser}
// // // // 		// 				>
// // // // 		// 					Login
// // // // 		// 				</Button>
// // // // 		// 			</Form>

// // // // 		// 			<div className="text-center text-muted delimiter mt-2">
// // // // 		// 				Don't have an account ? klick
// // // // 		// 				<Link to="#" className="font-weight-bold text-muted">
// // // // 		// 					{" "}
// // // // 		// 					here
// // // // 		// 				</Link>
// // // // 		// 				.
// // // // 		// 			</div>
// // // // 		// 		</div>
// // // // 		// 	</Modal.Body>
// // // // 		// </Modal>
// // // // 	);
// // // // }
// // // // export default Login;

// // // import { useContext, useState } from "react";
// // // import { Link, Redirect, useHistory } from "react-router-dom";

// // // import { AuthContext } from "../contexts/authContext";

// // // import { Button, Form, Modal } from "react-bootstrap";

// // // function Login(props) {
// // // 	return (
// // // 		<Modal {...props} aria-labelledby="contained-modal-title-vcenter">
// // // 			<Modal.Header closeButton>
// // // 				<Modal.Title id="contained-modal-title-vcenter">
// // // 					Using Grid in Modal
// // // 				</Modal.Title>
// // // 			</Modal.Header>
// // // 			<Modal.Body className="show-grid">
// // // 				kljslkajsdlks sd as sds ds ds\
// // // 			</Modal.Body>
// // // 			<Modal.Footer>
// // // 				<Button onClick={props.onHide}>Close</Button>
// // // 			</Modal.Footer>
// // // 		</Modal>
// // // 	);
// // // }
// // // export default Login;

// // import React, { useRef, useEffect } from "react";
// // import mapboxgl from "mapbox-gl";

// // import "../App.css";
// // import { Modal } from "react-bootstrap";

// // mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

// // const App = () => {
// // 	const mapContainerRef = useRef(null);

// // 	// initialize map when component mounts
// // 	useEffect(() => {
// // 		const map = new mapboxgl.Map({
// // 			container: mapContainerRef.current,
// // 			// See style options here: https://docs.mapbox.com/api/maps/#styles
// // 			style: "mapbox://styles/mapbox/streets-v11",
// // 			center: [-104.9876, 39.7405],
// // 			zoom: 12.5,
// // 			accessToken:
// // 				"pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g",
// // 		});

// // 		// add navigation control (the +/- zoom buttons)
// // 		// map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

// // 		// clean up on unmount
// // 		return () => map.remove();
// // 	}, []); // eslint-disable-line react-hooks/exhaustive-deps

// // 	return (
// // 		<>
// // 			<div className="container pt-3">
// // 				<div className="row py-3 mt-3 mt-custom">
// // 					<div className="my-2 col-12 ">
// // 						<h2>Menu</h2>
// // 					</div>
// // 					<div>
// // 						<div ref={mapContainerRef} />;
// // 					</div>
// // 				</div>
// // 				{/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
// // 			</div>
// // 			<Modal
// // 				show
// // 				size="lg"
// // 				aria-labelledby="contained-modal-title-vcenter"
// // 				centered
// // 			>
// // 				<Modal.Header closeButton>
// // 					<Modal.Title>Select Map</Modal.Title>
// // 				</Modal.Header>
// // 				<Modal.Body style={{ height: "500px" }}>
// // 					<div className="map-container" ref={mapContainerRef} />;
// // 				</Modal.Body>
// // 				<Modal.Footer>
// // 					{/* <Button onClick={props.onHide}>Close</Button> */}
// // 				</Modal.Footer>
// // 			</Modal>
// // 		</>
// // 	);
// // };

// // export default App;

// // import React, { useRef, useEffect, useState } from "react";

// // // images
// // // import Location from "../../assets/icon/location.svg";

// // import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// // // eslint-disable-next-line import/no-webpack-loader-syntax
// // // import Worker from "worker-loader!./Worker.js";
// // // import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";

// // mapboxgl.workerClass = MapboxWorker;
// // mapboxgl.accessToken = process.env.REACT_APP_API_KEY;

// // export default function MapPartner() {
// // 	const mapContainer = useRef();
// // 	const [lng, setLng] = useState(106.8567);
// // 	const [lat, setLat] = useState(-6.1775);
// // 	const [zoom, setZoom] = useState(9);

// // 	useEffect(() => {
// // 		const map = new mapboxgl.Map({
// // 			container: mapContainer.current,
// // 			style: "mapbox://styles/mapbox/streets-v11",
// // 			center: [lng, lat],
// // 			zoom: zoom,
// // 		});

// // 		map.on("move", () => {
// // 			setLng(map.getCenter().lng.toFixed(4));
// // 			setLat(map.getCenter().lat.toFixed(4));
// // 			setZoom(map.getZoom().toFixed(2));
// // 		});

// // 		console.log("data map", map.getCenter());
// // 		return () => map.remove();
// // 	}, []);

// // 	return (
// // 		<div>
// // 			<div className="sidebar shadow p-3">
// // 				<h6 className="avenir-font mb-4 font-weight-bold">
// // 					Select Delivery Location
// // 				</h6>
// // 				<div className="d-flex">
// // 					<div>
// // 						<img src={Location} alt="location" className="mr-4" />
// // 					</div>
// // 					<div>
// // 						<p className="address-title">Harbour Building</p>
// // 						<p className="address-user">
// // 							Jl. Elang IV No.48, Sawah Lama, Kec. Ciputat, Kota Tangerang
// // 							Selatan, Banten 15413, Indonesia
// // 						</p>
// // 					</div>
// // 				</div>
// // 				<p className="avenir-font font-weight-bold">Delivery Time</p>
// // 				<p>10 - 15 Minutes</p>
// // 			</div>
// // 			<div className="map-container" ref={mapContainer} />
// // 		</div>
// // 	);
// // }

// import * as React from "react";
// import { useState } from "react";
// import { Button, Col, Row } from "react-bootstrap";
// import ReactMapGL from "react-map-gl";
// import { DialogBottom, DialogRight } from "../compnents/maps/Dialog";
// import Map from "../compnents/maps/Map";

// const Token =
// 	"pk.eyJ1Ijoiam9keXNlcHRpYXdhbiIsImEiOiJja204bHN3dGQxOTI0MnZydHR2Z2pmZWRuIn0.-BxbTvANWOYx-7gmCMDtHw";

// function MapS() {
// 	const [viewport, setViewport] = useState({
// 		width: 400,
// 		height: 400,
// 		latitude: 37.7577,
// 		longitude: -122.4376,
// 		zoom: 8,
// 	});

// 	return (
// 		// <ReactMapGL
// 		// 	{...viewport}
// 		// 	onViewportChange={(nextViewport) => setViewport(nextViewport)}
// 		// 	mapboxApiAccessToken={Token}
// 		// />
// 		<div className="py-5 my5 ">
// 			{/* <ReactMapGL
// 				className="img-fluid"
// 				{...viewport}
// 				onViewportChange={(viewmport) => {
// 					setViewport(viewmport);
// 				}}
// 				mapStyle="mapbox://styles/jodyseptiawan/ckm8u2216elzw17rziiaoor6g"
// 				mapboxApiAccessToken={Token}
// 			>
// 				<span className="box-map card-maps mb-auto mx-auto card bg-light py-2 px-3 rounded m-2 border border-success">
// 					<small className="mb-2">
// 						<b>Select Delivery Location</b>
// 					</small>
// 					<span className="text-danger d-inline">Yogyakarta</span>
// 					<button className="btn btn-sm btn-dark px-5 btn-order-cart btn-block py-1 mt-3">
// 						Confirm Location{" "}
// 					</button>
// 				</span>
// 			</ReactMapGL> */}
// 			<Map>
// 				<DialogRight>
// 					<Row className="mb-4">
// 						<Col>
// 							<h5 className="font-weight-bold mb-0">
// 								Waiting for the transaction to be approved
// 							</h5>
// 						</Col>
// 					</Row>
// 					<Row className="mb-5">
// 						<Col lg={2}>
// 							MAP
// 							{/* <img src={iconMapPointer} alt="map pointer" width="55" /> */}
// 						</Col>
// 						<Col lg={10}>
// 							<Row>
// 								<Col lg={12}>
// 									<small className="font-weight-bold">Harbour Building</small>
// 								</Col>

// 								<Col lg={12} style={{ lineHeight: "1" }}>
// 									<small className="text-sm">
// 										Jl. Elang IV No.48, Sawah Lama, Kec. Ciputat, Kota Tangerang
// 										Selatan, Banten 15413, Indonesia
// 									</small>
// 								</Col>
// 							</Row>
// 						</Col>
// 					</Row>
// 					<Row>
// 						<Col lg={12} className="mb-4">
// 							<h5 className="font-weight-bold mb-0">Delivery Time</h5>
// 						</Col>
// 						<Col>
// 							<p>10 - 15 minutes</p>
// 						</Col>
// 					</Row>

// 					<Row className="mt-4">
// 						<Col lg={12}>
// 							<Button
// 								variant="brown"
// 								className="w-100"
// 								// onClick={handleFinished}
// 							>
// 								Finished Order
// 							</Button>
// 						</Col>
// 					</Row>
// 				</DialogRight>
// 			</Map>
// 			{/* ujung */}
// 		</div>
// 	);
// }
// export default MapS;

// import { useState } from "react";
// import TableRowMulter from "../components/TableRowMulter";
// import { API } from "../config/api";
// import { useQuery } from "react-query";
// import axios from "axios";

// const GetAddress = () => {
// 	const token =
// 		"pk.eyJ1IjoiYXJpc2FyZXMyMiIsImEiOiJja21hNHN4bncxbzN1Mm5wcnZqZmhmd245In0.mo6lAUdwinLZchtCADFthw";

// 	const {
// 		data: addressData,
// 		error: addressError,
// 		loading: addressLoading,
// 		refetch: addressRefetch,
// 	} = useQuery("addresssCache", async () => {
// 		return await axios.get(
// 			`https://api.mapbox.com/geocoding/v5/mapbox.places/106.89258,-6.90629.json?access_token=${token}&types=poi&country=id&localregion=ID-JB`
// 		);
// 	});
// 	console.log("ini ", addressData?.data?.features[0]?.place_name);

// 	return (
// 		<div>
// 			<div className=" mt-5 pb-3">
// 				<div className="container pt-3"></div>
// 			</div>
// 			<div className="mt-2 mb-3">ajskjakshajkhsajk</div>
// 			<div className="mt-3 row">
// 				<div>sasasasas {addressData?.data?.features[0]?.place_name}</div>
// 				<pre>{JSON.stringify(addressData?.features)}</pre>
// 			</div>
// 		</div>
// 	);
// };

// export default GetAddress;
import { useEffect, useState } from "react";
import axios from "axios";
import Maps from "../compnents/maps/Map";

const UseEffect = () => {
	const [count, setCount] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const [posts, setPosts] = useState([]);
	const [address, setAddress] = useState([]);
	const [search, setSearch] = useState("");
	//default //3 //dijalankan setelah render
	//componentDidMount dan componentDidUpdate
	/*   useEffect(() => {
    console.log("useEffect componentDidMount dan componentDidUpdate");
  }); //ketika kita ingin melakukan perubahan pada component kalau ada component yang terupdate
 */
	const getPosts = () => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			// .then((response) => console.log(response))÷∂
			.then((response) => setPosts(response.data));
	};
	const getPosts2 = () => {
		axios
			.get(
				"https://api.mapbox.com/geocoding/v5/mapbox.places/106.89258,-6.90629.json?access_token=pk.eyJ1IjoiYXJpc2FyZXMyMiIsImEiOiJja21hNHN4bncxbzN1Mm5wcnZqZmhmd245In0.mo6lAUdwinLZchtCADFthw&types=poi&country=id&localregion=ID-JB"
			)
			// .then((result) => console.log(result))
			// .then((response) => console.log(response))
			.then((response) => setAddress(response.data.features[0].place_name));
	};
	// const getPosts2 = () => {
	// 	fetch(
	// 		"https://api.mapbox.com/geocoding/v5/mapbox.places/106.89258,-6.90629.json?access_token=pk.eyJ1IjoiYXJpc2FyZXMyMiIsImEiOiJja21hNHN4bncxbzN1Mm5wcnZqZmhmd245In0.mo6lAUdwinLZchtCADFthw&types=poi&country=id&localregion=ID-JB"
	// 	)
	// 		.then((response) => setAddress(response))
	// 		.then((response) => response.json())
	// 		.then((result) => console.log(result));
	// };

	useEffect(() => {
		console.log("useEffect componentDidMount");
		getPosts();
		getPosts2();
	}, []); //fetching data dari API

	useEffect(() => {
		if (search === "") {
			getPosts();
		}

		const filteredPosts = posts.filter((post) => {
			return post.title.includes(search) || post.body.includes(search);
		});

		setPosts(filteredPosts);
	}, [search]);

	useEffect(() => {
		console.log(
			"useEffect componentDidMount menggunakan dependencies injector"
		);
	}, [isVisible, count]); //fetching data dari API

	return (
		<div>
			<div className=" mt-5 pb-3">
				<div className="container pt-3"></div>
			</div>
			{/*	<h1>ini adalah list post</h1>
			<form>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Input your search keywords here..."
					/>
				</div>
			</form>
			<ul>
				{posts.map((post, index) => (
					<li>
						<p
							style={{
								fontWeight: "bold",
							}}
						>
							{index + 1} | {post.title}
						</p>
						<p>{post.body}</p>
					</li>
				))}
			</ul>
			{isVisible && <h1>AKU TAMPIL</h1>}
			<button
				onClick={() => setIsVisible((prev) => !prev)}
				style={{
					display: "block",
					marginBottom: "10px",
				}}
			>
				Buka Tutup
			</button>
			<h1>ini adalah use effect {count}</h1>
			<div>
				<button
					onClick={() => setCount((prev) => prev + 1)}
					style={{
						display: "block",
						marginBottom: "10px",
					}}
				>
					increament
				</button>
				<button onClick={() => setCount((prev) => prev - 1)}>decreament</button>
			</div>

			<pre>{JSON.stringify(address)}</pre> */}
			<Maps />
		</div>
	); //2
};

export default UseEffect;
