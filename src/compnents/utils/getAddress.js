// import { useQuery } from "react-query";
// import axios from "axios";

// const GetAddress = (props) => {
// const token =
// 	"pk.eyJ1IjoiYXJpc2FyZXMyMiIsImEiOiJja21hNHN4bncxbzN1Mm5wcnZqZmhmd245In0.mo6lAUdwinLZchtCADFthw";

// 	console.log("props", props);
// 	const {
// 		data: addressData,
// 		error: addressError,
// 		loading: addressLoading,
// 		refetch: addressRefetch,
// 	} = useQuery("addresssCache", async () => {
// 		return await axios.get(
// 			// `https://api.mapbox.com/geocoding/v5/mapbox.places/106.89258,-6.90629.json?access_token=${token}&types=poi&country=id&localregion=ID-JB`
// 			`https://api.mapbox.com/geocoding/v5/mapbox.places/${props}.json?access_token=${token}&types=poi&country=id&localregion=ID-JB`
// 		);
// 	});

// 	console.log("ini ", addressData);

// 	if (addressData?.data?.features[0]?.place_name) {
// 		return addressData.data.features[0].place_name;
// 	}
// };

// export default GetAddress;

import { useEffect, useState } from "react";
import axios from "axios";
const token =
	"pk.eyJ1IjoiYXJpc2FyZXMyMiIsImEiOiJja21hNHN4bncxbzN1Mm5wcnZqZmhmd245In0.mo6lAUdwinLZchtCADFthw";

const GetAddress = (props) => {
	console.log("sasa", props);
	const [Address, setAddress] = useState([]);
	const getPosts2 = () => {
		axios
			.get(
				`https://api.mapbox.com/geocoding/v5/mapbox.places/${props}.json?access_token=pk.eyJ1IjoiYXJpc2FyZXMyMiIsImEiOiJja21hNHN4bncxbzN1Mm5wcnZqZmhmd245In0.mo6lAUdwinLZchtCADFthw&types=poi&country=id&localregion=ID-JB`
				// "https://api.mapbox.com/geocoding/v5/mapbox.places/106.89258,-6.90629.json?access_token=pk.eyJ1IjoiYXJpc2FyZXMyMiIsImEiOiJja21hNHN4bncxbzN1Mm5wcnZqZmhmd245In0.mo6lAUdwinLZchtCADFthw&types=poi&country=id&localregion=ID-JB"
			)
			.then((response) => setAddress(response.data.features));
	};
	useEffect(() => {
		console.log("useEffect componentDidMount");

		getPosts2();
	}, []); //fetching data dari API
	console.log("addd", Address);

	return "Address";
};

export default GetAddress;
