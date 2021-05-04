import { useHistory } from "react-router";
import { useContext } from "react";

import { AuthContext } from "../contexts/authContext";
import convertToRupiah from "../compnents/utils/ToRupiah";

export const CardPopular = (props) => {
	const { name, logo, id } = props.data;
	const history = useHistory();
	const [state, dispatch] = useContext(AuthContext);
	const handleOpenLogin = () => {
		dispatch({
			type: "MODAL_LOGIN_OPEN",
		});
	};
	return (
		<div className="col-md-3 mb-3">
			<div
				className="card "
				onClick={() => {
					history.push(`/restaurant/${id}`);
				}}
				style={{
					height: "100px",
					cursor: "pointer",
				}}
			>
				<div className="card-body">
					<div className="row">
						<div className="col-sm-4 pl-2">
							<img src={logo} alt={name} width="65px" height="65px" />
						</div>
						<div className="col-sm-8 my-auto px-3">
							<h5>{name}</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export const CardNearyou = (props) => {
	const history = useHistory();
	const { name, logo, id, distance } = props.data;
	return (
		<div
			className="col-md-3 mb-3"
			style={{
				cursor: "pointer",
			}}
		>
			<div
				className="card mb-3"
				onClick={() => {
					history.push(`/restaurant/${id}`);
				}}
			>
				<div className="py-2 px-2">
					<img
						src={logo}
						alt={name}
						style={{
							height: "auto",
							objectFit: "cover",
							width: "100%",
						}}
					/>
				</div>
				<div className="card-body ">
					<h5
						style={{
							height: "40px",
						}}
					>
						{name}
					</h5>
					<small className="">{distance} Km</small>
				</div>
			</div>
		</div>
	);
};

export const Card = ({ product, fromProduct, addProductToCart, url }) => {
	const { tittle, image, price } = product;
	// console.log(product);
	return (
		<div className="mb-3 card">
			<div className="py-2 px-2">
				<img
					src={url + image}
					alt={tittle}
					style={{
						height: "140px",
						objectFit: "cover",
						width: "100%",
					}}
				/>
			</div>
			<div className="card-body ">
				<div
					style={{
						height: "38px",
					}}
				>
					<h5
						style={{
							fontSize: "15px",
							fontWeight: "600",
						}}
					>
						{tittle}
					</h5>
				</div>
				<small className="text-danger">{convertToRupiah(price)}</small>
				<div className=" d-flex justify-content-center align-items-center flex-column">
					{fromProduct && (
						<button
							onClick={() => addProductToCart(product)}
							className="mt-2 btn btn-yellow btn-block"
						>
							Add To Cart
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
