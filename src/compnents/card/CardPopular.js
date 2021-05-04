import { useHistory } from "react-router";
import { Container, Col, Row } from "react-bootstrap";

const CardPopular = (props) => {
	const { name, image, id } = props.data;
	const history = useHistory();
	return (
		<>
			<Col xs={12} md={6} lg={3} className="mb-3">
				<Container>
					<Row
						className="bg-white py-3 "
						style={{ borderRadius: 5, cursor: "pointer", minHeight: "110px" }}
						onClick={() => {
							history.push(`/restaurant/${id}`);
						}}
					>
						<Col xs={3} className="text-center">
							<img
								src={image}
								style={{ width: "65px", height: "65px", objectFit: "cover" }}
								alt={name}
							/>
						</Col>
						<Col xs={9} className="my-auto text-center">
							<h5 className=" my-0 font-weight-bold ">{name}</h5>
						</Col>
					</Row>
				</Container>
			</Col>
		</>
	);
};

export default CardPopular;
