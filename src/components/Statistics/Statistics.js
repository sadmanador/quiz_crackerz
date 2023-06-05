import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const Statistics = () => {
    const { data } = useLoaderData();
    console.log(data);


    return (
        <div>
            <LineChart width={400} height={350} data={data}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip/>
                <XAxis/>
                <YAxis/>
                <Legend/>
                <XAxis dataKey="name" />
            </LineChart>
        </div>
    );
};

export default Statistics;