import { Link } from "react-router-dom";
import convertToRupiah from "../utils/ToRupiah";

export const Card = ({ product, fromProduct, deleteById, url }) => {
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
				<div className=" d-flex justify-content-center ">
					<button
						onClick={() => deleteById(product.id)}
						className="mt-2 btn btn-danger btn-sm mr-2 col-6"
					>
						Delete
					</button>

					<Link
						to={"/my-restaurant/editbook/" + product.id}
						className="mt-2 btn btn-yellow btn-sm col-6"
					>
						{" "}
						Edit
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Card;
