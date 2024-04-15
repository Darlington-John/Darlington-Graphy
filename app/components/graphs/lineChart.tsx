import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "January",
    uv: 0,

  },
  {
    
    uv: 700,

  },
  {
    
    uv: 2000,
  },
  {
    
    uv: 1000,
  },
];

const compData = [
  {
    
    uv: 0,

  },
  {

    uv: 200,

  },
  {

    uv: 500,
  },
  {
    
    uv: 1200,
  },
  {
    
    uv: 1000,

  },
  {
    
    uv: 1300,

  },
  {
    
    uv: 1100,
  },
  {
   
    uv: 1500,
  },
  {
    
    uv: 1400,
  },
  {
   
    uv: 1700,
  },
];

export default function SimpleLineChart() {
  return (
    <div style={{ width: "100%", height: '100%' }} >
      <ResponsiveContainer >
        <AreaChart
          data={data}

        >
          <CartesianGrid strokeDasharray="3"
          stroke="#313131" 
          />
          <XAxis dataKey="name" stroke="#BDBACD" />

          <Tooltip wrapperStyle={{ width: 'auto', color: 'black' }} />
          <Area type="duotone" dataKey="uv" stroke="#F101AA" 
          strokeWidth={2}
          fill="#541C44" />
     
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export  function  CisLineChart() {
  return (
    <div style={{ width: "100%", height: '100%' }} >
      <ResponsiveContainer >
        <AreaChart
          data={compData}

        >
          <CartesianGrid strokeDasharray="3"
          stroke="#313131" 
          />


          <Tooltip wrapperStyle={{ width: 'auto', color: 'black' }} />
          <Area type="duotone" dataKey="uv" stroke="#C5FF55" 
          strokeWidth={2}
          fill="#162F10" />
     
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}