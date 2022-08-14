import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className = "App-header" >
            <Link to="/" > <button class="btn btn-outline-success" >Home</button> </Link>
            <Link to="/login"> <button class="btn btn-outline-success" >Login</button> </Link>
            <Link to="/signout"> <button class="btn btn-outline-danger">Signout</button> </Link>
        </div>
    )
}

export default Navbar;