import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import Button from "@mui/material/Button";
import "./addManager.css";

class AddManager extends React.Component {
    state = {
        error: false,
        id: "",
        password: "",
        fName: "",
        lName: "",
        dOB: "",
        gender: "",
        farmID: "",
        status: "",
        salary: "",
        error: false,
        _token: $('meta[name="csrf-token"]').attr("content"),
    };

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        this.validateID(event.target.value);
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const res = await axios
            .post("/CEO_createManager", this.state)
            .then((response) => {
                console.log(response.data.managerValidate);
                this.setState({ error: response.data.managerValidate });
                if (response.data.managerValidate) {
                    console.log(response.data);
                    // console.log("Working");
                    // this.getAllContacts();
                    // this.props.navigate("/ceo");
                } else {
                    console.log("Invalid Credensials");
                }
            })
            .catch((error) => {
                console.log(response.data);
                alert("This was the error:\n" + error);
            });
    };

    validateID = async (val) => {
        const sendVal = {
            id: val,
        };
        const res = await axios
            .post("/CEO_validateManagerID", sendVal)
            .then((response) => {
                // console.log(response.data.managerValidateError);
                if (response.data.managerValidateError) {
                    this.setState({ error: true });
                } else {
                    this.setState({ error: false });
                }
            })
            .catch((error) => {
                alert("This was the error:\n" + error);
            });
    };

    render() {
        return (
            <>
                <Button
                    onClick={() => this.props.onChange(1)}
                    variant="contained"
                    sx={{ m: 4, px: 2 }}
                >
                    Back
                </Button>
                {/* <Button variant="contained">Contained</Button> */}
                <div className="text-center text-warning">
                    <h1 className="font-weight-bold">
                        Create a Manager Account
                    </h1>
                </div>
                <div className="form mt-1">
                    <h1 className="text-center">Farm Manager</h1>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="row r1">
                            {this.state.error}
                            <TextField
                                // helperText={this.state.helperText}
                                required
                                error={this.state.error}
                                helperText={
                                    this.state.error
                                        ? "Manager ID already exists"
                                        : "Enter Unique Manager ID"
                                }
                                className="field"
                                variant="outlined"
                                label="ID"
                                name="id"
                                defaultValue=""
                                onChange={(e) => this.handleChange(e)}
                            />
                            <TextField
                                required
                                type="password"
                                // helperText="Date Of Birth"
                                variant="outlined"
                                label="Password"
                                name="password"
                                defaultValue=""
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="row r2">
                            <TextField
                                // helperText={this.state.helperText}
                                required
                                id="fName-manager"
                                variant="outlined"
                                label="First Name"
                                name="fName"
                                defaultValue=""
                                onChange={(e) => this.handleChange(e)}
                            />
                            <TextField
                                required
                                id="lName-manager"
                                // helperText="Date Of Birth"
                                variant="outlined"
                                label="Last Name"
                                name="lName"
                                defaultValue=""
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="row r3">
                            <TextField
                                required
                                type="date"
                                variant="outlined"
                                helperText="Date Of Birth"
                                name="dOB"
                                defaultValue=""
                                onChange={(e) => this.handleChange(e)}
                            />
                            <FormControl>
                                <InputLabel id="gender">Gender</InputLabel>
                                <Select
                                    required
                                    variant="outlined"
                                    labelId="gender"
                                    id="gender-manager"
                                    value={this.state.gender}
                                    name="gender"
                                    label="Gender"
                                    onChange={(e) => this.handleChange(e)}
                                >
                                    <MenuItem value={"m"}>Male</MenuItem>
                                    <MenuItem value={"f"}>Female</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="row r4">
                            <FormControl>
                                <InputLabel id="farmID">Farm ID</InputLabel>
                                <Select
                                    required
                                    variant="outlined"
                                    labelId="farmID"
                                    id="farmID-manager"
                                    value={this.state.farmID}
                                    name="farmID"
                                    label="Farm ID"
                                    onChange={(e) => this.handleChange(e)}
                                >
                                    {this.props.farms.map((farm) => (
                                        <MenuItem value={farm}>{farm}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl>
                                <InputLabel id="satus">Status</InputLabel>
                                <Select
                                    required
                                    variant="outlined"
                                    labelId="satus"
                                    id="satus-manager"
                                    value={this.state.status}
                                    name="status"
                                    label="Status"
                                    onChange={(e) => this.handleChange(e)}
                                >
                                    <MenuItem value={"Active"}>Active</MenuItem>
                                    <MenuItem value={"In-Leave"}>
                                        In-Leave
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="row r5">
                            <TextField
                                required
                                type="number"
                                InputProps={{ inputProps: { min: 0 } }}
                                variant="outlined"
                                label="Starting Salary in BDT"
                                name="salary"
                                defaultValue=""
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="row r6">
                            <Button
                                disabled={this.state.error}
                                type="submit"
                                variant="outlined"
                                color="primary"
                                startIcon={<NoteAddIcon />}
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

export default AddManager;
