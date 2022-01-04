import React from "react";
import "./home.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";


const converter = Intl.NumberFormat("en-US");

class Featured extends React.Component {
    state = {
        totalSales: "Loading...",
        totalRevenue: "Loading...",
        totalCosts: "Loading...",
    };

    async getTotalSales() {
        /*
        const res = await axios.get("/CEO_getTotalBudget").then((response) => {
            // console.log(response.data.totalSales);
            const amountInTk = Intl.NumberFormat("en-US");

            let showAmount = amountInTk
                .format(response.data.totalRevenue)
                .split(",");

            if (response.data.totalRevenue.toString().length > 2) {
                showAmount = showAmount[0] + ", " + showAmount[1];
                // console.log(showAmount);
                this.setState({
                    totalRevenue: showAmount,
                });
            } else {
                this.setState({
                    totalRevenue: response.data.totalRevenue,
                });
            }

            if (response.data.totalSales.toString().length > 2) {
                showAmount = amountInTk
                    .format(response.data.totalSales)
                    .split(",");
                showAmount = showAmount[0] + ", " + showAmount[1];
                // console.log(showAmount);
                this.setState({
                    totalSales: showAmount,
                });
            } else {
                this.setState({
                    totalSales: response.data.totalSales,
                });
            }

            if (response.data.totalCosts.toString().length > 2) {
                showAmount = amountInTk
                    .format(response.data.totalCosts)
                    .split(",");
                showAmount = showAmount[0] + ", " + showAmount[1];
                // console.log(showAmount);
                this.setState({
                    totalCosts: showAmount,
                });
            } else {
                this.setState({
                    totalCosts: response.data.totalCosts,
                });
            }
        });

        */
       
        //   fetch("/CEO_getTotalSales").then((response) => {
        //     console.log(response.data.totalSales);
        // });
    }

    componentDidMount() {
        // this.getTotalSales();
    }

    render() {
        // console.log("Props", this.props.featuredData);
        return (
            <div className="featured mobile">
                <div
                    className="featuredItem mobileFeaturedItem"
                    onClick={() => this.props.changeSelector("revenue")}
                >
                    <span className="featuredTitle">Revenue</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">
                            {/* ৳&nbsp;{this.state.totalRevenue} */}
                            ৳&nbsp;
                            {converter
                                .format(this.props.featuredData.currentRevenue)
                                .split(",")[0] +
                                ", " +
                                converter
                                    .format(
                                        this.props.featuredData.currentRevenue
                                    )
                                    .split(",")[1]}
                        </span>
                        <span className="featuredMoneyRate">
                            {Math.abs(this.props.featuredData.changeInRevenue)}%
                            {this.props.featuredData.currentRevenue < 0 && (
                                <ArrowDownward className="featuredIcon decrease" />
                            )}
                            {this.props.featuredData.currentRevenue >= 0 && (
                                <ArrowUpward className="featuredIcon increase" />
                            )}
                        </span>
                    </div>
                    <span className="featuredSub">Comapared to last month</span>
                </div>

                <div
                    className="featuredItem mobileFeaturedItem"
                    onClick={() => this.props.changeSelector("sales")}
                >
                    <span className="featuredTitle">Sales</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">
                            {/* ৳&nbsp;{this.state.totalSales} */}
                            ৳&nbsp;
                            {converter
                                .format(this.props.featuredData.currentSales)
                                .split(",")[0] +
                                ", " +
                                converter
                                    .format(
                                        this.props.featuredData.currentSales
                                    )
                                    .split(",")[1]}
                        </span>
                        <span className="featuredMoneyRate">
                            {Math.abs(this.props.featuredData.changeInSales)}%
                            {this.props.featuredData.changeInSales < 0 && (
                                <ArrowDownward className="featuredIcon decrease" />
                            )}
                            {this.props.featuredData.changeInSales >= 0 && (
                                <ArrowUpward className="featuredIcon increase" />
                            )}
                        </span>
                    </div>
                    <span className="featuredSub">Comapared to last month</span>
                </div>

                <div
                    className="featuredItem mobileFeaturedItem"
                    onClick={() => this.props.changeSelector("cost")}
                >
                    <span className="featuredTitle">Cost</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">
                            {/* ৳&nbsp;{this.state.totalCosts} */}
                            ৳&nbsp;
                            {converter
                                .format(this.props.featuredData.currentCost)
                                .split(",")[0] +
                                ", " +
                                converter
                                    .format(this.props.featuredData.currentCost)
                                    .split(",")[1]}
                        </span>
                        <span className="featuredMoneyRate">
                            {Math.abs(this.props.featuredData.changeInCost)}%
                            {this.props.featuredData.changeInCost < 0 && (
                                <ArrowDownward className="featuredIcon decrease" />
                            )}
                            {this.props.featuredData.changeInCost >= 0 && (
                                <ArrowUpward className="featuredIcon increase" />
                            )}
                        </span>
                    </div>
                    <span className="featuredSub">Comapared to last month</span>
                </div>
            </div>
        );
    }
}

export default Featured;
