import { useContext, useState, useEffect } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { API, setAuthToken } from "../config/api";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AuthContext } from "../contexts/authContext";
import { Button, Form, Modal, Alert } from "react-bootstrap";

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(8).required(),
});

function Login(props) {
	const [state, dispatch] = useContext(AuthContext);
	const router = useHistory();

	const handleClose = () => {
		dispatch({
			type: "MODAL_LOGIN_CLOSE",
		});
		state.redirect ? <Redirect to="/" /> : <></>;
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

	const onSubmit = useMutation(async (data) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const body = JSON.stringify({
			email: data.email,
			password: data.password,
		});
		const response = await API.post("/login", body, config);

		console.log("res-akhir", response.data?.data?.user?.token);

		setAuthToken(response.data?.data?.user?.token);
		dispatch({
			type: "LOGIN_SUCCESS",
			payload: response.data?.data?.user,
		});

		router.push("/");
		handleClose();
		reset();
		return response;
	});

	const [visibleAlert, setVisibleAlert] = useState(false);

	useEffect(() => {
		if (onSubmit.error?.response?.data?.message) {
			setVisibleAlert(true);
			setTimeout(() => {
				setVisibleAlert(false);
			}, 4000);
		}
	}, [onSubmit.error?.response?.data?.message]);

	return (
		<Modal
			show={props.show ? props.show : state.modalLogin}
			// onHide={handleClose}
			onHide={props.onHide ? props.onHide : handleClose}
			size="sm"
			centered
			className={state.error ? "error avenir " : "avenir"}
		>
			<Modal.Body>
				<div className="form-title mb-3">
					<h4 className="text-yellow">Login</h4>
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
					<Form onSubmit={handleSubmit(onSubmit.mutate)}>
						<Form.Group controlId="formBasicEmail">
							<Form.Control
								type="email"
								className="form-control input-bg"
								{...register("email")}
								placeholder="Email"
							/>
							<div className="invalid-feedback" style={{ display: "contents" }}>
								{errors.email?.message}
							</div>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Control
								type="password"
								className="form-control input-bg"
								{...register("password")}
								placeholder="Password"
							/>
							<div className="invalid-feedback" style={{ display: "contents" }}>
								{errors.password?.message}
							</div>
						</Form.Group>
						<Button
							type="submit"
							variant="brown"
							className="btn btn-block btn-round"
						>
							Login
						</Button>
					</Form>
					<div className="text-center text-muted delimiter mt-2">
						Don't have an account ? klick
						<Link
							to="#"
							onClick={handleOpenRegister}
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
export default Login;

// import { useContext, useState } from "react";
// import { Link, useHistory, Redirect } from "react-router-dom";
// import { API, setAuthToken } from "../config/api";

// import { AuthContext } from "../contexts/authContext";

// import { Button, Form, Modal, Alert } from "react-bootstrap";

// function Login(props) {
// 	// console.log(props);
// 	const [state, dispatch] = useContext(AuthContext);
// 	const router = useHistory();
// 	const [form, setForm] = useState({
// 		email: "",
// 		password: "",
// 	});
// 	const { email, password } = form;

// 	const handleClose = () => {
// 		dispatch({
// 			type: "MODAL_LOGIN_CLOSE",
// 		});
// 		state.redirect ? <Redirect to="/" /> : <></>;
// 	};
// 	const handleOpenRegister = () => {
// 		handleClose();
// 		dispatch({
// 			type: "MODAL_REGISTER_OPEN",
// 		});
// 	};

// 	const onChange = (e) => {
// 		const updateForm = { ...form };
// 		updateForm[e.target.name] = e.target.value;
// 		setForm(updateForm);
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		handleClose();
// 		try {
// 			const config = {
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 			};

// 			const body = JSON.stringify({
// 				email,
// 				password,
// 			});

// 			const response = await API.post("/login", body, config);

// 			dispatch({
// 				type: "LOGIN_SUCCESS",
// 				payload: response.data.data.user,
// 			});
// 			setForm({
// 				password: "",
// 			});
// 			setAuthToken(response.data.data.user.token);
// 			router.push("/");

// 			//   console.log(response.data);
// 		} catch (err) {
// 			console.log("err", err.response.status.status);
// 			// if (err.response.status === 400) {
// 			// 	alert("sas");
// 			// } else {
// 			// }
// 		}
// 	};
// 	// console.log("login", handleSubmit);
// 	return (
// 		<Modal
// 			// show={state.modalLogin}{modalshow}
// 			show={props.show ? props.show : state.modalLogin}
// 			// onHide={handleClose}
// 			onHide={props.onHide ? props.onHide : handleClose}
// 			size="sm"
// 			centered
// 			className={state.error ? "error avenir " : "avenir"}
// 		>
// 			<Modal.Body>
// 				<div className="form-title mb-3">
// 					<h4 className="text-yellow">Login</h4>
// 				</div>
// 				{/* {addrestaurant.error?.response?.data?.message && ( */}
// 				{/* <Alert variant="danger"> */}
// 				{/* {addrestaurant.error?.response?.data?.message} */}
// 				{/* </Alert> */}
// 				{/* // )} */}
// 				<div className="d-flex flex-column">
// 					<Form onSubmit={(e) => handleSubmit(e)}>
// 						<Form.Group controlId="formBasicEmail">
// 							<Form.Control
// 								value={form.email}
// 								onChange={(e) => onChange(e)}
// 								type="email"
// 								name="email"
// 								className="form-control input-bg"
// 								placeholder="Email"
// 							/>
// 						</Form.Group>

// 						<Form.Group controlId="formBasicPassword">
// 							<Form.Control
// 								value={form.password}
// 								onChange={(e) => onChange(e)}
// 								type="password"
// 								name="password"
// 								className="form-control input-bg"
// 								placeholder="Password"
// 							/>
// 						</Form.Group>
// 						<Button
// 							type="submit"
// 							variant="brown"
// 							className="btn btn-block btn-round"
// 							disabled={!form.email || !form.password ? true : false}
// 						>
// 							Login
// 						</Button>
// 					</Form>
// 					<p className="text-danger">{state.error}</p>
// 					{/* <pre>{JSON.stringify(form, 2, null)}</pre> */}
// 					<div className="text-center text-muted delimiter mt-2">
// 						Don't have an account ? klick
// 						<Link
// 							to="#"
// 							onClick={handleOpenRegister}
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
// export default Login;
