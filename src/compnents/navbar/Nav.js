import { Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import Menu from "../Menu";

import logo from "../assets/img/logo.svg";

const NavbarComponent = () => {
	return (
		<Navbar bg="dark " className="fixed-top bg-yellow">
			<Link to="/">
				<Navbar.Brand to="/" className="title-ways text-brown">
					WaysFood
					<Image src={logo} alt="WF" className="ml-2" />
				</Navbar.Brand>
			</Link>
			<Navbar.Collapse id="basic-navbar-nav" className=""></Navbar.Collapse>
			<Menu />
		</Navbar>
	);
};

export default NavbarComponent;
