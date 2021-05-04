import { Link } from "react-router-dom";
import { useContext } from "react";
import { useQuery, useMutation } from "react-query";
import { API } from "../../config/api";
import logo from "../../compnents/assets/img/logo.svg";
import Moment from "react-moment";
import convertToRupiah from "../../compnents/utils/ToRupiah";

import { AuthContext } from "../../contexts/authContext";

const Profile = () => {
	const [state, dispatch] = useContext(AuthContext);
	const {
		data: transData,
		error: transError,
		loading: transLoading,
		refetch: trnrf,
	} = useQuery("transCache", async () => {
		// const response = A;
		const response = await API.get("/transactions/user");
		return response?.data?.data;
	});
	const {
		data: userData,
		error: userError,
		loading: userLoading,
		refetch,
	} = useQuery("usrCache", async () => {
		return await API.get("/user");
	});

	const finishTransaction = useMutation(async (id) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const body = JSON.stringify({
			status: "SUCCESS",
		});
		await API.put(`/transaction/${id}`, body, config);
		refetch();
		trnrf();
	});
	const handleFinish = async (id) => {
		finishTransaction.mutate(id);
	};
	const handleStatus = (status, id) => {
		switch (status) {
			case "Waiting Approve":
				return (
					<button
						className="btn btn-block btn-outline-warning btn-sm mt-4"
						disabled
					>
						Waiting Approve
					</button>
				);

			case "On The Way":
				return (
					<button
						onClick={() => handleFinish(id)}
						className="btn btn-block btn-info btn-sm mt-4"
					>
						Click To Complete
					</button>
				);

			case "Cancel":
				return (
					<button
						className="btn btn-block btn-outline-danger btn-sm mt-4"
						disabled
					>
						Canceled Order
					</button>
				);

			case "Success":
				return (
					<button
						className="btn btn-block btn-outline-success btn-sm mt-4"
						disabled
					>
						Success
					</button>
				);

			default:
				return;
				// <td></td><td></td>
				break;
		}
	};
	console.log("trans", transData);

	return (
		<>
			<div className="container pt-3">
				<div className="row py-3 mt-3 mt-custom">
					<div className="my-2 col-lg-7 col-md-12 ">
						<h2>Profile</h2>
						<div className="row">
							<div className="col-lg-5 col-md-12">
								<img
									className="img-fluid"
									src={
										userData?.data?.data?.user?.image
											? userData.data.data.url + userData.data.data.user.image
											: "https://ui-avatars.com/api/?background=433434&color=f4ad42&name=" +
											  userData?.data?.data?.user?.fullName
									}
									alt="profile"
									style={{
										objectFit: "cover",
										width: "100%",
									}}
								/>
								<Link
									to="/profile/edit"
									className="btn btn-block btn-brown  btn-sm mt-4"
								>
									Edit Profile
								</Link>
							</div>
							<div className="col-lg-7 col-md-12 profile-text">
								<h5>Full Name</h5>
								<p>{userData?.data?.data?.user?.fullName}</p>
								<br />
								<h5>Email</h5>
								<p>{userData?.data?.data?.user?.email}</p>
								<br />
								<h5>Phone</h5>
								<p>{userData?.data?.data?.user?.phone}</p>
								<br />
							</div>
						</div>
					</div>
					<div className="my-2 col-lg-5 col-md-12 ">
						<h2 className="pl-2">History Order</h2>
						{transData?.transactions?.length !== 0 ? (
							<>
								{transData?.transactions?.map((trans) => (
									<div className="card text-left">
										<div className="card-body row mx-0">
											<div className="col px-1">
												<h5> {trans?.restaurant?.name}</h5>
												<p>
													<small>
														<Moment format="dddd DD MMM YYYY">
															{trans.updatedAt}
														</Moment>
														{}
													</small>
												</p>
												<p className="mb-0 mt-3" style={{ color: "#974A4A" }}>
													{/* Total : RP 45.000 */}
													{convertToRupiah(
														getSubTotal(trans.orders) + trans.shippingFee
													)}
												</p>
											</div>
											<div className="col-5 px-1">
												<div className="col-12 row px-0">
													<h5>WaysFood</h5>
													<img
														src={logo}
														alt="WF"
														className="ml-2"
														style={{
															objectFit: "cover",
															width: "25px",
															height: "25px",
														}}
													/>
												</div>
												<div className="col-12 row px-0">
													{/* <Link
												to=""
												className="btn btn-block btn-outline-success btn-sm mt-4"
											>
												Succes
											</Link> */}

													{handleStatus(trans.status, trans.id)}
												</div>
											</div>
										</div>
									</div>
								))}
							</>
						) : (
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
															src="https://www.pngitem.com/pimgs/m/174-1749315_shopping-cart-buy-online-icon-png-transparent-png.png"
															width="130"
															height="130"
															class="img-fluid mb-4 mr-3"
														/>
														<h3>
															<strong>history not pound</strong>
														</h3>
														<h4></h4>{" "}
														<Link to="/" className="btn btn-yellow mb-4">
															continue shopping
														</Link>
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
	);
};

export default Profile;

function getSubTotal(data) {
	// console.log(data);
	var subtotal = 0;
	data.forEach(function (obj) {
		subtotal += obj.qty * obj.pricePurchased;
	});
	return subtotal;
}
