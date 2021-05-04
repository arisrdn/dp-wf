// import React, { useRef, useEffect } from "react";
// import mapboxgl from "mapbox-gl";

// import "../App.css";
// import { Modal } from "react-bootstrap";

// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

// const App = (props) => {
// 	const mapContainerRef = useRef(null);

// 	// initialize map when component mounts
// 	useEffect(() => {
// 		const map = new mapboxgl.Map({
// 			container: mapContainerRef.current,
// 			// See style options here: https://docs.mapbox.com/api/maps/#styles
// 			style: "mapbox://styles/mapbox/streets-v11",
// 			center: [-104.9876, 39.7405],
// 			zoom: 12.5,
// 			accessToken:
// 				"pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g",
// 		});

// 		// add navigation control (the +/- zoom buttons)
// 		// map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

// 		// clean up on unmount
// 		return () => map.remove();
// 	}, []); // eslint-disable-line react-hooks/exhaustive-deps

// 	return (
// 		<>
// 			<div className="container pt-3">
// 				<div className="row py-3 mt-3 mt-custom">
// 					<div className="my-2 col-12 "></div>
// 					<div>
// 						<div ref={mapContainerRef} />;
// 					</div>
// 				</div>
// 				{/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
// 			</div>
// 			<Modal
// 				{...props}
// 				// show
// 				size="lg"
// 				aria-labelledby="contained-modal-title-vcenter"
// 				centered
// 			>
// 				<Modal.Header closeButton>
// 					<Modal.Title>Select Map</Modal.Title>
// 				</Modal.Header>
// 				<Modal.Body style={{ height: "500px" }}>
// 					<div className="map-container" ref={mapContainerRef} />;
// 				</Modal.Body>
// 				<Modal.Footer>
// 					{/* <Button onClick={props.onHide}>Close</Button> */}
// 				</Modal.Footer>
// 			</Modal>
// 		</>
// 	);
// };

// export default App;

// // import React, { useRef, useEffect } from "react";
// // import mapboxgl from "mapbox-gl";

// // import "../App.css";
// // import { Modal } from "react-bootstrap";

// // mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

// // const Maps = (props) => {
// // 	const mapContainerRef = useRef(null);

// // 	// initialize map when component mounts
// // 	useEffect(() => {
// // 		const map = new mapboxgl.Map({
// // 			container: mapContainerRef.current,
// // 			// See style options here: https://docs.mapbox.com/api/maps/#styles
// // 			style: "mapbox://styles/mapbox/streets-v11",
// // 			// center: [106.957, -6.884],
// // 			center: [106.65926310155055, -6.738949961213507],
// // 			zoom: 9,
// // 			accessToken:
// // 				"pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g",
// // 		});

// // 		// add navigation control (the +/- zoom buttons)
// // 		map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

// // 		// clean up on unmount
// // 		return () => map.remove();
// // 	}, []); // eslint-disable-line react-hooks/exhaustive-deps

// // 	return (
// // 		<>
// // 			<div className="container pt-3">
// // 				<div className="row py-3 mt-3 mt-custom">
// // 					<div>
// // 						<div ref={mapContainerRef} />;
// // 					</div>
// // 				</div>
// // 				{/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
// // 			</div>
// // 			<Modal
// // 				{...props}
// // 				size="lg"
// // 				aria-labelledby="contained-modal-title-vcenter"
// // 				centered
// // 			>
// // 				<Modal.Header closeButton>
// // 					<Modal.Title>Select Map</Modal.Title>
// // 				</Modal.Header>
// // 				<Modal.Body style={{ height: "500px" }}>
// // 					<div className="map-container" ref={mapContainerRef} />
// // 				</Modal.Body>
// // 				<Modal.Footer>
// // 					{/* <Button onClick={props.onHide}>Close</Button> */}
// // 				</Modal.Footer>
// // 			</Modal>
// // 		</>
// // 	);
// // };

// // export default Maps;

import * as React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import ReactMapGL from "react-map-gl";
const Token =
	"pk.eyJ1Ijoiam9keXNlcHRpYXdhbiIsImEiOiJja204bHN3dGQxOTI0MnZydHR2Z2pmZWRuIn0.-BxbTvANWOYx-7gmCMDtHw";

function Map(props) {
	const [viewport, setViewport] = useState({
		width: 400,
		height: 400,
		latitude: 37.7577,
		longitude: -122.4376,
		zoom: 8,
	});

	return (
		// <ReactMapGL
		// 	{...viewport}
		// 	onViewportChange={(nextViewport) => setViewport(nextViewport)}
		// 	mapboxApiAccessToken={Token}
		// />
		<div className="">
			<Modal
				{...props}
				// show
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>Select Map</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ height: "500px" }}>
					<ReactMapGL
						className="img-fluid"
						{...viewport}
						onViewportChange={(viewmport) => {
							setViewport(viewmport);
						}}
						mapStyle="mapbox://styles/jodyseptiawan/ckm8u2216elzw17rziiaoor6g"
						mapboxApiAccessToken={Token}
					>
						<span className="box-map card-maps mb-auto mx-auto card bg-light py-2 px-3 rounded m-2 border border-success">
							<small className="mb-2">
								<b>Select Delivery Location</b>
							</small>
							<span className="text-danger d-inline">Yogyakarta</span>
							<button className="btn btn-sm btn-dark px-5 btn-order-cart btn-block py-1 mt-3">
								Confirm Location{" "}
							</button>
						</span>
					</ReactMapGL>
				</Modal.Body>
				<Modal.Footer>
					{/* <Button onClick={props.onHide}>Close</Button> */}
				</Modal.Footer>
			</Modal>
		</div>
	);
}
export default Map;
