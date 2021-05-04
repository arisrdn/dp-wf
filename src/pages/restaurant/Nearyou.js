import { API } from "../../config/api";
import { useQuery } from "react-query";
import CardNearyou from "../../compnents/card/CardNearyou";
import { TextLoading } from "../../compnents/card/CardLoading";

//useQuery = method GET
//useMutation = method POST, PUT, PATCH & DELETE

const Nearyou = () => {
	const {
		data: restaurantData,
		error: restaurantError,
		loading: restaurantLoading,
		refetch: restaurantRefetch,
	} = useQuery("restaurantsCache", async () => {
		return API.get("/restaurants");
	});
	// console.log("restaura", restaurantData);

	return (
		<>
			<div className="row ">
				<div className="my-2 col-12">
					<h2>Restaurant Near You</h2>
				</div>

				{restaurantLoading ? (
					<TextLoading />
				) : (
					restaurantData?.data?.data?.restaurants?.map((restaurant, index) => (
						<CardNearyou
							data={restaurant}
							index={index}
							key={restaurant.id}
							url={restaurantData.data.data.url}
						/>
					))
				)}
			</div>
		</>
	);
};

export default Nearyou;
