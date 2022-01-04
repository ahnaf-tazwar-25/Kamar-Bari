import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/" className="title d-flex">
                <img
                    style={{ maxHeight: "50px" }}
                    src="./images/logo.png"
                    alt="Khamar Bari"
                />
                <h2 className="font-weight-bold mt-2">Khamar Bari</h2>
            </Link>
            <a href="/signin" className="btn btn-primary">
                Sign In
            </a>
        </div>
    );
}
