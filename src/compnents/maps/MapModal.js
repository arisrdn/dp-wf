import React from "react";
import DeckGL from "deck.gl";
import { StaticMap } from "react-map-gl";
import { PathLayer } from "@deck.gl/layers";
const MapModal = (props) => {
	// console.log("prop", props);

	let data;

	data = [
		{
			name: "random-name",
			color: [101, 147, 245],
			path: [
				[106.899411, -6.920468],
				[106.899365, -6.920722],
				[106.898818, -6.92054],
				[106.898405, -6.920588],
				[106.898327, -6.922562],
				[106.898487, -6.92394],
				[106.899192, -6.925627],
				[106.899568, -6.927264],
				[106.900193, -6.928426],
				[106.900052, -6.930253],
				[106.90336, -6.933429],
				[106.892634, -6.923313],
				[106.889605, -6.920837],
				[106.883148, -6.916038],
				[106.882042, -6.915044],
			],
		},
	];

	const layer = [
		new PathLayer({
			id: "path-layer",
			data,
			getWidth: (data) => 7,
			getColor: (data) => data.color,
			widthMinPixels: 7,
		}),
	];
	return (
		<>
			<React.Fragment>
				<DeckGL
					initialViewState={{
						longitude: 106.91905,
						latitude: -6.9123,
						zoom: 12,
					}}
					height="100%"
					width="100%"
					controller={true}
					layers={layer} // layer here
				>
					<StaticMap
						mapStyle="mapbox://styles/mapbox/streets-v11"
						mapboxApiAccessToken="pk.eyJ1IjoiYXJpc2FyZXMyMiIsImEiOiJja21hNHN4bncxbzN1Mm5wcnZqZmhmd245In0.mo6lAUdwinLZchtCADFthw"
					/>
				</DeckGL>
			</React.Fragment>
		</>
	);
};

export default MapModal;
