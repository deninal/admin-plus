import React from "react";
import "./Chart.css";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Chart1({ title, data, dataKey, grid }) {
  const d = new Date();
  const n = d.getFullYear();

  return (
    <div className="chart">
      <h3>{title}</h3>
      <p className="year">{n}</p>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            {grid && <CartesianGrid stroke="#DDDDDD" />}
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={dataKey} barSize={20} fill="#2360D0" />
            <Line type="monotone" dataKey="Prv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart1;
