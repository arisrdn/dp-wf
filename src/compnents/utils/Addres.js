import { useQuery } from "react-query";
import axios from "axios";

const GetAddress = (props) => {
	const token =
		"pk.eyJ1IjoiYXJpc2FyZXMyMiIsImEiOiJja21hNHN4bncxbzN1Mm5wcnZqZmhmd245In0.mo6lAUdwinLZchtCADFthw";
	const data = "106.98565461425592,-6.883669638960748";
	console.log("props", props);
	const {
		data: addressData,
		error: addressError,
		loading: addressLoading,
		refetch: addressRefetch,
	} = useQuery("addresssCache", async () => {
		return await axios.get(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/106.86274506835862,-6.872080668047813
            .json?access_token=${token}&types=poi&country=id&localregion=ID-JB`
			// `https://api.mapbox.com/geocoding/v5/mapbox.places/${data}.json?access_token=${token}&types=poi&country=id&localregion=ID-JB`
		);
	});

	console.log("ini ", addressData);

	if (addressData?.data?.features[0]?.place_name) {
		return addressData.data.features[0].place_name;
	}
};

export default GetAddress;
