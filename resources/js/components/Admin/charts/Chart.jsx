import "./charts.css";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function Chart(props) {
  // const data = props.data;

    return (
        <div className="chart">
            <h3 className="chartTitle">{props.chartName} Anaytic</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={props.data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <YAxis />
                    <Line type="monotone" dataKey="BDT" stroke="#5550bd" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
