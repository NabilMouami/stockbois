import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import axios from "axios"
export const Linechart = () => {
    const [factures, setFactures] = useState([]);
    console.log(factures)
    useEffect(() => {
      axios.get("http://localhost:8080/api/v1/factures").then((res) => {
        setFactures(res.data);
      });
    }, []);

    const pdata = [
        {
          name: 'Python',
          student: 13,
          fees: 10
        },
        {
          name: 'Javascript',
          student: 15,
          fees: 12
        },
        {
          name: 'PHP',
          student: 5,
          fees: 10
        },
        {
          name: 'Java',
          student: 10,
          fees: 5
        },
        {
          name: 'C#',
          student: 9,
          fees: 4
        },
        {
          name: 'C++',
          student: 10,
          fees: 8
        },
      ];
  return (
    <div>
        <h1 className="chart-heading">Line Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={factures} width={500} height={300} margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" interval={'preserveStartEnd'} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
          <Legend />
          <Line type="monotone" dataKey="totalprix" stroke="red" activeDot={{ r: 8}} />
          <Line type="monotone" dataKey="quantity" stroke="green" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}
