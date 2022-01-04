import "./adminProductionChart.css";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
export default function Chart(props) {
    /*  
  const data = [
        {
            name: "Jan",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Feb",
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Mar",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Apr",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "May",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "Jun",
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "Jul",
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: "Aug",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Sep",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "Oct",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "Nov",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Dec",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
    ];
    */
   
    return (
        <div className="chart">
            <h3 className="chartTitle">{props.chartName}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={props.data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <YAxis />
                    <Line type="monotone" dataKey="noOfItem" stroke="#5550bd" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
