import React from 'react';
import './LatestOrder.css';

const orders = [
  { id: 1, product: 'Product A', quantity: 10, date: '2024-07-15', status: 'Delivered', totalPayment: '$100' },
  { id: 2, product: 'Product B', quantity: 5, date: '2024-07-14', status: 'Shipped', totalPayment: '$50' },
  { id: 3, product: 'Product C', quantity: 20, date: '2024-07-13', status: 'Processing', totalPayment: '$200' },
  { id: 4, product: 'Product D', quantity: 8, date: '2024-07-15', status: 'Delivered', totalPayment: '$80' },
  { id: 5, product: 'Product E', quantity: 15, date: '2024-07-11', status: 'Cancelled', totalPayment: '$150' },
  { id: 6, product: 'Product F', quantity: 12, date: '2024-07-10', status: 'Delivered', totalPayment: '$120' }
];

export default function LatestOrder() {
  return (
    <div className="latest-order-container">
      <h2 style={{fontSize:"36px"}}>Your Latest Orders</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Date</th>
            {/* <th>Status</th> */}
            <th>Total Payment</th>
          </tr>
        </thead>
        <tbody>
          {orders.slice(0, 6).map(order => (
            <tr key={order.id}>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>{order.date}</td>
              {/* <td>{order.status}</td> */}
              <td>{order.totalPayment}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="more-orders">
        <span>+2 more orders</span>
        <span className="see-full-orders">See Full Orders</span>
      </div>
    </div>
  );
}
