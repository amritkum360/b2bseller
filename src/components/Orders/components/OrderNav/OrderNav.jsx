

import React from 'react';

export default function OrderNav() {
    return (
        <div className="navbar">
           
            <div className="menu">
                <a href="#dashboard" className="menuItem">All Orders</a>
                <a href="#orders" className="menuItem">Orders</a>
                <a href="#products" className="menuItem">Your Products</a>
                <a href="#insights" className="menuItem">Insights</a>
                <a href="#queries" className="menuItem">Queries</a>
            </div>
        </div>
    );
}
