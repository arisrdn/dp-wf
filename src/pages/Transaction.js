import { AuthContext } from "../contexts/authContext";
import { transaction, order, restaurants } from "../API/Data";
import { useContext, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useMutation, useQuery } from "react-query";
import { API, setAuthToken } from "../config/api";

// IMG
import cancel from "../compnents/assets/img/cancel.svg";
import succes from "../compnents/assets/img/success.svg";
import otw from "../compnents/assets/img/on-time.svg";

const Transaction = () => {
	const [state, dispatch] = useContext(AuthContext);

	const { data, loading, error, refetch } = useQuery("transCache", async () => {
		const response = await API.get("/transactions/restaurant");
		return response;
	});
	const approveTransaction = useMutation(async (id) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const body = JSON.stringify({
			status: "APPROVE",
		});
		await API.put(`/transaction/${id}`, body, config);
		refetch();
	});
	const cancelTransaction = useMutation(async (id) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const body = JSON.stringify({
			status: "CANCEL",
		});
		await API.put(`/transaction/${id}`, body, config);
		refetch();
	});

	const approveById = async (id) => {
		approveTransaction.mutate(id);
	};
	const cancelById = async (id) => {
		cancelTransaction.mutate(id);
	};

	const fetchLocation = async (location) => {
		const token =
			"pk.eyJ1IjoiaWxoYW0yNSIsImEiOiJja20yczc0dm0zOWczMndwMzVmdmJ1bjI4In0.1l2Zgxjy5R0iW2SlySO_fQ";
		const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?limit=1&access_token=${token}`;

		const api = await fetch(apiUrl);
		const response = await api.json();
		const address = response?.features[0]?.place_name;
		return address;
		// setPlace(response?.features[0]?.text);
		// setAddress(response?.features[0]?.place_name);
	};

	// console.log("asas", onMarkerDragEnd)
	useEffect(() => {
		fetchLocation();
	}, []);
	return (
		<>
			<div className="container pt-3">
				<div className="row py-3 mt-3 mt-custom justify-content-center">
					<div className="my-2 col-11 ">
						<div className="mb-4">
							<h2>Income Transaction</h2>
						</div>
						<div className="table-responsive">
							<Table
								style={{ backgroundColor: "white", borderColor: "#828282" }}
								className="overflow-auto  table-hover table-bordered table-bordered-black"
							>
								<thead style={{ backgroundColor: "#E5E5E5" }}>
									<tr>
										<th style={{ width: "" }}>No</th>
										<th style={{ width: "15%" }}>Name</th>
										<th style={{ width: "30%" }}>Address</th>
										<th>Product Order</th>
										<th style={{ width: "15%" }}>Status</th>
										<th style={{ width: "15%" }}>Action</th>
									</tr>
								</thead>
								<tbody>
									{loading ? (
										<tr>
											<td colSpan="4">Loading Data</td>
										</tr>
									) : (
										data?.data?.data?.transactions?.map((trans, index) => (
											<TableRow
												transaction={trans}
												index={index}
												key={trans.id}
												approveById={approveById}
												cancelById={cancelById}
												// address={fetchLocation(trans.locationDelivery)}
											/>
										))
									)}
									{/* ))} */}
								</tbody>
							</Table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Transaction;

const TableRow = ({ transaction, index, cancelById, approveById, address }) => {
	const { userOrder, id, locationDelivery, status, orders } = transaction;
	return (
		<tr>
			<td>{index + 1}</td>
			<td>{userOrder?.fullName}</td>
			<td>
				{locationDelivery}
				{/* {ad} */}
			</td>
			<td>
				<div
					style={{
						width: "200px",
						overflow: "hidden",
						whiteSpace: "nowrap",
						textOverflow: "ellipsis",
					}}
				>
					{orders?.map((order, index) => (
						<>{order.product.tittle},</>
					))}
				</div>
			</td>
			<td>{handleStatus(status)}</td>
			<td className="text-center justify-content-center">
				{status == "Waiting Approve" && (
					<div style={{ display: "flex" }}>
						<>
							<Button
								size="sm2"
								onClick={() => cancelById(id)}
								variant="danger"
								className="mr-0 mr-lg-2"
							>
								Cancel
							</Button>
							<Button
								onClick={() => approveById(id)}
								size="sm2"
								variant="success"
							>
								Approve
							</Button>
						</>
					</div>
				)}
				{handleStatus2(status)}
			</td>
		</tr>
	);
};

const handleStatus = (status) => {
	switch (status) {
		case "Cancel":
			return <p className="text-danger">Cancel</p>;

		case "Waiting Approve":
			return <p className="text-warning">Waiting Approve</p>;

		case "On The Way":
			return <p className="text-info">On The Way</p>;

		case "Success":
			return <p className="text-success">Success</p>;

		default:
			return;
			// <td></td><td></td>
			break;
	}
};
const handleStatus2 = (status) => {
	switch (status) {
		case "Cancel":
			return <img src={cancel} alt="success action" />;

		case "On The Way":
			return <img src={otw} alt="on the way" />;

		case "Success":
			return <img src={succes} alt="success action" />;

		default:
			return;
			// <td></td><td></td>
			break;
	}
};
