
import { BarChart, Bar, XAxis,  CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useGraph } from '../graphContext';

const data = [
  {
    name: 'January',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feburary',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

export default function BarGraph () {
  const { fillColor} = useGraph();
    return (
      <ResponsiveContainer width="100%" height="100%" >
        <BarChart

          data={data}
        >
          <CartesianGrid strokeDasharray="2"     stroke="#313131"  />
          <XAxis dataKey="name"  fontSize={10}/>
      
          <Tooltip  wrapperStyle={{ width: 'auto',  color: 'black' , fontSize: '12px'}}/>
        
          <Bar dataKey="pv" fill={fillColor}   className='ease-out duration-300'/>
          <Bar dataKey="uv" fill={fillColor}  className='ease-out duration-300'/>
          <Bar dataKey="amt" fill={fillColor}  className='ease-out duration-300'/>
        </BarChart>
      
      </ResponsiveContainer>

    );
  }



  export const ColorPicker = () => {
    const { colors,  fillColor, handleColorChange } = useGraph();
    return (
      <div className='flex items-center justify-between flex-wrap z-20'>
      {colors.map((color, index) => (
        <button
          key={index}
          style={{ backgroundColor: color}}
   className={fillColor === color ? 'border border-2 border-white  rounded-full p-4 2xs:p-2 ' : 'rounded-full p-4 2xs:p-2'}
          onClick={() => handleColorChange(color)}
        >


        </button>
      ))}
    </div>
    );
  };