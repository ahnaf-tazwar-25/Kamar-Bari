import React, { Component } from "react";
import TableOrders from "./TableOrders";
import OrderCard from "./OrderCard";
import axios from "axios";

class OrdersFrontPage extends React.Component {
    state = {
        loadDashboard: true,
        columnTrigger: false,
        difference: [],
        orderInfo: [],
    };

    changeLoadDashboard = (index) => {
        this.setState({ loadDashboard: index });
    };

    async getOrders() {
        // console.log("Working");
        const res = await axios
            .get("/MANAGER_getOrderInfo")
            .then((response) => {
                // console.log(response.data.orders);
                this.setState({ orderInfo: response.data.orders });
                this.setState({ difference: response.data.difference });
                // console.log(response.data.orders[0].id);
                // console.log(this.state.orderInfo);
            });
    }

    componentDidMount() {
        this.getOrders();
    }

    render() {
        let v = null;
        if (this.state.columnTrigger) {
            v = " flex-column";
        } else {
            v = " ";
        }
        return (
            <div
                className="min-vh-100 container-fluid"
                style={{ marginTop: "5vh" }}
            >
                {/* <div className="d-flex flex-column justify-content-around"> */}
                <div className={"d-flex flex-xl-wrap justify-content-around" + v}>
                    {this.state.orderInfo.map((row, key) => (
                        <>
                            {/* {key % 2 == 0
                                ? this.setState({ columnTrigger: true })
                                : this.setState({ columnTrigger: false })} */}

                            <div key={key} className="ml-5 mt-5">
                                <OrderCard
                                className="w-100"
                                    key={key}
                                    orderInfo={row}
                                    difference={this.state.difference[key]}
                                />
                            </div>
                        </>
                    ))}
                </div>
            </div>
        );
    }
}

export default OrdersFrontPage;
