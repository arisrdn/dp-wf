import Header from "../../compnents/hero/Header";
import { CardNearyou, CardPopular } from "../../compnents/Card";
import { restaurants } from "../../API/Data";
// import Popular from "../../compnents/card/CardPopular";
import Popular from "../restaurant/Popular";
import Nearyou from "../restaurant/Nearyou";

import { Dropdown } from "react-bootstrap";
// import Dropdowns from "../compnents/Dropdowns";
function Home() {
	return (
		<>
			<Header />
			<div className="container">
				<div style={{ marginTop: "5rem" }}>
					<Popular />
				</div>
				<div style={{ marginTop: "2rem" }}>
					<Nearyou />
				</div>
				{/* <div className="row py-3">
					<div className="my-2 col-12">
						<h2>Restaurant Near You</h2>
					</div>
					{restaurants.map((data) => {
						if (data.popular === false) {
							return <CardNearyou data={data} key={data.id} />;
						}
					})}
				</div> */}
			</div>
		</>
	);
}

export default Home;
