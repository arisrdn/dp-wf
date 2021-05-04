import { API } from "../../config/api";
import { useQuery } from "react-query";
import CardPopular from "../../compnents/card/CardPopular";
import { PopularLoading } from "../../compnents/card/CardLoading";

//useQuery = method GET
//useMutation = method POST, PUT, PATCH & DELETE

const Popular = () => {
	const {
		data: popularData,
		error: popularError,
		loading: popularLoading,
		refetch: popularRefetch,
	} = useQuery("popularCache", async () => {
		return API.get("/restaurants-fav");
	});

	return (
		<>
			<div className="row ">
				<div className="my-2 col-12">
					<h2>Popular Restaurant</h2>
				</div>

				{popularLoading ? (
					<PopularLoading />
				) : (
					popularData?.data?.data?.restaurants?.map((restaurant, index) => (
						<CardPopular data={restaurant} index={index} key={restaurant.id} />
					))
				)}
			</div>
		</>
	);
};

export default Popular;
