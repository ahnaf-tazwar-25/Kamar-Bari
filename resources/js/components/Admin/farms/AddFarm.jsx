import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import Button from "@material-ui/core/Button";
import axios from "axios";

import "./farmsFrontPage.css";

class FarmsFrontPage extends React.Component {
    state = {
        error: false,
        id: "",
        name: "",
        type: "",
        area: "",
        address: "",
        validateID: false,

        _token: $('meta[name="csrf-token"]').attr("content"),
    };

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        this.validateID(event.target.value);
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const res = await axios
            .post("/CEO_createFarm", this.state)
            .then((response) => {
                if (response.data.farmValidateError) {
                    console.log(response.data);
                    this.setState({ validateID: true });
                    // console.log("Working");
                    // this.getAllContacts();
                    // this.props.navigate("/ceo");
                } else {
                    // console.log(response.data);
                    console.log("Invalid Credensials");
                }
            })
            .catch((error) => {
                alert("This was the error:\n" + error);
            });
    };

    validateID = async (val) => {
        const sendVal = {
            id: val,
        };
        const res = await axios
            .post("/CEO_validateFarmID", sendVal)
            .then((response) => {
                if (response.data.farmValidateError) {
                    this.setState({ validateID: true });
                } else {
                    this.setState({ validateID: false });
                }
            })
            .catch((error) => {
                alert("This was the error:\n" + error);
            });
    };

    render() {
        return (
            <>
                <Button onClick={() => this.props.onChange(1)} variant="text">
                    Back
                </Button>
                <div className="text-center mt-5">
                    <h1 className="text-white font-weight-bold">Create a new Farm</h1>
                </div>
                <div className="form">
                    <h1 className="text-center">New Farm</h1>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="row r1">
                            <TextField
                                // helperText={this.state.helperText}
                                required
                                className="field"
                                variant="outlined"
                                label="ID"
                                name="id"
                                defaultValue=""
                                onChange={(e) => this.handleChange(e)}
                                error={this.state.validateID}
                                helperText={
                                    this.state.validateID
                                        ? "Farm ID already exists"
                                        : "Enter a unique Farm ID"
                                }
                            />
                            <TextField
                                required
                                type="text"
                                // helperText="Date Of Birth"
                                variant="outlined"
                                label="Farm Name"
                                name="name"
                                defaultValue=""
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="row r2">
                            <FormControl>
                                <InputLabel id="type">Farm Type</InputLabel>
                                <Select
                                    required
                                    variant="outlined"
                                    labelId="type"
                                    id="gender-manager"
                                    value={this.state.gender}
                                    name="type"
                                    label="Farm Type"
                                    onChange={(e) => this.handleChange(e)}
                                >
                                    <MenuItem value={"p"}>
                                        Poultry Farm
                                    </MenuItem>
                                    {/* <MenuItem value={"d"}>Dairy Farm</MenuItem> */}
                                </Select>
                            </FormControl>
                            <TextField
                                required
                                InputProps={{ inputProps: { min: 0 } }}
                                type="number"
                                variant="outlined"
                                label="Area in Sqare Foot"
                                name="area"
                                defaultValue=""
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="row r3">
                            <TextField
                                required
                                fullWidth
                                type="text"
                                variant="outlined"
                                label="Address"
                                name="address"
                                defaultValue=""
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="row r4">
                            {/* <FormControl>
                                <InputLabel id="managerID">
                                    Assign Manager
                                </InputLabel>
                                <Select
                                    required
                                    variant="outlined"
                                    labelId="managerID"
                                    id="farmID-manager"
                                    value={this.state.farmID}
                                    name="managerID"
                                    label="Assign Manager"
                                    onChange={(e) => this.handleChange(e)}
                                >
                                    {this.props.managersList.map((manager) => (
                                        <MenuItem value={manager}>
                                            {manager}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl> */}

                            {/* <TextField
                                required
                                type="number"
                                InputProps={{ inputProps: { min: 0 } }}
                                variant="outlined"
                                label="Total Farmers"
                                name="totalFarmers"
                                defaultValue=""
                                onChange={(e) => this.handleChange(e)}
                            /> */}
                        </div>
                        <div className="row r6">
                            <Button
                                disabled={this.state.validateID}
                                type="submit"
                                variant="outlined"
                                color="primary"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default FarmsFrontPage;
