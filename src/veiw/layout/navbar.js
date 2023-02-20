import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
    return (<>

        <div className="navbar">
            <div className="container">
                <a href=" # " className="logo">Logo</a>

                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
            
                </ul>
            </div>
        </div>

    </>
    );
}

