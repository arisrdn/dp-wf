import { useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext";

import map from "../compnents/assets/img/map.svg";
import clip from "../compnents/assets/img/paperclip.svg";
import Maps from "../compnents/Maps";

const EditProfile = () => {
	const [state, dispatch] = useContext(AuthContext);
	const [form, setForm] = useState(state.user);
	const [modalShow, setModalShow] = useState(false);
	const onChange = (e) => {
		console.log("log ".e);
		const updateForm = { ...form };
		updateForm[e.target.name] = e.target.value;
		setForm(updateForm);
	};

	return (
		<>
			<div className="container pt-3">
				<div className="row py-3 mt-3 mt-custom justify-content-center">
					<div className="my-2 col-10 ">
						<div className="mb-4">
							<h2>Edit Profile</h2>
						</div>
						<div className="input-group mb-3">
							<div className="col px-0">
								<input
									type="text"
									className="form-control"
									placeholder="Full Name"
									name="name"
									onChange={(e) => onChange(e)}
									value={state.user.name}
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
							<input
								type="email"
								className="form-control"
								placeholder="Email"
								name="email"
								onChange={(e) => onChange(e)}
								value={state.user.email}
							/>
						</div>
						<div className="mb-3">
							<input
								type="text"
								className="form-control"
								placeholder="Phone"
								onChange={(e) => onChange(e)}
								name="phone"
								value={state.user.phone}
							/>
						</div>
						<div className="input-group mb-3">
							<div className="col px-0">
								<input
									type="text"
									className="form-control"
									placeholder="Location"
								/>
							</div>
							<div className="col-3 pr-0">
								<button className="btn btn-brown btn-block" type="submit">
									Select On Map
									<img src={map} alt="map" className="ml-2" />
								</button>
							</div>
						</div>
					</div>
					<div className="my-2 col-10 row px-0 ">
						<div className="col"></div>
						<div className="col-4">
							<button
								className="btn btn-brown btn-block"
								type="submit"
								onClick={() => setModalShow(true)}
							>
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
			<Maps show={modalShow} onHide={() => setModalShow(false)} />
		</>
	);
};

export default EditProfile;
