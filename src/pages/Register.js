import { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { API, setAuthToken } from "../config/api";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AuthContext } from "../contexts/authContext";
import { Button, Form, Modal, Alert } from "react-bootstrap";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(8).required(),
	fullname: yup.string().min(2).required(),
	gender: yup.string().required(),
	phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

function Register() {
	const router = useHistory();
	const [state, dispatch] = useContext(AuthContext);

	const handleClose = () => {
		dispatch({
			type: "MODAL_REGISTER_CLOSE",
		});
	};
	const handleOpenLogin = () => {
		handleClose();
		dispatch({
			type: "MODAL_LOGIN_OPEN",
		});
	};
	const handleOpenRegister = () => {
		handleClose();
		dispatch({
			type: "MODAL_REGISTER_OPEN",
		});
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	console.log(errors);
	const onSubmit = useMutation(async (data) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		console.log(data);
		const body = JSON.stringify({
			email: data.email,
			fullName: data.fullname,
			password: data.password,
			phone: data.phone,
			gender: data.gender,
		});
		const response = await API.post("/register", body, config);

		console.log("res-akhir", response.data?.data?.user?.token);

		setAuthToken(response.data?.data?.user?.token);
		dispatch({
			type: "LOGIN_SUCCESS",
			payload: response.data?.data?.user,
		});
		handleClose();
		router.push("/");
		reset();
		return response;
	});

	// alert
	const [visibleAlert, setVisibleAlert] = useState(false);

	useEffect(() => {
		if (onSubmit.error?.response?.data?.message) {
			setVisibleAlert(true);
			setTimeout(() => {
				setVisibleAlert(false);
			}, 2000);
		}
	}, [onSubmit.error?.response?.data?.message]);

	return (
		<Modal show={state.modalRegister} onHide={handleClose} size="sm" centered>
			<Modal.Body>
				<div className="form-title mb-3">
					<h4 className="text-yellow">Register</h4>
				</div>
				<Alert
					variant="danger"
					show={visibleAlert}
					onClose={() => setVisibleAlert(false)}
					dismissible
				>
					{onSubmit.error?.response?.data?.message}
				</Alert>
				<div className="d-flex flex-column">
					{/* <Form onSubmit={(e) => registerUser(e)}> */}
					<Form onSubmit={handleSubmit(onSubmit.mutate)}>
						<Form.Group controlId="formBasicEmail">
							<Form.Control
								type="email"
								className="form-control input-bg"
								placeholder="Email"
								{...register("email")}
							/>
							<div className="invalid-feedback" style={{ display: "contents" }}>
								{errors.email?.message}
							</div>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Control
								type="password"
								{...register("password")}
								className="form-control input-bg"
								placeholder="Password"
							/>
							<div className="invalid-feedback" style={{ display: "contents" }}>
								{errors.password?.message}
							</div>
						</Form.Group>
						<Form.Group>
							<Form.Control
								type="text"
								className="form-control input-bg"
								placeholder="Full Name"
								{...register("fullname")}
							/>
							<div className="invalid-feedback" style={{ display: "contents" }}>
								{errors.fullname?.message}
							</div>
						</Form.Group>
						<Form.Group>
							<Form.Control
								as="select"
								custom
								className="form-control input-bg"
								placeholder="Gender"
								{...register("gender")}
							>
								<option value="">select gender..</option>
								<option value="female">female</option>
								<option value="male">male</option>
							</Form.Control>
							<div className="invalid-feedback" style={{ display: "contents" }}>
								{errors.gender?.message}
							</div>
						</Form.Group>
						<Form.Group>
							<Form.Control
								type="text"
								className="form-control input-bg"
								placeholder="Phone"
								{...register("phone")}
							></Form.Control>
							<div className="invalid-feedback" style={{ display: "contents" }}>
								{errors.phone?.message}
							</div>
						</Form.Group>
						<Button
							type="submit"
							variant="brown"
							className="btn btn-block btn-round"
							// onClick={registerUser()}
						>
							Register
						</Button>
					</Form>
					<p className="text-danger">{state.errormail}</p>
					<div className="text-center text-muted delimiter mt-2 ">
						Already have an account ? klick {"\u00A0"}
						<Link
							to="#"
							onClick={handleOpenLogin}
							className="font-weight-bold text-muted"
						>
							here
						</Link>
						.
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
}

export default Register;

// import { useContext, useState } from "react";
// import { Link, useHistory } from "react-router-dom";

// import { AuthContext } from "../contexts/authContext";

// import { Button, Form, Modal, Alert } from "react-bootstrap";
// import { useMutation } from "react-query";
// import { API, setAuthToken } from "../config/api";

// function Register() {
// 	const router = useHistory();
// 	const [state, dispatch] = useContext(AuthContext);
// 	const [form, setForm] = useState({
// 		email: "",
// 		fullName: "",
// 		password: "",
// 		phone: "",
// 		gender: "",
// 	});

// 	const { email, password, fullName, phone, gender } = form;

// 	const addUser = useMutation(async () => {
// 		const config = {
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		};

// 		const body = JSON.stringify({
// 			email,
// 			password,
// 			fullName,
// 			phone,
// 			gender,
// 		});

// 		const response = await API.post("/register", body, config);
// 		return response;
// 	});

// 	// const handleSubmit = () => {
// 	// 	addUser.mutate();
// 	// };

// 	const handleClose = () => {
// 		dispatch({
// 			type: "MODAL_REGISTER_CLOSE",
// 		});
// 	};
// 	const handleOpenLogin = () => {
// 		handleClose();
// 		dispatch({
// 			type: "MODAL_LOGIN_OPEN",
// 		});
// 	};
// 	const handleOpenRegister = () => {
// 		handleClose();
// 		dispatch({
// 			type: "MODAL_REGISTER_OPEN",
// 		});
// 	};
// 	const onChange = (e) => {
// 		setForm({
// 			...form,
// 			[e.target.name]: e.target.value,
// 		});
// 	};

// 	const registerUser = (e) => {
// 		e.preventDefault();
// 		addUser.mutate();

// 		if (addUser.error?.response?.data?.message) {
// 			handleClose();
// 			handleOpenRegister();
// 		}

// 		if (addUser.data?.data) {
// 			setForm({
// 				email: "",
// 				fullName: "",
// 				password: "",
// 				phone: "",
// 				gender: "",
// 			});
// 			dispatch({
// 				type: "LOGIN_SUCCESS",
// 				payload: addUser.data.data.data.user,
// 			});
// 			setAuthToken(addUser.data.data.data.user.token);
// 			router.push("/");
// 			console.log("ok");
// 			handleClose();
// 		}
// 		// console.log("Ass", addUser);
// 		// console.log("Assas", addUser.data.data.data.user);
// 	};
// 	// console.log("register", state);
// 	return (
// 		<Modal show={state.modalRegister} onHide={handleClose} size="sm" centered>
// 			<Modal.Body>
// 				<div className="form-title mb-3">
// 					<h4 className="text-yellow">Register</h4>
// 				</div>
// 				{addUser.error?.response?.data?.message && (
// 					<Alert variant="danger">
// 						{addUser.error?.response?.data?.message}
// 					</Alert>
// 				)}
// 				<div className="d-flex flex-column">
// 					<Form onSubmit={(e) => registerUser(e)}>
// 						<Form.Group controlId="formBasicEmail">
// 							<Form.Control
// 								type="email"
// 								className="form-control input-bg"
// 								placeholder="Email"
// 								value={email}
// 								name="email"
// 								onChange={(e) => onChange(e)}
// 								required
// 							/>
// 						</Form.Group>
// 						<Form.Group controlId="formBasicPassword">
// 							<Form.Control
// 								type="password"
// 								name="password"
// 								value={password}
// 								onChange={(e) => onChange(e)}
// 								className="form-control input-bg"
// 								placeholder="Password"
// 								required
// 							/>
// 						</Form.Group>
// 						<Form.Group>
// 							<Form.Control
// 								type="text"
// 								className="form-control input-bg"
// 								placeholder="Full Name"
// 								name="fullName"
// 								value={fullName}
// 								onChange={(e) => onChange(e)}
// 								required
// 							/>
// 						</Form.Group>
// 						<Form.Group>
// 							<Form.Control
// 								type="text"
// 								className="form-control input-bg"
// 								placeholder="Gender"
// 								name="gender"
// 								value={gender}
// 								onChange={(e) => onChange(e)}
// 								required
// 							/>
// 						</Form.Group>
// 						<Form.Group>
// 							<Form.Control
// 								type="text"
// 								className="form-control input-bg"
// 								placeholder="Phone"
// 								name="phone"
// 								value={phone}
// 								onChange={(e) => onChange(e)}
// 								required
// 							/>
// 						</Form.Group>
// 						{/* <Form.Group>
// 							<Form.Control
// 								as="select"
// 								className="input-bg"
// 								name="type"
// 								onChange={(e) => onChange(e)}
// 								value={form.type}
// 							>
// 								<option value="1">As User</option>
// 								<option value="2">As Partner</option>
// 							</Form.Control>
// 						</Form.Group> */}
// 						<Button
// 							type="submit"
// 							variant="brown"
// 							className="btn btn-block btn-round"
// 							// onClick={registerUser()}
// 						>
// 							Register
// 						</Button>
// 					</Form>
// 					<p className="text-danger">{state.errormail}</p>
// 					<div className="text-center text-muted delimiter mt-2 ">
// 						Already have an account ? klick {"\u00A0"}
// 						<Link
// 							to="#"
// 							onClick={handleOpenLogin}
// 							className="font-weight-bold text-muted"
// 						>
// 							here
// 						</Link>
// 						.
// 					</div>
// 				</div>
// 			</Modal.Body>
// 		</Modal>
// 	);
// }

// export default Register;
