import React from 'react';
import './FullfilledOrders.css';

const orders = [
  { id: 1, product: 'Product A', quantity: 10, date: '2024-07-15', status: 'New', totalPayment: 100 },
  { id: 2, product: 'Product B', quantity: 5, date: '2024-07-14', status: 'Urgent', totalPayment: 50 },
  { id: 3, product: 'Product C', quantity: 20, date: '2024-07-13', status: 'New', totalPayment: 200 },
  { id: 4, product: 'Product D', quantity: 8, date: '2024-07-12', status: 'Delivered', totalPayment: 80 },
  { id: 5, product: 'Product E', quantity: 15, date: '2024-07-11', status: 'Urgent', totalPayment: 150 },
  { id: 6, product: 'Product F', quantity: 12, date: '2024-07-10', status: 'Delivered', totalPayment: 120 }
];

export default function FullFilledOrders() {
  const newOrdersCount = orders.filter(order => order.status === 'New').length;
  const urgentOrdersCount = orders.filter(order => order.status === 'Urgent').length;
  const totalPaymentsCount = orders.length;
  const totalPayments = orders.reduce((sum, order) => sum + order.totalPayment, 0);

  return (
    <div className="orders-container">
      <h2>FullFilled Orders</h2>
      
      <table className="order-stats-table">
        <thead>
          <tr>
            <th>New Orders</th>
            <th>Urgent Orders</th>
            <th>Payments Count</th>
            <th>Total Payments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{newOrdersCount}</td>
            <td>{urgentOrdersCount}</td>
            <td>{totalPaymentsCount}</td>
            <td>${totalPayments}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
