import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../contexts/authContext";
import { transaction, order, restaurants } from "../API/Data";

const Profile = () => {
	const [state, dispatch] = useContext(AuthContext);

	// const filtered = products.filter((post) => {
	// 	if (post.partnerid == id) {
	// 		return post;
	// 	}
	// });

	const data = transaction.map((trans) => {
		restaurants.filter((res) => {
			if (res.id === trans.partnerid) {
			}
		});
	});

	console.log(data);

	return (
		<>
			<div className="container pt-3">
				<div className="row py-3 mt-3 mt-custom">
					<div className="my-2 col ">
						<h2>Profile</h2>
						<div className="row">
							<div className="col-5">
								<img
									className="img-fluid"
									src={state.user.img}
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
							<div className="col-7 profile-text">
								<h5>Full Name</h5>
								<p>{state.user.name}</p>
								<br />
								<h5>Email</h5>
								<p>{state.user.email}</p>
								<br />
								<h5>Phone</h5>
								<p>{state.user.phone}</p>
								<br />
							</div>
						</div>
					</div>
					<div className="my-2 col-5 ">
						<h2>
							{state.user.type == 1 ? "History Transaction" : "History Order"}
						</h2>
						{transaction.map((trans) => (
							<div className="card text-left">
								<div className="card-body row mx-0">
									<div className="col px-1">
										<h5>Burger King</h5>
										{restaurants.filter((res) => {
											if (res.id === trans.partnerid) {
												{
													<h5>{res.name}</h5>;
												}
											}
										})}

										<p>
											<small>{trans.date}</small>
										</p>
										<p className="mb-0 mt-3" style={{ color: "#974A4A" }}>
											Total : RP 45.000
										</p>
									</div>
									<div className="col-5 px-1">
										<div className="col-12 row px-0">
											<h5>WaysFood</h5>
											<img
												src="logo512.png"
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
											<Link
												to=""
												className="btn btn-block btn-outline-success btn-sm mt-4"
											>
												Succes
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
