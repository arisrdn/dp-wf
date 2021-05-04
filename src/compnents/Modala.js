import { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { KeranjangContext } from "../contexts/keranjangContext";

import { Alert, Modal } from "react-bootstrap";

function Register() {
	const history = useHistory();
	const [state, dispatch] = useContext(KeranjangContext);
	const handleClose = () => {
		dispatch({
			type: "MODAL_CLOSE",
		});
	};
	const toCart = () => {
		history.push(`/cart`);
		handleClose();
	};
	return (
		<Modal show={state.modal} onHide={handleClose} size="sm" centered>
			{/* <Modal.Header closeButton>Oh snap! You got an error!</Modal.Header> */}
			<Modal.Body>
				<Alert variant="warning">
					<Alert.Heading>Oh snap! You got an error!</Alert.Heading>
					<p>Please empty your cart before changing restaurant</p>
					<Link onClick={toCart}>Click here to see your cart</Link>
				</Alert>
			</Modal.Body>
		</Modal>
	);
}

export default Register;
