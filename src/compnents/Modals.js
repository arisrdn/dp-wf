// import React from "react";
// import { useHistory } from "react-router-dom";
// import Card from "./Card";

// const Modal = () => {
// 	const history = useHistory();

// 	const closeModal = (e) => {
// 		e.stopPropagation();
// 		history.goBack();
// 	};

// 	React.useEffect(() => {
// 		document.body.classList.add("overflow-hidden");

// 		return () => {
// 			document.body.classList.remove("overflow-hidden");
// 		};
// 	}, []);

// 	return (
// 		<div
// 			onClick={closeModal}
// 			role="dialog"
// 			aria-modal="true"
// 			class="fade modal show"
// 			tabindex="-1"
// 			style={{
// 				display: "block",
// 				// position: "absolute",
// 				// top: 0,
// 				// left: 0,
// 				// bottom: 0,
// 				// right: 0,
// 				background: "rgba(0, 0, 0, 0.50)",
// 			}}
// 		></div>
// 	);
// };

// export default Modal;

export const User = () => {
	const { dispatch: userDispatch } = useContext(UserContext);
	const { dispatch: cartDispatch } = useContext(keranjangContext);
	const {
		data: userData,
		error: userError,
		loading: userLoading,
		refetch: userRefetch,
	} = useQuery("userCache", async () => {
		return API.get("/user");
	});

	// console.log("data", userData?.data?.data?.user?.restaurant);
	const logoutUser = () => {
		userDispatch({
			type: "LOGOUT",
		});
	};
	return (
		<>
			<div
				style={{
					borderRight: "1px solid #433434",
				}}
			>
				<Cart />
			</div>
			{/* restaurant÷ */}
			<NavDropdown
				// eventKey={1}
				title={
					<div className="pull-left">
						<img
							className="thumbnail-image"
							src={userData?.data?.data?.user?.restaurant ? Re : Re2}
							alt="user pic"
							width="40"
							height="40"
						/>
					</div>
				}
				id="basic-nav-dropdown"
				alignRight
			>
				{!userData?.data?.data?.user?.restaurant ? (
					<div className="px-2">
						<button className="btn btn-block btn-sm btn-brown">
							crete your restauran
						</button>
					</div>
				) : (
					<>
						<Link to="/profile" className="dropdown-item">
							<img src={user} alt="" className="dropdown-logo " /> Profile
						</Link>

						<Link to="/product/add" className="dropdown-item">
							<img src={product} alt="" className="dropdown-logo " /> Add
							product
						</Link>
					</>
				)}
			</NavDropdown>
			{/* user */}
			<NavDropdown
				// eventKey={1}
				title={
					<div className="pull-left">
						<img
							className="thumbnail-image rounded-circle"
							src={
								userData?.data?.data?.user?.image
									? userData.data.data.url + userData.data.data.user.image
									: "https://ui-avatars.com/api/?background=433434&color=f4ad42&name=" +
									  userData.data.data.user.fullName
							}
							alt="user pic"
							width="40"
							height="40"
						/>
					</div>
				}
				id="basic-nav-dropdown"
				alignRight
				// className="dropdown-menu-right menu"
			>
				<Link to="/profile" className="dropdown-item">
					<img src={user} alt="" className="dropdown-logo " /> Profile
				</Link>

				<Link to="/product/add" className="dropdown-item">
					<img src={product} alt="" className="dropdown-logo " /> Add product
				</Link>

				<NavDropdown.Divider />
				<Link to="/#" onClick={logoutUser} className="dropdown-item">
					<img src={logout} alt="" className="dropdown-logo " /> logout
				</Link>
			</NavDropdown>
		</>
	);
};
