import clip from "../compnents/assets/img/paperclip.svg";

const AddProduct = () => {
	return (
		<>
			<div className="container pt-3">
				<div className="row py-3 mt-3 mt-custom justify-content-center">
					<div className="my-2 col-10 ">
						<div className="mb-4">
							<h2>Add Product</h2>
						</div>
						<div className="input-group mb-3">
							<div className="col px-0">
								<input
									type="text"
									className="form-control"
									placeholder="Title"
								/>
							</div>
							<div className="col-3 pr-0">
								<input type="file" id="file" />
								<label for="file" className="custom ">
									Attach Image
									<img
										src={clip}
										alt="map"
										className=" imghover"
										style={{ float: "right", height: "20px" }}
									/>
								</label>
							</div>
						</div>
						<div className="mb-3">
							<input type="text" className="form-control" placeholder="Price" />
						</div>
					</div>
					<div className="my-2 col-10 row px-0 ">
						<div className="col"></div>
						<div className="col-4">
							<button className="btn btn-brown btn-block" type="submit">
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddProduct;
