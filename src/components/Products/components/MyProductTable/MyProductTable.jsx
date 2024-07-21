import React, { useState } from 'react';
import './MyProductTable.css'; // Create this CSS file for styling

const products = [
    {
        id: 1,
        name: 'Product 1',
        image: 'https://via.placeholder.com/100', // Replace with actual image URL
        price: '$100',
        svg: '10',
        status: 'Approved',
        date: '2024-07-01',
        issueDescription: 'No issues',
        actionRequired: 'None',
    },
    {
        id: 2,
        name: 'Product 2',
        image: 'https://via.placeholder.com/100', // Replace with actual image URL
        price: '$150',
        svg: '5',
        status: 'Low Stocks',
        date: '2024-06-25',
        issueDescription: 'You Need to Add the Stocks',
        actionRequired: 'Add Stocks',
    },
    {
        id: 3,
        name: 'Product 3',
        image: 'https://via.placeholder.com/100', // Replace with actual image URL
        price: '$200',
        svg: '8',
        status: 'Approved',
        date: '2024-06-20',
        issueDescription: 'No issues',
        actionRequired: 'None',
    },
    {
        id: 4,
        name: 'Product 4',
        image: 'https://via.placeholder.com/100', // Replace with actual image URL
        price: '$250',
        svg: '7',
        status: 'Approval required',
        date: '2024-06-18',
        issueDescription: 'Pending approval',
        actionRequired: 'Submit documents',
    },
    {
        id: 5,
        name: 'Product 5',
        image: 'https://via.placeholder.com/100', // Replace with actual image URL
        price: '$300',
        svg: '12',
        status: 'Approved',
        date: '2024-06-15',
        issueDescription: 'No issues',
        actionRequired: 'None',
    },
    {
        id: 6,
        name: 'Product 6',
        image: 'https://via.placeholder.com/100', // Replace with actual image URL
        price: '$350',
        svg: '4',
        status: 'Approval required',
        date: '2024-06-10',
        issueDescription: 'Pending approval',
        actionRequired: 'Submit documents',
    },
    // Add more products as needed
];

export default function MyProductTable() {
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = products
        .filter(product => filter === 'All' || product.status === filter)
        .filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="product-table-container">
            <div className="header">
                <h2>{filter} Products</h2>
                <button className="add-product-button">Add Product</button>
            </div>
            <nav className="product-nav">
                <div className="filters">
                    <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All</button>
                    <button onClick={() => setFilter('Approved')} className={filter === 'Approved' ? 'active' : ''}>Approved</button>
                    <button onClick={() => setFilter('Low Stocks')} className={filter === 'Low Stocks' ? 'active' : ''}>Low Stocks</button>
                    <button onClick={() => setFilter('Approval required')} className={filter === 'Approval required' ? 'active' : ''}>Approval Required</button>
                </div>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </nav>
            <table className="product-table">
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Last 30 Days Sells</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Issue Description</th>
                        <th>Action Required</th>
                        <th>View Detail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product) => (
                        <tr key={product.id}>
                            <td><input type="checkbox" /></td>
                            <td><img src={product.image} alt={product.name} className="product-image" /></td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.svg}</td>
                            <td>{product.status}</td>
                            <td>{product.date}</td>
                            <td>{product.issueDescription}</td>
                            <td>{product.actionRequired}</td>
                            <td><button className="view-detail-button">View Detail</button></td>
                            <td>
                                <div className="dropdown">
                                    <button className="dropbtn">...</button>
                                    <div className="dropdown-content">
                                        <a href="#">Edit</a>
                                        <a href="#">Delete</a>
                                        <a href="#">View History</a>
                                        <a href="#">Mark as Featured</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
