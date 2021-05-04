import { useContext, useEffect } from "react";
import { KeranjangContext } from "../contexts/keranjangContext";
import { useParams } from "react-router-dom";

import { Card } from "../compnents/Card";
// import { products } from "../API/Data";
import { products } from "../API/product";
import Heromenu from "../compnents/hero/Heromenu";

function Product() {
	const [state, dispatch] = useContext(KeranjangContext);
	let { id } = useParams();

	const filteredProduct = products.filter((post) => {
		if (post.partnerid == id) {
			return post;
		}
	});
	useEffect(() => {
		console.log("useEffect componentDidMount");
	}, []); //fetching data dari API
	const addProductToCart = (data) => {
		dispatch({
			type: "ADD_CART",
			payload: data,
		});
	};

	console.log("ininini", filteredProduct);
	return (
		<div className=" mt-5 pb-3">
			<div className="container pt-3">
				<Heromenu />
				<div className="row pb-3 ">
					<div className="row">
						{filteredProduct.map((product) => (
							<div className="col-sm-3">
								<Card
									product={product}
									key={product.id}
									fromProduct={true}
									addProductToCart={addProductToCart}
								/>
							</div>
						))}
					</div>
				</div>
				{/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
			</div>
		</div>
	);
}

export default Product;
