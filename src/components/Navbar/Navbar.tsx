import React from "react";
import { Link } from "react-router-dom";
import { NavbarContainer } from "./Navbar.styled";

const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/customer">Customer</Link>
                    </li>
                </ul>
            </NavbarContainer>
        </>
    )
};

export default Navbar;