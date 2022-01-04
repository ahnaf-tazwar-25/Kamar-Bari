import React from "react";
import Featured from "./Featured";
import axios from "axios";
import "./dashboard.css";
import Chart from "./charts/Chart";
import WidgetLg from "./WidgetLg";
import WidgetSm from "./WidgetSm";

class Dashboard extends React.Component {
    state = {
        featuredData: {
            currentCost: 0,
            currentSales: 0,
            currentRevenue: 0,
            changeInRevenue: 0,
            changeInSales: 0,
            changeInCost: 0,
        },
        chartSelector: 0,
        farms: Array(),
        managers: Array(),
        lineChartSelector: "",
        amountPerMonth: Array(),
        totalMonths: Array(),
        data: Array(),
    };

    getAllFarmsAndManagers = async () => {
        const res = await axios
            .get("/CEO_getAllManagerNames")
            .then((response) => {
                this.setState({ managers: response.data.managers });
            });

        const res2 = await axios.get("/CEO_loadFarms").then((response) => {
            this.setState({ farms: response.data.farms });
        });
    };

    getFeaturesValues = async () => {
        await axios.get("/CEO_getFeaturesValues").then((response) => {
            this.setState({
                featuredData: {
                    currentCost: response.data.currentCost,
                    currentSales: response.data.currentSales,
                    currentRevenue: response.data.currentRevenue,
                    changeInRevenue: response.data.changeInRevenue,
                    changeInSales: response.data.changeInSales,
                    changeInCost: response.data.changeInCost,
                },
            });
        });
        // console.log(this.state.featuredData);
    };

    setChartSelector = (selector) => {
        this.setState({ chartSelector: selector });
    };

    setLineChartSelector = (selector) => {
        if (selector === this.state.lineChartSelector) {
            this.setState({ lineChartSelector: "" });
        } else {
            this.setState({ lineChartSelector: selector });
        }

        const send = { analyticsType: selector };

        if (selector != this.state.lineChartSelector) {
            this.setState({ data: [] });
            axios.post("/CEO_loadAnalytics", send).then((response) => {
                this.setState({ data: response.data.data });
            });
        }
    };

    componentDidMount = () => {
        this.getAllFarmsAndManagers();
        this.getFeaturesValues();
    };

    render() {
        return (
            <div className="dashboard">
                <Featured featuredData={this.state.featuredData} changeSelector={this.setLineChartSelector} />

                {this.state.lineChartSelector === "revenue" && (
                    <Chart
                        selector="revenue"
                        data={this.state.data}
                        chartName="Revenue"
                    />
                )}
                {this.state.lineChartSelector === "sales" && (
                    <Chart
                        selector={this.state.lineChartSelector}
                        data={this.state.data}
                        chartName="Sales"
                    />
                )}
                {this.state.lineChartSelector === "cost" && (
                    <Chart
                        selector={this.state.lineChartSelector}
                        data={this.state.data}
                        chartName="Cost"
                    />
                )}

                <div className="homeWidgets mobileHomeWidgets">
                    <WidgetSm
                        changeSelector={this.setChartSelector}
                        farms={this.state.farms}
                        managers={this.state.managers}
                    />
                    <WidgetLg
                        farmData={this.state.farms[this.state.chartSelector]}
                    />
                </div>
            </div>
        );
    }
}

export default Dashboard;
