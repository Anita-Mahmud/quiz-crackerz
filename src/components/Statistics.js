import React, { useContext } from 'react';
import { TopicsContext } from './Root';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Scatter
  } from "recharts";

const Statistics = () => {
    const data = useContext(TopicsContext);
    return (
       <div className='my-20 -ml-4 lg:ml-60'>
        <h2 className='text-3xl text-teal-800 font-bold -ml-[96px] mb-10 '>Total Question Chart</h2>
        <div>
        <ComposedChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="total" fill="#8884d8" stroke="#8884d8" />
      </ComposedChart>
        </div>
      
       </div>
        
      );
    
}

export default Statistics;