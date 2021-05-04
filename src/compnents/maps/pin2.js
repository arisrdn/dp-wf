import * as React from "react";
import { Marker } from "react-map-gl";
import CITIES from "./data.json";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 1;

// Important for perf: the markers never change, avoid rerender when the map viewport changes
function Pins(props) {
	const { data, onClick } = props;

	// var arr = [];
	// for (var i in CITIES) {
	// 	var latlong = CITIES[i].location.split(",");
	// 	arr.push({ latitude: latlong[0], longitude: latlong[1] });
	// }

	function getSubTotal(data) {
		const [latitude, longitude] = data.split(",");
		return { latitude, longitude };
	}

	console.log("logo 2", CITIES);
	return data.map((city, index) => (
		<Marker
			key={`marker-${index}`}
			longitude={city.longitude}
			latitude={city.latitude}
		>
			{/* <svg
				height="5px"
				viewBox="0 0 24 24"
				style={{
					cursor: "pointer",
					fill: "#d00",
					stroke: "none",
					// transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
				}}
				onClick={() => onClick(city)}
			>
				<path d={ICON} />
			</svg> */}
			<svg width="20px" height="20px" viewBox="0 0 48 72" fill="#009688">
				<path d="M24,0 C11.406,0 0,10.209 0,22.806 C0,35.4 10.407,50.436 24,72 C37.593,50.436 48,35.4 48,22.806 C48,10.209 36.597,0 24,0 L24,0 Z M24,33 C19.029,33 15,28.971 15,24 C15,19.029 19.029,15 24,15 C28.971,15 33,19.029 33,24 C33,28.971 28.971,33 24,33 L24,33 Z"></path>
			</svg>
		</Marker>
	));
}

export default React.memo(Pins);
