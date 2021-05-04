// import * as React from "react";

// import ReactMapGL from "react-map-gl";

// const TOKEN =
// 	"pk.eyJ1IjoiYXJpc2FyZXMyMiIsImEiOiJja21hNHN4bncxbzN1Mm5wcnZqZmhmd245In0.mo6lAUdwinLZchtCADFthw";

// export default function App({ children }) {
// 	const [viewport, setViewport] = React.useState({
// 		longitude: 106.91905,
// 		latitude: -6.9123,
// 		zoom: 10,
// 		height: "110vh",
// 		width: "100%",
// 	});
// 	const data = {
// 		intersections: [
// 			{
// 				out: 1,
// 				location: [13.424671, 52.508812],
// 				bearings: [120, 210, 300],
// 				entry: [false, true, true],
// 				in: 0,
// 				lanes: [
// 					{
// 						valid: true,
// 						active: true,
// 						valid_indication: "left",
// 						indications: ["left"],
// 					},
// 					{
// 						valid: true,
// 						active: false,
// 						valid_indication: "straight",
// 						indications: ["straight"],
// 					},
// 					{
// 						valid: false,
// 						active: false,
// 						indications: ["right"],
// 					},
// 				],
// 			},
// 		],
// 		geometry: "asn_Ie_}pAdKxG",
// 		maneuver: {
// 			bearing_after: 202,
// 			type: "turn",
// 			modifier: "left",
// 			bearing_before: 299,
// 			location: [13.424671, 52.508812],
// 			instruction: "Turn left onto Adalbertstraße",
// 		},
// 		duration: 59.1,
// 		distance: 236.9,
// 		driving_side: "right",
// 		weight: 59.1,
// 		name: "Adalbertstraße",
// 		mode: "driving",
// 	};

// 	return (
// 		<ReactMapGL
// 			{...viewport}
// 			onViewportChange={setViewport}
// 			mapboxApiAccessToken={TOKEN}
// 			mapStyle="mapbox://styles/mapbox/streets-v11"
// 		>
// 			{children}
// 		</ReactMapGL>
// 	);
// }

import * as React from "react";
import ReactMapGL, { Source, Layer } from "react-map-gl";
const TOKEN =
	"pk.eyJ1IjoiYXJpc2FyZXMyMiIsImEiOiJja21hNHN4bncxbzN1Mm5wcnZqZmhmd245In0.mo6lAUdwinLZchtCADFthw";

const geojson = {
	type: "FeatureCollection",
	features: [
		{
			type: "Feature",
			geometry: { type: "Point", coordinates: [-122.4, 37.8] },
		},
	],
};

const layerStyle = {
	id: "point",
	type: "circle",
	paint: {
		"circle-radius": 10,
		"circle-color": "#007cbf",
	},
};

function App() {
	const [viewport, setViewport] = React.useState({
		longitude: -122.45,
		latitude: 37.78,
		zoom: 14,
	});
	return (
		<ReactMapGL
			{...viewport}
			width="100vw"
			height="100vh"
			onViewportChange={setViewport}
			mapboxApiAccessToken={TOKEN}
		>
			<Source id="my-data" type="geojson" data={geojson}>
				<Layer {...layerStyle} />
			</Source>
		</ReactMapGL>
	);
}

export default App;
