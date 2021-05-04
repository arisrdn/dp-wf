import map from "../../compnents/assets/img/map.svg";
import clip from "../../compnents/assets/img/paperclip.svg";
// import Maps from "../../compnents/Maps";
import Pin from "../../compnents/maps/Pin";

import Maps from "../../compnents/maps/Modal";
import { useState, useCallback, useEffect } from "react";
import { API } from "../../config/api";
import { useQuery, useMutation } from "react-query";
import { useHistory } from "react-router";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";

import {
	Container,
	Col,
	Row,
	Form,
	Button,
	Modal,
	Alert,
} from "react-bootstrap";

const EditUser = () => {
	const router = useHistory();
	const [modalShow, setModalShow] = useState(false);
	const [form, setForm] = useState({
		email: "",
		fullName: "",
		phone: "",
		locationName: "Jl apa sh",
		imageFile: null,
		location: "",
	});
	const { fullName, email, imageFile, locationName, location, phone } = form;
	const {
		data: userData,
		error: userError,
		loading: userLoading,
		refetch: userRefetch,
	} = useQuery("userCache", async () => {
		return await API.get("/user");
	});

	console.log("form", form);
	const updateUser = useMutation(async () => {
		const body = new FormData();

		body.append("fullName", fullName);
		body.append("location", location);
		body.append("imageFile", imageFile);
		body.append("phone", phone);

		const config = {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		};

		await API.patch("/user/update", body, config);
		router.push("/profile");
	});

	const onChange = (e) => {
		const tempForm = { ...form };
		tempForm[e.target.name] =
			e.target.type === "file" ? e.target.files[0] : e.target.value;
		setForm(tempForm);
	};

	// ??maps

	const [place, setPlace] = useState("");
	const [address, setAddress] = useState("");

	const [marker, setMarker] = useState({
		longitude: 106.91905,
		latitude: -6.9123,
	});
	const [events, logEvents] = useState({});
	const onMarkerDragStart = useCallback((event) => {
		logEvents((_events) => ({ ..._events, onDragStart: event.lngLat }));
	}, []);

	const onMarkerDrag = useCallback((event) => {
		logEvents((_events) => ({ ..._events, onDrag: event.lngLat }));
	}, []);

	const onMarkerDragEnd = useCallback((event) => {
		logEvents((_events) => ({ ..._events, onDragEnd: event.lngLat }));
		setMarker({
			longitude: event.lngLat[0],
			latitude: event.lngLat[1],
		});
		setForm({
			// ...form,
			location: event.lngLat[0] + "," + event.lngLat[1],
		});
	}, []);
	const fetchLocation = async () => {
		const token =
			"pk.eyJ1IjoiaWxoYW0yNSIsImEiOiJja20yczc0dm0zOWczMndwMzVmdmJ1bjI4In0.1l2Zgxjy5R0iW2SlySO_fQ";
		const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?limit=1&access_token=${token}`;

		const api = await fetch(apiUrl);
		const response = await api.json();
		if (response?.features) {
			setPlace(response?.features[0]?.text);
			setAddress(response?.features[0]?.place_name);
		}
	};

	// console.log("asas", onMarkerDragEnd)
	useEffect(() => {
		fetchLocation();
	}, [location]);

	return (
		<>
			<div className="container pt-3">
				<div className="row py-3 mt-3 mt-custom justify-content-center"></div>
			</div>
			<Container>
				<Row className="mb-3">
					<Col xs={12}>
						<h2 className="font-weight-bold">Edit Profile</h2>
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
							}}
						>
							<Row>
								<Col xs={12} lg={9}>
									<Form.Group>
										<Form.Control
											className="input-bg input-bg2"
											value={fullName}
											onChange={(e) => onChange(e)}
											name="fullName"
											type="text"
											placeholder="Full Name"
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
								{/* <Col xs={12}>
									<Form.Group>
										<Form.Control
											className="input-bg input-bg2"
											value={email}
											onChange={(e) => onChange(e)}
											name="email"
											type="text"
											placeholder="email"
											disabled
										/>
									</Form.Group>
								</Col> */}
							</Row>
							<Row>
								<Col xs={12}>
									<Form.Group>
										<Form.Control
											className="input-bg input-bg2"
											value={phone}
											onChange={(e) => onChange(e)}
											name="phone"
											type="text"
											placeholder="Phone"
											required
										/>
									</Form.Group>
								</Col>
							</Row>

							<Row>
								<Col xs={12} lg={9}>
									<Form.Group>
										<Form.Control
											className="input-bg input-bg2"
											value={address}
											disabled
											name="locationName"
											type="text"
										/>
										<input
											type="hidden"
											className="input-bg input-bg2"
											value={location}
											name="location"
										/>
									</Form.Group>
								</Col>
								<Col xs={12} lg={3}>
									<Form.Group>
										<Button
											variant="brown"
											className="btn-block"
											onClick={() => setModalShow(true)}
										>
											Select On Map
											<img src={map} alt="map" className="ml-2" />
										</Button>
									</Form.Group>
								</Col>
							</Row>

							<Row className="mt-2">
								<Col xs={12} lg={12} className="text-right">
									<Button
										variant="brown"
										className="w-25"
										type="submit"
										disabled={!fullName ? true : false}
									>
										Save
									</Button>
								</Col>
							</Row>
						</Form>
					</Col>
				</Row>
			</Container>

			<Maps
				show={modalShow}
				onHide={() => setModalShow(false)}
				children={
					<>
						<Marker
							longitude={marker.longitude}
							latitude={marker.latitude}
							offsetTop={-20}
							offsetLeft={-10}
							draggable
							onDragStart={onMarkerDragStart}
							onDrag={onMarkerDrag}
							onDragEnd={onMarkerDragEnd}
						>
							<Pin size={20} />
						</Marker>
						<div
							className="shadow p-3 overflow-auto"
							style={{
								width: "400px",
								height: "150px",
								position: "absolute",
								left: "50%",
								bottom: "0",
								backgroundColor: "white",
								transform: "translateX(-50%)",
								borderRadius: "5px",
							}}
						>
							<Row className="mb-2">
								<Col>
									<h5 className="font-weight-bold text-center mb-0">
										Select location
									</h5>
								</Col>
							</Row>
							<Row className="mb-3">
								<Col lg={2}>
									{/* <img src={iconMapPointer} alt="map pointer" width="55" /> */}
								</Col>
								<Col lg={10}>
									<Row>
										<Col lg={12}>
											{/* <small className="font-weight-bold">{place}</small> */}
										</Col>

										<Col lg={12} style={{ lineHeight: "1" }}>
											<small className="text-sm">{address}</small>
										</Col>
									</Row>
								</Col>
							</Row>
							<Row>
								<Col>
									<Button
										// onClick={handleMapClose}
										variant="brown"
										className="w-100"
										onClick={() => setModalShow(false)}
									>
										Confirm Location
									</Button>
								</Col>
							</Row>
						</div>
					</>
				}
			/>
		</>
	);
};

export default EditUser;
