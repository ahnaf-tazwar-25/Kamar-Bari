import React, { Component } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import "./orderDetails.css";
import axios from "axios";

class OrderDetails extends React.Component {
    state = {
        farmID: null,
        farmName: null,
        farmLocation: null,
        managerID: null,
        managerName: null,
        animals: null,
        deliveryAddress: null,
        deliveryDate: null,
        createdAt: null,
    };

    // getOrders = () => {
    //     const orderID = { oderID: this.props.orderID };

    //     const res = axios
    //         .post("/CEO_getOrderDetails", orderID)
    //         .then((response) => {
    //             this.setState({ order: response.data });
    //             // console.log(this.state.order.farmDetails.farmName);
    //         });
    // };

    getOrders = async () => {
        const orderID = { oderID: this.props.orderID };

        const res = await axios
            .post("/CEO_getOrderDetails", orderID)
            .then((response) => {
                this.setState({
                    farmID: response.data.farmDetails.farmID,
                    farmName: response.data.farmDetails.farmName,
                    farmLocation: response.data.farmDetails.farmLocation,
                    managerID: response.data.managerDetails.managerID,
                    managerName: response.data.managerDetails.managerName,
                    animals: response.data.orderDetials.orderItems,
                    deliveryAddress: response.data.orderDetials.deliveryAddress,
                    deliveryDate: response.data.orderDetials.deadline,
                    createdAt: response.data.orderDetials.created_at,
                });
            });
        // console.log(this.state.order.farmDetails.farmName);
    };

    async componentDidMount() {
        this.getOrders();
    }

    render() {
        // console.log(this.state.order);
        return (
            <div>
                <Button
                    onClick={() => this.props.changeActive(0)}
                    variant="outlined"
                    size="large"
                >
                    Back
                </Button>
                <Container
                    maxWidth="lg"
                    sx={{ height: "auto", bgcolor: "white" }}
                    className="admin-order-details"
                >
                    <div className="admin-order-header">
                        <LocalShippingOutlinedIcon
                            style={{
                                height: 105,
                                width: "min-content",
                                color: "#230068",
                            }}
                        />
                        <div className="admin-order-head-btn">
                            <h1 className="admin-order-h1">Order Details</h1>
                            <Button
                                onClick={() => this.props.changeActive(0)}
                                variant="contained"
                                color="error"
                                sx={{
                                    height: 1 / 2,
                                    marginTop: 4,
                                    marginRight: 2,
                                }}
                            >
                                <CancelOutlinedIcon />
                                &nbsp; Cancel
                            </Button>
                        </div>
                    </div>

                    <div className="admin-order-contents">
                        <div className="admin-row row">
                            <div className="col-4 font-weight-bold">
                                Order ID:
                            </div>
                            <div className="col-8">{this.props.orderID}</div>
                        </div>

                        <div className="admin-row row">
                            <div className="col-4 font-weight-bold">
                                Assign To:
                            </div>
                            <div className="col-8 admin-assign">
                                <div className="col-6 mr-sm-1">
                                    <strong className="h5 font-weight-bold">
                                        {" "}
                                        Farm{" "}
                                    </strong>

                                    <br />
                                    <div className="admin-assign-row row">
                                        <div className="col-5">ID:</div>
                                        <div className="col-7">
                                            {this.state.farmID}
                                        </div>
                                    </div>
                                    <div className="admin-assign-row row">
                                        <div className="col-5">Name:</div>
                                        <div className="col-7">
                                            {this.state.farmName}
                                        </div>
                                    </div>
                                    <div className="admin-assign-last-row row">
                                        <div className="col-5">Location:</div>
                                        <div className="col-7">
                                            {this.state.farmLocation}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 ml-2">
                                    <strong className="h5 font-weight-bold">
                                        {" "}
                                        Manager{" "}
                                    </strong>

                                    <br />
                                    <div className="admin-assign-row row">
                                        <div className="col-5">ID:</div>
                                        <div className="col-5">
                                            {this.state.managerID}
                                        </div>
                                    </div>
                                    <div className="admin-assign-row row">
                                        <div className="col-5">Name:</div>
                                        <div className="col-5">
                                            {this.state.managerName}
                                        </div>
                                    </div>
                                    <div className="admin-assign-last-row text-center mb-2">
                                        <Button
                                            // onClick={() =>
                                            //     this.props.changeActive(0)
                                            // }
                                            variant="outlined"
                                            size="large"
                                        >
                                            Message
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="admin-row row">
                            <div className="col-4 font-weight-bold ">
                                Animals:
                            </div>
                            <div className="col-8">{this.state.animals}</div>
                        </div>

                        <div className="admin-row row">
                            <div className="col-4 font-weight-bold">
                                Deliver Address:
                            </div>
                            <div className="col-8">
                                {this.state.deliveryAddress}
                            </div>
                        </div>

                        <div className="admin-row row">
                            <div className="col-4 font-weight-bold">
                                Deliver Date:
                            </div>
                            <div className="col-8">
                                {" "}
                                {this.state.deliveryDate}
                            </div>
                        </div>
                        <div className="admin-row row">
                            <div className="col-4 font-weight-bold">
                                Created At:
                            </div>
                            <div className="col-8"> {this.state.createdAt}</div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default OrderDetails;
