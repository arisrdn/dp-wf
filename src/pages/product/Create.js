import map from "../../compnents/assets/img/map.svg";
import clip from "../../compnents/assets/img/paperclip.svg";
import Maps from "../../compnents/Maps";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "../../config/api";
import { useQuery, useMutation } from "react-query";
// import { Button, Form, Modal } from "react-bootstrap";
import {
	Container,
	Col,
	Row,
	Form,
	Button,
	Modal,
	Alert,
} from "react-bootstrap";
const CreateRestaurant = () => {
	const router = useHistory();
	const [form, setForm] = useState({
		tittle: "",
		price: "",
		imageFile: null,
	});

	const { tittle, price, imageFile } = form;

	const updateUser = useMutation(async () => {
		const body = new FormData();

		body.append("tittle", tittle);
		body.append("price", price);
		body.append("imageFile", imageFile);

		const config = {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		};

		await API.post("/product", body, config);

		setForm({
			tittle: "",
			price: "",
			imageFile: null,
		});
	});

	const onChange = (e) => {
		const tempForm = { ...form };
		tempForm[e.target.name] =
			e.target.type === "file" ? e.target.files[0] : e.target.value;
		setForm(tempForm);
	};

	return (
		<>
			<div className="container pt-3">
				<div className="row py-3 mt-3 mt-custom justify-content-center"></div>
			</div>
			<Container>
				<Row className="mb-3">
					<Col xs={12}>
						<h2 className="font-weight-bold">Add Product</h2>
					</Col>
				</Row>
				<Row className="">
					<Col xs={12}>
						{updateUser.error?.response?.data?.message && (
							<Alert variant="danger">
								{updateUser.error?.response?.data?.message}
							</Alert>
						)}
					</Col>
				</Row>
				<Row>
					<Col>
						<Form
							onSubmit={(e) => {
								e.preventDefault();
								updateUser.mutate();
								router.push("/my-restaurant");
							}}
						>
							<Row>
								<Col xs={12} lg={9}>
									<Form.Group>
										<Form.Control
											className="input-bg input-bg2"
											value={tittle}
											onChange={(e) => onChange(e)}
											name="tittle"
											type="text"
											placeholder="Tittle"
											required
										/>
									</Form.Group>
								</Col>
								<Col xs={12} lg={3}>
									<Form.Group>
										<input
											id="file"
											onChange={(e) => onChange(e)}
											name="imageFile"
											type="file"
										/>
										<label for="file" className="custom ">
											{imageFile?.name ? imageFile?.name : "Attach Image"}
											<img
												src={clip}
												alt="map"
												className=" imghover"
												style={{ float: "right", height: "20px" }}
											/>
										</label>
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col xs={12}>
									<Form.Group>
										<Form.Control
											className="input-bg input-bg2"
											value={price}
											onChange={(e) => onChange(e)}
											name="price"
											type="number"
											placeholder="Price"
										/>
									</Form.Group>
								</Col>
							</Row>

							<Row className="mt-2">
								<Col xs={12} lg={12} className="text-right">
									<Button
										variant="brown"
										className="w-25"
										type="submit"
										disabled={!price || !tittle || !imageFile ? true : false}
									>
										Save
									</Button>
								</Col>
							</Row>
						</Form>
					</Col>
				</Row>
			</Container>

			{/* <Maps show={modalShow} onHide={() => setModalShow(false)} /> */}
		</>
	);
};

export default CreateRestaurant;
