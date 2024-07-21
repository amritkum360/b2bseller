import React from 'react';
import './Navbar.css'; // Make sure to create this CSS file

export default function Navbar() {
    return (
        <div className="navbar">
            <img
                src="/logo/bejiness-logo.png" // Replace with your logo URL or local image path
                alt="Logo"
                className="logo"
            />
            <div className="menu">
                <a href="#dashboard" className="menuItem">Dashboard</a>
                <a href="#orders" className="menuItem">Orders</a>
                <a href="#products" className="menuItem">Your Products</a>
                <a href="#insights" className="menuItem">Insights</a>
                <a href="#queries" className="menuItem">Queries</a>
            </div>
        </div>
    );
}
