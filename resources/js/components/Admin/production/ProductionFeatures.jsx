import React, { Component } from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./productionFeatures.css";

const converter = Intl.NumberFormat("en-US");

class ProductionFeatures extends React.Component {
    state = {
        active: 9,
        activeChart: 0,
    };
    switchChart = (index, selector) => {
        if (this.state.active == index) {
            this.props.onChangeChartIndex("");
            this.setState({ active: 9, activeChart: 0 });
        } else {
            this.setState({ active: index, activeChart: index });
            this.props.onChangeChartIndex(selector);
        }
    };
    render() {
        // console.log(this.props.featuredData);
        return (
            <>
                <div className="pFeatured pMobile mt-5">
                    <div
                        className={
                            this.state.activeChart === 1
                                ? "productionFItem pMobileFItem pActiveF"
                                : "productionFItem pMobileFItem"
                        }
                        onClick={() => this.switchChart(1, "b_c_e")}
                    >
                        <span className="pFeaturedTitle">
                            {this.props.names[0]}
                        </span>
                        <br />
                        <span className="pScale">
                            {this.props.secondaryNames[0]}
                        </span>
                        <div className="pFeaturedMoneyContainer">
                            <span className="pFeaturedMoney">
                                {converter
                                    .format(
                                        this.props.featuredData.current_b_c_e
                                    )
                                    .split(",").length > 1
                                    ? converter
                                          .format(
                                              this.props.featuredData
                                                  .current_b_c_e
                                          )
                                          .split(",")[0] +
                                      ", " +
                                      converter
                                          .format(
                                              this.props.featuredData
                                                  .current_b_c_e
                                          )
                                          .split(",")[1]
                                    : this.props.featuredData.current_b_c_e}
                            </span>
                            <span className="pFeaturedMoneyRate">
                                {Math.abs(
                                    this.props.featuredData.changeIn_b_c_e
                                )}
                                %
                                {this.props.featuredData.changeIn_b_c_e < 0 && (
                                    <ArrowDownward className="featuredIcon decrease" />
                                )}
                                {this.props.featuredData.changeIn_b_c_e >=
                                    0 && (
                                    <ArrowUpward className="featuredIcon increase" />
                                )}
                            </span>
                        </div>
                        <span className="pFeaturedSub">
                            Comapared to last month
                        </span>
                    </div>

                    <div
                        className={
                            this.state.activeChart === 2
                                ? "productionFItem pMobileFItem pActiveF"
                                : "productionFItem pMobileFItem"
                        }
                        onClick={() => this.switchChart(2, "d_c_e")}
                    >
                        <span className="pFeaturedTitle">
                            {this.props.names[1]}
                        </span>
                        <br />
                        <span className="pScale">
                            {this.props.secondaryNames[1]}
                        </span>
                        <div className="pFeaturedMoneyContainer">
                            <span className="pFeaturedMoney">
                                {converter
                                    .format(
                                        this.props.featuredData.current_d_c_e
                                    )
                                    .split(",").length > 1
                                    ? converter
                                          .format(
                                              this.props.featuredData
                                                  .current_d_c_e
                                          )
                                          .split(",")[0] +
                                      ", " +
                                      converter
                                          .format(
                                              this.props.featuredData
                                                  .current_d_c_e
                                          )
                                          .split(",")[1]
                                    : this.props.featuredData.current_d_c_e}
                            </span>
                            <span className="pFeaturedMoneyRate">
                                {Math.abs(
                                    this.props.featuredData.changeIn_d_c_e
                                )}
                                %
                                {this.props.featuredData.changeIn_d_c_e < 0 && (
                                    <ArrowDownward className="featuredIcon decrease" />
                                )}
                                {this.props.featuredData.changeIn_d_c_e >=
                                    0 && (
                                    <ArrowUpward className="featuredIcon increase" />
                                )}
                            </span>
                        </div>
                        <span className="pFeaturedSub">
                            Comapared to last month
                        </span>
                    </div>

                    <div
                        className={
                            this.state.activeChart === 3
                                ? "productionFItem mr-5 pMobileFItem pActiveF"
                                : "productionFItem mr-5 pMobileFItem"
                        }
                        onClick={() => this.switchChart(3, "d_e")}
                    >
                        <span className="pFeaturedTitle">
                            {this.props.names[2]}
                        </span>
                        <br />
                        <span className="pScale">
                            {this.props.secondaryNames[2]}
                        </span>
                        <div className="pFeaturedMoneyContainer">
                            <span className="pFeaturedMoney">
                                {converter
                                    .format(this.props.featuredData.current_d_e)
                                    .split(",").length > 1
                                    ? converter
                                          .format(
                                              this.props.featuredData
                                                  .current_d_e
                                          )
                                          .split(",")[0] +
                                      ", " +
                                      converter
                                          .format(
                                              this.props.featuredData
                                                  .current_d_e
                                          )
                                          .split(",")[1]
                                    : this.props.featuredData.current_d_e}
                            </span>
                            <span className="pFeaturedMoneyRate">
                                {Math.abs(this.props.featuredData.changeIn_d_e)}
                                %
                                {this.props.featuredData.changeIn_d_e < 0 && (
                                    <ArrowDownward className="featuredIcon decrease" />
                                )}
                                {this.props.featuredData.changeIn_d_e >= 0 && (
                                    <ArrowUpward className="featuredIcon increase" />
                                )}
                            </span>
                        </div>
                        <span className="pFeaturedSub">
                            Comapared to last month
                        </span>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="pFeatured pMobile mt-5">
                    <div
                        className={
                            this.state.activeChart === 4
                                ? "productionFItem pMobileFItem pActiveF"
                                : "productionFItem pMobileFItem"
                        }
                        onClick={() => this.switchChart(4, "b_c")}
                    >
                        <span className="pFeaturedTitle">
                            {this.props.secondFeatures[0]}
                        </span>
                        <br />
                        <span className="pScale">{this.props.animals[0]}</span>
                        <div className="pFeaturedMoneyContainer">
                            <span className="pFeaturedMoney">
                                {converter
                                    .format(this.props.featuredData.current_b_c)
                                    .split(",").length > 1
                                    ? converter
                                          .format(
                                              this.props.featuredData
                                                  .current_b_c
                                          )
                                          .split(",")[0] +
                                      ", " +
                                      converter
                                          .format(
                                              this.props.featuredData
                                                  .current_b_c
                                          )
                                          .split(",")[1]
                                    : this.props.featuredData.current_b_c}
                            </span>
                            <span className="pFeaturedMoneyRate">
                                {Math.abs(this.props.featuredData.changeIn_b_c)}
                                {this.props.featuredData.changeIn_b_c < 0 && (
                                    <ArrowDownward className="featuredIcon decrease" />
                                )}
                                {this.props.featuredData.changeIn_b_c >= 0 && (
                                    <ArrowUpward className="featuredIcon increase" />
                                )}
                                %
                            </span>
                        </div>
                        <span className="pFeaturedSub">
                            Comapared to last month
                        </span>
                    </div>

                    <div
                        className={
                            this.state.activeChart === 5
                                ? "productionFItem pMobileFItem pActiveF"
                                : "productionFItem pMobileFItem"
                        }
                        onClick={() => this.switchChart(5, "d_c")}
                    >
                        <span className="pFeaturedTitle">
                            {this.props.secondFeatures[1]}
                        </span>
                        <br />
                        <span className="pScale">{this.props.animals[1]}</span>
                        <div className="pFeaturedMoneyContainer">
                            <span className="pFeaturedMoney">
                                {converter
                                    .format(this.props.featuredData.current_d_c)
                                    .split(",").length > 1
                                    ? converter
                                          .format(
                                              this.props.featuredData
                                                  .current_d_c
                                          )
                                          .split(",")[0] +
                                      ", " +
                                      converter
                                          .format(
                                              this.props.featuredData
                                                  .current_d_c
                                          )
                                          .split(",")[1]
                                    : this.props.featuredData.current_d_c}
                            </span>
                            <span className="pFeaturedMoneyRate">
                                {Math.abs(this.props.featuredData.changeIn_d_c)}
                                %
                                {this.props.featuredData.changeIn_d_c < 0 && (
                                    <ArrowDownward className="featuredIcon decrease" />
                                )}
                                {this.props.featuredData.changeIn_d_c >= 0 && (
                                    <ArrowUpward className="featuredIcon increase" />
                                )}
                            </span>
                        </div>
                        <span className="pFeaturedSub">
                            Comapared to last month
                        </span>
                    </div>

                    <div
                        className={
                            this.state.activeChart === 6
                                ? "productionFItem mr-5 pMobileFItem pActiveF"
                                : "productionFItem mr-5 pMobileFItem"
                        }
                        onClick={() => this.switchChart(6, "d_d")}
                    >
                        <span className="pFeaturedTitle">
                            {this.props.secondFeatures[2]}
                        </span>
                        <br />
                        <span className="pScale">{this.props.animals[2]}</span>
                        <div className="pFeaturedMoneyContainer">
                            <span className="pFeaturedMoney">
                                {converter
                                    .format(this.props.featuredData.current_d_d)
                                    .split(",").length > 1
                                    ? converter
                                          .format(
                                              this.props.featuredData
                                                  .current_d_d
                                          )
                                          .split(",")[0] +
                                      ", " +
                                      converter
                                          .format(
                                              this.props.featuredData
                                                  .current_d_d
                                          )
                                          .split(",")[1]
                                    : this.props.featuredData.current_d_d}
                            </span>
                            <span className="pFeaturedMoneyRate">
                                {Math.abs(this.props.featuredData.changeIn_d_d)}
                                %
                                {this.props.featuredData.changeIn_d_d < 0 && (
                                    <ArrowDownward className="featuredIcon decrease" />
                                )}
                                {this.props.featuredData.changeIn_d_d >= 0 && (
                                    <ArrowUpward className="featuredIcon increase" />
                                )}
                            </span>
                        </div>
                        <span className="pFeaturedSub">
                            Comapared to last month
                        </span>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductionFeatures;
