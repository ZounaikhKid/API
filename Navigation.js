import React from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavbarBrand bg="light" variant="light">
        <Navbar.Brand href="#home"><Link to='/'>HOME</Link></Navbar.Brand>
      </NavbarBrand>
    </div>
  );
};

export default Navigation;