import { Link } from "react-router-dom";
import { Navbar, Nav} from "react-bootstrap";
import React from "react";

function NavigationBar() {

    return(
        <Navbar className="navbar" expand="lg">
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand> <br />
            <Navbar.Brand as={Link} to="/add-exercise">Add Exercise</Navbar.Brand> <br />
            <Navbar.Brand as={Link} to="/view-exercise">View Exercise</Navbar.Brand> <br />
            <Navbar.Brand as={Link} to="/delete-exercise">Delete Exercise</Navbar.Brand> <br />
        </Navbar>
    );
}

export default NavigationBar;