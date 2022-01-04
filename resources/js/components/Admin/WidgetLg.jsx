import "./widgetLg.css";
import React from "react";
import {
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

export default function WidgetLg(props) {
    const data = [
        {
            name: "Sales",
            BDT: props.farmData != null ? props.farmData.sales : 0,
            fill: "#413ea0",
        },
        {
            name: "Cost",
            BDT: props.farmData != null ? props.farmData.cost : 0,
            fill: "#ff7300",
        },
    ];

    return (
        <div className="widgetLg mobilewidgetLg">
            <h3 className="widgetLgTitle">
                Cost vs Revenue of{" "}
                {props.farmData != null && props.farmData.name}{" "}
                {props.farmData == null && "loding..."}
            </h3>
            <ComposedChart
                layout="vertical"
                width={900}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 5,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" scale="band" />
                <Tooltip />
                <Bar dataKey="BDT" barSize={50} />
            </ComposedChart>
        </div>
    );
}
