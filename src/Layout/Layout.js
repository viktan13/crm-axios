import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {


    return (
        <div className="container">
            <h1>Clients & Orders</h1>
            <hr/>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/orders">Orders</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/clients">Clients</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/services">Services</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/results">Results</Link>
                </li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Layout;