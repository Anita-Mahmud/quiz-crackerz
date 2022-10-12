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
    Scatter
  } from "recharts";

const Statistics = () => {
    const data = useContext(TopicsContext);
    return (
      <div className='py-20 ml-32'>
          <ComposedChart
          width={1000}
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
      );
    
}

export default Statistics;