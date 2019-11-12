import React, { useEffect } from "react";
import { Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import Logo from "../../resources/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCookie } from "../../helper/cookie";
import { NavLink } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import { LinkContainer } from "react-router-bootstrap";

import "./style.css";

function Navigation(props) {
  const cartItems = useStoreState(state => state.cart.itemsNum);
  const userName = useStoreState(state => state.user.username);
  const setUserName = useStoreActions(action => action.user.setUserName);

  const handleLogout = async () => {
    const response = await fetch("/logout", {
      method: "POST",
      credentials: "include"
    });
    if (response.ok) {
      setUserName("user");
      // Delete client side cookie
      document.cookie =
        "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  };

  useEffect(() => {
    let name = getCookie("username");
    if (name !== "") {
      setUserName(name);
    } else {
      setUserName("user");
    }
  }, []);

  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand>
        <img className="nav__logo" src={Logo} alt="Tool World" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link as={NavLink} className="nav-link" exact to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} className="nav-link" to="/store">
              Store
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Nav>
          <Nav.Item>
            <Nav.Link as={NavLink} className="nav-link" to="/cart">
              <FontAwesomeIcon
                className="text-muted mr-2"
                icon="shopping-cart"
              />
              <Badge variant="light">{cartItems}</Badge>
            </Nav.Link>
          </Nav.Item>
          <NavDropdown
            title={
              <span>
                <FontAwesomeIcon className="text-muted mr-2" icon="user" />
                {userName}
              </span>
            }
            id="nav__dropdown"
            navbar
            alignRight
            onClick={() => {
              document.getElementById("nav__profile").active = false;
            }}
          >
            <LinkContainer exact to="/profile">
              <NavDropdown.Item
                id="nav__profile"
                className="text-dark"
                active={false}
              >
                Profile
              </NavDropdown.Item>
            </LinkContainer>

            <LinkContainer exact to="/login">
              <NavDropdown.Item
                className="text-dark"
                active={false}
                id="nav__login"
              >
                Login
              </NavDropdown.Item>
            </LinkContainer>

            <LinkContainer exact to="/">
              <NavDropdown.Item
                className="text-dark"
                active={false}
                id="nav__logout"
                onClick={handleLogout}
              >
                Logout
              </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
