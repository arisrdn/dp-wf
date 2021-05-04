import { Modal } from "react-bootstrap";
// import Map from "./Map";
import Map from "./MapsAll";
import { useState, useCallback } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import Pin from "./Pin";

// import ControlPanel from "./control/control-panel";

function ModalMap(props) {
	return (
		<div className="">
			<Modal
				{...props}
				// show
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				// style={}
			>
				<Modal.Header closeButton>
					<Modal.Title>Select Map</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ height: "500px" }}>
					<Map>{props.children}</Map>
				</Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
		</div>
	);
}
export default ModalMap;
