import React, { Component } from "react";
import "./production.css";

import ProductionFeatures from "./ProductionFeatures";
import Chart_1 from "./AdminProductionChart";
import BarChart from "./BarChart";
import axios from "axios";

class Production extends React.Component {
    state = {
        loadChart: "",
        firstFeatures: [
            "Total Broiler Chicken Egg Production",
            "Total Deshi Chicken Egg Production",
            "Total Duck Egg Production",
        ],
        animalProducts: ["Eggs", "Eggs", "Eggs"],
        secondFeatures: [
            "Total Broiler Chicken Production",
            "Total Deshi Chicken Production",
            "Total Duck Production",
        ],
        animals: ["Broiler Chickens", "Deshi Chickens", "Ducks"],
        featuredData: {
            current_b_c_e: "Loading...",
            current_d_c_e: "Loading...",
            current_d_e: "Loading...",
            current_b_c: "Loading...",
            current_d_c: "Loading...",
            current_d_d: "Loading...",
            current_b_c_d: "Loading...",

            changeIn_b_c_e: "Loading...",
            changeIn_d_c_e: "Loading...",
            changeIn_d_e: "Loading...",
            changeIn_b_c: "Loading...",
            changeIn_d_c: "Loading...",
            changeIn_d_d: "Loading...",
            changeIn_b_c_d: "Loading...",
        },
        data1: [],
        data2: [],
    };

    getProductionFeaturesValues = async () => {
        await axios.get("/CEO_getProductionFeaturesValues").then((response) => {
            this.setState({
                featuredData: {
                    current_b_c_e: response.data.current_b_c_e,
                    current_d_c_e: response.data.current_d_c_e,
                    current_d_e: response.data.current_d_e,
                    current_b_c: response.data.current_b_c,
                    current_d_c: response.data.current_d_c,
                    current_d_d: response.data.current_d_d,
                    // current_b_c_d: response.data.current_b_c_d,

                    changeIn_b_c_e: response.data.changeIn_b_c_e,
                    changeIn_d_c_e: response.data.changeIn_d_c_e,
                    changeIn_d_e: response.data.changeIn_d_e,
                    changeIn_b_c: response.data.changeIn_b_c,
                    changeIn_d_c: response.data.changeIn_d_c,
                    changeIn_d_d: response.data.changeIn_d_d,
                    // changeIn_b_c_d: response.data.changeIn_b_c_d,
                },
            });
        });
        // console.log(this.state.featuredData);
    };

    changeLoadChart = async (index) => {
        this.setState({ loadChart: index });

        if (index === this.state.loadChart) {
            this.setState({ loadChart: "" });
        } else {
            this.setState({ loadChart: index });
        }
        const send = { analyticsType: index };

        if (index != "") {
            this.setState({ data1: [] });
            console.log(index);
            await axios
                .post("/CEO_loadProductionLineChart", send)
                .then((response) => {
                    this.setState({ data1: response.data.data });
                });
        }
        // console.log(this.state.data1);
    };

    loadBarChart = async () => {
        await axios.get("/CEO_loadProductionBarChart").then((response) => {
            // console.log(response.data.data);
            this.setState({ data2: response.data.data });
        });
    };

    componentDidMount() {
        this.getProductionFeaturesValues();
        this.loadBarChart();
    }

    render() {
        // console.log(this.state.featuredData);
        return (
            <div className="production">
                <ProductionFeatures
                    names={this.state.firstFeatures}
                    secondaryNames={this.state.animalProducts}
                    secondFeatures={this.state.secondFeatures}
                    animals={this.state.animals}
                    onChangeChartIndex={this.changeLoadChart}
                    featuredData={this.state.featuredData}
                />

                <div className="productionChartS">
                    {this.state.loadChart === "b_c_e" && (
                        // <Production />
                        <Chart_1
                            data={this.state.data1}
                            chartName={this.state.firstFeatures[0]}
                        />
                        // <Dashboard value={"Dashboard"} />
                    )}
                    {this.state.loadChart === "d_c_e" && (
                        // <Production />
                        <Chart_1
                            data={this.state.data1}
                            chartName={this.state.firstFeatures[1]}
                        />
                        // <Dashboard value={"Dashboard"} />
                    )}
                    {this.state.loadChart === "d_e" && (
                        // <Production />
                        <Chart_1
                            data={this.state.data1}
                            chartName={this.state.firstFeatures[2]}
                        />
                        // <Dashboard value={"Dashboard"} />
                    )}
                    {this.state.loadChart === "b_c" && (
                        // <Production />
                        <Chart_1
                            data={this.state.data1}
                            chartName={this.state.secondFeatures[0]}
                        />
                        // <Dashboard value={"Dashboard"} />
                    )}
                    {this.state.loadChart === "d_c" && (
                        // <Production />
                        <Chart_1
                            data={this.state.data1}
                            chartName={this.state.secondFeatures[1]}
                        />
                        // <Dashboard value={"Dashboard"} />
                    )}
                    {this.state.loadChart === "d_d" && (
                        // <Production />
                        <Chart_1
                            data={this.state.data1}
                            chartName={this.state.secondFeatures[2]}
                        />
                        // <Dashboard value={"Dashboard"} />
                    )}
                </div>
                <br />
                <BarChart data={this.state.data2} />
            </div>
        );
    }
}

export default Production;
