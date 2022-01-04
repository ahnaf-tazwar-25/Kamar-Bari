import React, { Component } from "react";

import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Container from "@mui/material/Container";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import TextField from "@mui/material/TextField";

import "./farmerDetails.css";
import axios from "axios";

class FarmerDetails extends React.Component {
    state = {
        farmerID: this.props.farmerID,
        name: null,
        salary: this.props.salary,
        farmID: null,
        farmName: null,
        farmLocation: null,
        managerID: null,
        managerName: null,
        joinedAt: null,
        experience: null,
        condition: null,
        incrementTrigger: false,
        incrementSalary: this.props.salary,
    };

    async getFarmers() {
        const send = { farmerID: this.state.farmerID };
        const res = await axios
            .post("/MANAGER_getFarmerDetails", send)
            .then((response) => {
                this.setState({
                    name: response.data.farmer.name,
                    salary: response.data.farmer.salary,
                    condition: response.data.farmer.status,
                    farmID: response.data.farm.id,
                    farmName: response.data.farm.name,
                    farmLocation: response.data.farm.address,
                    managerID: response.data.managerID,
                    managerName: response.data.managerName,
                    joinedAt: "2021-12-01",
                    experience: "2 Years",
                });
            });
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    async incrementSalary() {
        const send = {
            id: this.props.farmerID,
            salary: this.state.incrementSalary,
        };
        const res = await axios
            .post("/MANAGER_incrementFarmerSalary", send)
            .then((response) => {
                console.log(response.data.salary);
                this.setState({
                    incrementTrigger: false,
                    salary: response.data.salary,
                });
            })
            .catch((error) => {
                alert("This was the error:\n" + error);
            });
    }

    componentDidMount() {
        this.getFarmers();
    }

    render() {
        const condition = "success";
        return (
            <div>
                <div className="backBtn">
                    <Button
                        variant="contained"
                        onClick={() => this.props.changeContent(true)}
                        startIcon={<ArrowBackIcon />}
                    >
                        Back
                    </Button>
                </div>
                <Container
                    maxWidth="lg"
                    sx={{ height: "auto", bgcolor: "white" }}
                    className="manager-order-details"
                >
                    <div className="manager-order-header mt-3">
                        <img
                            src="./images/farmer.svg"
                            style={{
                                height: 84,
                                width: "min-content",
                                color: "#230068",
                            }}
                        />
                        <div className="manager-order-head-btn">
                            <h1 className="manager-order-h1">
                                {this.state.name}
                            </h1>
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
                                <ErrorOutlineIcon />
                                &nbsp; Fire
                            </Button>
                        </div>
                    </div>

                    <div className="manager-order-contents">
                        <div className="manager-row row">
                            <div className="col-4 font-weight-bold">
                                Farmer ID:
                            </div>
                            <div className="col-8">{this.state.farmerID}</div>
                        </div>
                        <div className="manager-row row">
                            <div className="col-4 font-weight-bold">
                                Salary:
                            </div>
                            <div className="col-3">
                                {/* {this.state.salary} in BDT */}
                                {this.state.incrementTrigger ? (
                                    <TextField
                                        id="outlined-basic"
                                        label="Farmer Salary"
                                        variant="outlined"
                                        type="number"
                                        name="incrementSalary"
                                        onChange={(e) => this.handleChange(e)}
                                        value={this.state.incrementSalary}
                                        InputProps={{
                                            inputProps: {
                                                min: 0,
                                            },
                                        }}
                                    />
                                ) : (
                                    this.state.salary + "  in BDT"
                                )}
                            </div>
                            <div className="col-3">
                                {this.state.incrementTrigger ? (
                                    <>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className="mr-1 mt-2"
                                            // onClick={() => this.incrementSalary}
                                            onClick={() =>
                                                this.incrementSalary()
                                            }
                                        >
                                            Save
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            className="ml-3 mt-2"
                                            onClick={() =>
                                                this.setState({
                                                    incrementTrigger: false,
                                                })
                                            }
                                        >
                                            Discard
                                        </Button>
                                    </>
                                ) : (
                                    <Button
                                        variant="outlined"
                                        onClick={() =>
                                            this.setState({
                                                incrementTrigger: true,
                                            })
                                        }
                                    >
                                        Increment Salary
                                    </Button>
                                )}

                                {/* <Button
                                    variant="outlined"
                                    // startIcon={<ArrowBackIcon />}
                                >
                                    Increment Salary
                                </Button> */}
                            </div>
                        </div>

                        <div className="manager-row row">
                            <div className="col-4 font-weight-bold">
                                Assign To:
                            </div>
                            <div className="col-8 manager-assign">
                                <div className="col-6 mr-sm-1">
                                    <strong className="h5 font-weight-bold">
                                        {" "}
                                        Farm{" "}
                                    </strong>

                                    <br />
                                    <div className="manager-assign-row row">
                                        <div className="col-5">ID:</div>
                                        <div className="col-7">
                                            {this.state.farmID}
                                        </div>
                                    </div>
                                    <div className="manager-assign-row row">
                                        <div className="col-5">Name:</div>
                                        <div className="col-7">
                                            {this.state.farmName}
                                        </div>
                                    </div>
                                    <div className="manager-assign-last-row row">
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
                                    <div className="manager-assign-row row">
                                        <div className="col-5">ID:</div>
                                        <div className="col-5">
                                            {this.state.managerID}
                                        </div>
                                    </div>
                                    <div className="manager-assign-row row">
                                        <div className="col-5">Name:</div>
                                        <div className="col-5">
                                            {this.state.managerName}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="manager-row row">
                            <div className="col-4 font-weight-bold">
                                Joined At:
                            </div>
                            <div className="col-8">{this.state.joinedAt}</div>
                        </div>

                        <div className="manager-row row">
                            <div className="col-4 font-weight-bold">
                                Experience:
                            </div>
                            <div className="col-8">{this.state.experience}</div>
                        </div>

                        <div className="manager-row row">
                            <div className="col-4 font-weight-bold">
                                Condition:
                            </div>
                            <div
                                className={
                                    "ml-3 mt-1 badge badge-pill badge-" +
                                    condition
                                }
                                style={{ height: "min-content" }}
                            >
                                {this.state.condition}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default FarmerDetails;
