import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  // CartesianGrid,
  Tooltip,
  Legend,
  // ResponsiveContainer,
} from "recharts";
import "./style.css";


const lineChartData = [
  {
    name: "Jan",
    amt: 20,
  },
  {
    name: "Feb",
    amt: 10,
  },
  {
    name: "Mar",
    amt: 30,
  },
  {
    name: "Apr",
    amt: 45,
  },
  {
    name: "May",
    amt: 15,
  },
  {
    name: "Jun",
    amt: 90,
  },
  {
    name: "Jul",
    amt: 60,
  },
  {
    name: "Aug",
    amt: 5,
  },
  {
    name: "Sep",
    amt: 30,
  },
  {
    name: "Oct",
    amt: 80,
  },
  {
    name: "Nov",
    amt: 100,
  },
  {
    name: "Dec",
    amt: 10,
  },
];

const Wallet = () => {
  return (
    <div className="wallet-section">
      <h1>Wallet</h1>
      <div className="w-full">
        <h4>Money Spent Over Time </h4>
        <LineChart
          width={1000}
          height={250}
          data={lineChartData}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amt" stroke="#59D4E9" />
        </LineChart>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Wallet;
