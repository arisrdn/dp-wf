import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import MapGL, {
	Popup,
	Marker,
	NavigationControl,
	FullscreenControl,
	ScaleControl,
	GeolocateControl,
} from "react-map-gl";

// import ControlPanel from "./control-panel";
import Pins from "./pin2";

import CITIES from "./cities.json";
import CITIES2 from "./data.json";

const TOKEN =
	"pk.eyJ1IjoiYXJpc2FyZXMyMiIsImEiOiJja21hNHN4bncxbzN1Mm5wcnZqZmhmd245In0.mo6lAUdwinLZchtCADFthw";

const geolocateStyle = {
	top: 0,
	left: 0,
	padding: "10px",
};

const fullscreenControlStyle = {
	top: 36,
	left: 0,
	padding: "10px",
};

const navStyle = {
	top: 72,
	left: 0,
	padding: "10px",
};

const scaleControlStyle = {
	bottom: 36,
	left: 0,
	padding: "10px",
};

export default function App({ children }) {
	const [viewport, setViewport] = useState({
		longitude: 106.91905,
		latitude: -6.9123,
		zoom: 12,
		// bearing: 0,
		// pitch: 0,
	});
	const [popupInfo, setPopupInfo] = useState(null);

	function getSubTotal(data) {
		const [latitude, longitude] = data.split(",");
		return { latitude, longitude };
	}

	const coordinates = CITIES2.map((item) => {
		const [long, lat] = item.location.split(",");
		const longitude = Number(long);
		const latitude = Number(lat);
		return { longitude, latitude };
	});

	console.log("GHG", coordinates);
	console.log("GHGww", CITIES);
	return (
		<>
			<MapGL
				{...viewport}
				width="100%"
				height="100%"
				mapStyle="mapbox://styles/mapbox/streets-v11"
				onViewportChange={setViewport}
				mapboxApiAccessToken={TOKEN}
			>
				{/* <Pins data={CITIES} onClick={setPopupInfo} /> */}
				{coordinates.map((city, index) => (
					<Marker
						key={`marker-${index}`}
						longitude={city.longitude}
						latitude={city.latitude}
					>
						<svg width="20px" height="20px" viewBox="0 0 48 72" fill="#009688">
							<path d="M24,0 C11.406,0 0,10.209 0,22.806 C0,35.4 10.407,50.436 24,72 C37.593,50.436 48,35.4 48,22.806 C48,10.209 36.597,0 24,0 L24,0 Z M24,33 C19.029,33 15,28.971 15,24 C15,19.029 19.029,15 24,15 C28.971,15 33,19.029 33,24 C33,28.971 28.971,33 24,33 L24,33 Z"></path>
						</svg>
					</Marker>
				))}

				<GeolocateControl style={geolocateStyle} />
				<FullscreenControl style={fullscreenControlStyle} />
				<NavigationControl style={navStyle} />
				<ScaleControl style={scaleControlStyle} />
				{children}
			</MapGL>

			{/* <ControlPanel /> */}
		</>
	);
}
