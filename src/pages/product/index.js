import { useContext, useEffect } from "react";
import { KeranjangContext } from "../../contexts/keranjangContext";
import { useParams } from "react-router-dom";
import { API } from "../../config/api";
import { useQuery, useMutation } from "react-query";

import Heromenu from "../../compnents/hero/Heromenu";
import { Card } from "../../compnents/Card";
import { TextLoading } from "../../compnents/card/CardLoading";

function Product() {
	const [state, dispatch] = useContext(KeranjangContext);
	let { id } = useParams();
	const addProductToCart = (data) => {
		dispatch({
			type: "ADD_CART",
			payload: data,
		});
	};
	const {
		data: productData,
		error: productError,
		loading: productLoading,
		refetch: productRefetch,
	} = useQuery("productsCache", async () => {
		return API.get(`/products/${id}`);
	});
	const deleteTodo = useMutation(async (id) => {
		await API.delete(`/user/${id}`);
		productRefetch();
	});

	return (
		<div className=" mt-5 pb-3">
			<div className="container pt-3">
				<Heromenu />
				<div className="row pb-3 ">
					<div className="row">
						{/* {productData.map((product) => ( */}
						{/* {productData?.data?.data?.products} */}
						{productLoading ? (
							<TextLoading />
						) : (
							productData?.data?.data?.products?.map((product, index) => (
								<div className="col-lg-3 col-md-4 col-sm-6">
									<Card
										product={product}
										url={productData.data.data.url}
										key={product.id}
										fromProduct={true}
										addProductToCart={addProductToCart}
									/>
								</div>
							))
						)}
					</div>
				</div>
				{/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
			</div>
		</div>
	);
}

export default Product;
