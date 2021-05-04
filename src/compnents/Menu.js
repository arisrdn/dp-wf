import { useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import { API } from "../config/api";
import { useQuery } from "react-query";

import { AuthContext } from "../contexts/authContext";
import { KeranjangContext } from "../contexts/keranjangContext";

import keranjang from "./assets/img/keranjang.svg";
import user from "./assets/img/user.svg";
import product from "./assets/img/product.svg";
import logout from "./assets/img/logout.svg";
import menu from "./assets/img/menu.svg";
import transaction from "./assets/img/transaction.svg";
import Re from "./assets/shop.svg";
import Re2 from "./assets/shop-2.svg";

const Menu = () => {
	const [state, dispatch] = useContext(AuthContext);

	return <>{!state.isLogin ? <LoginRegister /> : <User />}</>;
};

export default Menu;

export const LoginRegister = () => {
	const [state, dispatch] = useContext(AuthContext);
	const handleOpenLogin = () => {
		dispatch({
			type: "MODAL_LOGIN_OPEN",
		});
	};
	const handleOpenRegister = () => {
		dispatch({
			type: "MODAL_REGISTER_OPEN",
		});
	};
	return (
		<div>
			<Nav>
				<li className="nav-link">
					<button
						className="btn btn-brown btn-nav btn-sm"
						onClick={handleOpenLogin}
					>
						Login
					</button>
				</li>
				<li className="nav-link">
					<button
						className="btn btn-brown btn-nav btn-sm"
						onClick={handleOpenRegister}
					>
						Register
					</button>
				</li>
			</Nav>
		</div>
	);
};

export const User = () => {
	const [state, dispatch] = useContext(AuthContext);
	const history = useHistory();
	// const { dispatch: cartDispatch } = useContext(KeranjangContext);
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
		// console.log("lll", state);
		dispatch({
			type: "LOGOUT",
		});
		// cartDispatch({
		// 	type: "EMPETY_CART",
		// });
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
						<button
							onClick={() => {
								history.push(`/my-restaurant/create`);
							}}
							className="btn btn-block btn-sm btn-brown"
						>
							crete your restauran
						</button>
					</div>
				) : (
					<>
						<Link to="/my-restaurant/transaction" className="dropdown-item">
							<img src={transaction} alt="" className="dropdown-logo " />
							Transaction
							<span
								className="badge badge-pill badge-info ounded-pill "
								// style={{ marginLeft: "-15px" }}
							>
								{/* {state.carts.length} */}1
							</span>
						</Link>
						<Link to="/my-restaurant" className="dropdown-item">
							<img src={menu} alt="" className="dropdown-logo " /> My Product
						</Link>
						<Link to="/my-restaurant/addbook" className="dropdown-item">
							<img src={product} alt="" className="dropdown-logo " /> Add
							Product
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
									  userData?.data?.data?.user?.fullName
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

				<NavDropdown.Divider />
				<Link to="/#" onClick={logoutUser} className="dropdown-item">
					<img src={logout} alt="" className="dropdown-logo " /> logout
				</Link>
			</NavDropdown>
		</>
	);
};

export const Cart = () => {
	const [state, dispatch] = useContext(KeranjangContext);
	return (
		<>
			<Nav.Link as={Link} to="/cart">
				<img src={keranjang} alt="" className="thumbnail-image" />
				{state.carts.length ? (
					<span
						className="badge badge-pill badge-danger rounded-pill position-absolute top-0 start-0"
						style={{ marginLeft: "-15px" }}
					>
						{/* {state.carts.length} */}
						{sum(state.carts)}
					</span>
				) : (
					""
				)}
			</Nav.Link>
		</>
	);
};

const sum = (data) => {
	var sum = 0;
	data.forEach(function (obj) {
		sum += obj.qty;
	});
	return sum;
};
