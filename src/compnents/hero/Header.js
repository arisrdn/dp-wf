import pizza from "../assets/img/pizza.svg";
function Header() {
	return (
		<header className="masthead text-brown bg-yellow mt-4">
			<div className="container">
				<div className="row justify-content-md-center ">
					<div className="col-sm-7 pr-0 my-auto">
						<h2 className="masthead-heading ">Are You Hungry ?</h2>
						<h2 className="masthead-heading "> Express Home delivery</h2>
						<div className="px-0 row mt-4">
							<div className="divider-custom col-md-4 mt-3">
								<div className="divider-custom-line"> {""}</div>
							</div>
							<div className="col-md-5 text-left">
								<p className=" masthead-subheading font-weight-light mb-0">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s,
								</p>
							</div>
							<div className="col text-left"></div>
						</div>
					</div>
					<div className="col-sm-5 align-items-center mx-0 px-0 ">
						<img src={pizza} className="pizza ml-0" alt="pizza" />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
