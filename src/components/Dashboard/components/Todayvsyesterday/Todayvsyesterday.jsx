import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import './TodayVsYesterday.css';

const data = [
  { name: 'Car Toy', yesterday: 4, today: 26 },
  { name: 'Dolls', yesterday: 7, today: 9 },
  { name: 'Black Shoes', yesterday: 2, today: 3 },
  { name: 'Sport Shoes', yesterday: 5, today: 4 }
];

export default function TodayVsYesterday() {
  return (
    <div className="chart-container">
      <h2 style={{fontSize:"25px"}}>Yesterday VS Today Sales</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="yesterday" fill="#6CE5E8" />
          <Bar dataKey="today" fill="#41B8D5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
