import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({aspect ,title}) {
  const data = [
   {name:"january",total:1200},
   {name:"february",total:2100},
   {name:"march",total:1300},
   {name:"April",total:1800},
   {name:"May",total:900},
   {name:"june",total:1700},
  ];
  return (
    
<div className="chart">
  <div className="title">{title}</div>
 <ResponsiveContainer width="100%" height={325} aspect={aspect}> 
      <AreaChart 
        width={650}
        height={350}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        className="AreaChart"
      >
        <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="gray" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#total)"
        />
       
      </AreaChart>
  </ResponsiveContainer>
</div>
  
  );
}
