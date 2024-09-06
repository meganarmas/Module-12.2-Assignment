import { Link } from "react-router-dom";
import { Navbar, Nav} from "react-bootstrap";
import React from "react";

function NavigationBar() {

    return(
        <Navbar className="navbar" expand="lg">
            <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand> <br />
            <Navbar.Brand as={Link} to="/exercise">Exercise</Navbar.Brand> <br />
        </Navbar>
    );
}

export default NavigationBar;