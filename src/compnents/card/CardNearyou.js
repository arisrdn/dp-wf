import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Col } from "react-bootstrap";

import { KeranjangContext } from "../../contexts/keranjangContext";

export default function RestaurantCard(props) {
	const history = useHistory();
	const [state, dispatch] = useContext(KeranjangContext);
	const { name, image, id, distance } = props.data;

	// console.log("state", state);
	const handleClick = () => {
		history.push(`/restaurant/${id}`);
	};
	return (
		<Col xs={12} md={4} lg={3} className="mb-4">
			<div
				className="card mb-3"
				onClick={handleClick}
				style={{ borderRadius: 5, cursor: "pointer", minHeight: "200px" }}
			>
				<div className="py-2 px-2">
					<img
						src={props.url + image}
						alt={name}
						style={{
							height: "200px",
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
		</Col>
	);
}
