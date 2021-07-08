import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { lineChartData, piedata, topicsWatchedData } from "./chartMockData";
import "./style.css";


const Wallet = () => {
  return (
    <div className="wallet-section">
      <h1>Wallet</h1>
      <div className="w-full mb-40 neumorphism">
        <h4>Money Spent Over Time </h4>
        <ResponsiveContainer width="100%" height={230}>
          <LineChart
            width={1000}
            height={250}
            data={lineChartData}
            margin={{ top: 10, right: 10, left: -30, bottom: 5 }}
          >
            <XAxis dataKey="name" tickLine={false} />
            <YAxis tickLine={false} interval={0} />
            <Tooltip />
            <Legend />
            <Line type="linear" dataKey="amt" stroke="#59D4E9" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex">
        <div className="time-spent-section neumorphism">
          <h4>Time Spent on Video</h4>
          <PieChart width={300} height={250}>
            <Pie
              data={piedata}
              dataKey="value"
              nameKey="name"
              cx="150"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </div>
        <div className="watched-topics-section neumorphism">
          <h4>Topics Watched</h4>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={530}
              height={300}
              data={topicsWatchedData}
              margin={{
                top: 5,
                right: 30,
                left: 5,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip wrapperClassName="custom-tooltip" />
              <Legend />
              <Bar dataKey="watched" fill="#8884d8" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
