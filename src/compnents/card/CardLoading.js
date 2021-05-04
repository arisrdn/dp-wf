import { Container, Col, Row } from "react-bootstrap";
import loader from "./assets/loader.svg";
// import loadertext from "./assets/loadertext.svg";
import "./assets/loading.css";

export const PopularLoading = (props) => {
	return (
		<>
			<Col xs={12} md={6} lg={3} className="mb-3">
				<Container>
					<Row
						className="bg-white py-3 "
						style={{ borderRadius: 5, cursor: "pointer", minHeight: "110px" }}
					>
						<Col xs={3} className="text-center">
							<img
								src={loader}
								style={{ width: "65px", height: "65px", objectFit: "cover" }}
							/>
						</Col>
						<Col xs={9} className="my-auto text-center">
							<h5 className=" my-0 font-weight-bold ">LOADING...</h5>
						</Col>
					</Row>
				</Container>
			</Col>
		</>
	);
};

export const TextLoading = () => {
	return (
		<div id="fountainTextG">
			<div id="fountainTextG_1" class="fountainTextG">
				L
			</div>
			<div id="fountainTextG_2" class="fountainTextG">
				o
			</div>
			<div id="fountainTextG_3" class="fountainTextG">
				a
			</div>
			<div id="fountainTextG_4" class="fountainTextG">
				d
			</div>
			<div id="fountainTextG_5" class="fountainTextG">
				i
			</div>
			<div id="fountainTextG_6" class="fountainTextG">
				n
			</div>
			<div id="fountainTextG_7" class="fountainTextG">
				g
			</div>
			<div id="fountainTextG_8" class="fountainTextG">
				.
			</div>
			<div id="fountainTextG_9" class="fountainTextG">
				.
			</div>
			<div id="fountainTextG_10" class="fountainTextG">
				.
			</div>
		</div>
	);
};
