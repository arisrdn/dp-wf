import { Link, useParams } from "react-router-dom";
import { API } from "../../config/api";
import { useQuery, useMutation } from "react-query";

import { TextLoading } from "../../compnents/card/CardLoading";
import GetAddress from "../../compnents/utils/getAddress";
import Card from "../../compnents/card/CardMyRestaurant";
import { useState, useEffect } from "react";

import "./assets/index.css";

const Restaurant = () => {
	const {
		data: myData,
		error: myError,
		loading: myLoading,
		refetch,
	} = useQuery("myCache", async () => {
		return await API.get(`/restaurant`);
	});

	const deleteMenu = useMutation(async (id) => {
		await API.delete(`/product/${id}`);
		refetch();
	});

	const deleteById = async (id) => {
		deleteMenu.mutate(id);
	};

	const location = myData?.data?.data?.restaurant?.location;
	const [address, setAddress] = useState("");

	const fetchLocation = async () => {
		const token =
			"pk.eyJ1IjoiaWxoYW0yNSIsImEiOiJja20yczc0dm0zOWczMndwMzVmdmJ1bjI4In0.1l2Zgxjy5R0iW2SlySO_fQ";
		const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?limit=1&access_token=${token}&country=id`;

		const api = await fetch(apiUrl);
		const response = await api.json();

		// console.log(location);÷
		if (response?.features) {
			setAddress(response?.features[0]?.place_name);
		}
	};

	useEffect(() => {
		fetchLocation();
		refetch();
	}, [location, myData]);
	useEffect(() => {});
	return (
		<>
			<div className=" mt-5 pb-3">
				<div className="container pt-3"></div>
			</div>
			<div className="container">
				{myData?.data?.data?.restaurant?.image ? (
					<>
						<div className="row">
							<div className="col-lg-3">
								<div className="profile-sidebar">
									<div className="d-flex justify-content-center px-2">
										<img
											src={
												myData.data.data.url + myData.data.data.restaurant.image
											}
											className="img-responsive"
											alt=""
											style={{
												height: "200px",
												objectFit: "cover",
												width: "100%",
											}}
										/>
									</div>

									<div className="text-center mt-3">
										<h4>{myData.data.data.restaurant.name}</h4>
									</div>
									<div className="text-center mb-3 px-3">
										{address}
										{/* <small>{myData.data.data.restaurant.location}</small> */}
									</div>

									<div className="portlet light bordered">
										<div className="row list-separated profile-stat">
											<div className="col-md-6 col-sm-12">
												<div className="uppercase profile-stat-title">
													{myData.data.data.restaurant.transactions.length}
												</div>
												<div className="uppercase profile-stat-text">
													{" "}
													Transactions{" "}
												</div>
											</div>

											<div className="col-md-6 col-sm-12">
												<div className="uppercase profile-stat-title">
													{myData.data.data.restaurant.products.length}
												</div>
												<div className="uppercase profile-stat-text">
													{" "}
													Product{" "}
												</div>
											</div>
										</div>

										<div>
											<div className="profile-userbuttons">
												<Link
													to="/my-restaurant/edit"
													className="btn btn-brown btn-sm"
												>
													Edit Restaurant
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-9">
								<div className="profile-content row">
									{myLoading ? (
										<TextLoading />
									) : myData.data.data.restaurant.products.length !== 0 ? (
										myData.data.data.restaurant.products.map(
											(product, index) => (
												<div className="col-lg-4 col-md-6 col-sm-6">
													<Card
														product={product}
														url={myData.data.data.url2}
														key={product.id}
														deleteById={deleteById}
													/>
												</div>
											)
										)
									) : (
										<div>
											<div className="col">
												<div className="">
													<div className="row">
														<div className="col-md-12">
															<div className="card">
																<div className="card-body cart">
																	<div
																		className="col-sm-12 empty-cart-cls text-center"
																		style={{ background: "whitesmoke" }}
																	>
																		{" "}
																		<img
																			src="data:image/jpeg;base64,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"
																			width="130"
																			height="130"
																			class="img-fluid mb-4 mr-3"
																		/>
																		<h3>
																			<strong></strong>
																		</h3>
																		<h4></h4>{" "}
																		<Link
																			to="/my-restaurant/addbook"
																			className="btn btn-yellow mb-4"
																		>
																			Add Product
																		</Link>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</>
				) : (
					<>loading</>
				)}
			</div>
		</>
	);
};

export default Restaurant;
