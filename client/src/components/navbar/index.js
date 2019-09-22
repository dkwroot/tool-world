import React from "react";
import { Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import Logo from "../../resources/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCookie } from "../../helper/cookie";
import { serverURL } from "../../constants/constants";
import { withRouter, Link } from "react-router-dom";
import { useStoreState } from "easy-peasy";

import "./style.css";

function Navigation(props) {
	const cartItems = useStoreState(state => state.cart.itemsNum);

	const handleSelect = async eventKey => {
		switch (eventKey) {
			case "login":
				props.history.push("/login");
				break;
			case "register":
				props.history.push("/register");
				break;
			case "profile":
				props.history.push("/profile");
				break;
			case "logout":
				const response = await fetch(serverURL + "/logout", {
					method: "POST",
					credentials: "include"
				});
				if (response.ok) {
					document.cookie =
						"username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
					props.history.push("/");
				}
				break;
			default:
				break;
		}
	};

	const userDisplay = () => {
		let username = getCookie("username");
		if (username === "") {
			username = "user";
		}
		return <span>{username}</span>;
	};

	return (
		<Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
			<Navbar.Brand>
				<img className="nav__logo" src={Logo} alt="Tool World" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Link tag={Nav.Link} className="nav-link" to="/">
						<Nav.Item>Home</Nav.Item>
					</Link>

					<Link tag={Nav.Link} className="nav-link" to="/store">
						<Nav.Item>Store</Nav.Item>
					</Link>
				</Nav>

				<Nav>
					<Link tag={Nav.Link} className="nav-link" to="/cart">
						<FontAwesomeIcon className="text-muted" icon="shopping-cart" />{" "}
						<Badge variant="light">{cartItems}</Badge>
					</Link>
					<NavDropdown
						title={
							<span>
								<FontAwesomeIcon className="text-muted mr-2" icon="user" />
								{userDisplay()}
							</span>
						}
						id="nav__dropdown"
						navbar
					>
						<NavDropdown.Item
							active={false}
							onSelect={handleSelect}
							eventKey="profile"
						>
							Profile
						</NavDropdown.Item>
						<NavDropdown.Item
							active={false}
							onSelect={handleSelect}
							eventKey="login"
						>
							Login
						</NavDropdown.Item>
						<NavDropdown.Item
							active={false}
							onSelect={handleSelect}
							eventKey="register"
						>
							Register
						</NavDropdown.Item>

						<NavDropdown.Item
							active={false}
							onSelect={handleSelect}
							eventKey="logout"
						>
							Logout
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default withRouter(Navigation);
