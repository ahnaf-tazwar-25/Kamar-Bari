import React, { Component } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Stack from "@mui/material/Stack";
import "./createFarmer.css";
import axios from "axios";

class CreateFarmer extends React.Component {
    state = {
        dOBSetter: new Date(),
        dOB: null,
        underAge: false,
        gender: "Male",
        farmerID: null,
        name: null,
        farmID: null,
        farmName: null,
        farmLocation: null,
        managerID: null,
        managerName: null,
        startingSalary: null,
        address: null,
        validateIDError: false,
        createdAtSetter: new Date(),
        createdAt: this.dateFormater(new Date()),
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleDOB = (event) => {
        this.setState({ dOBSetter: event, dOB: this.dateFormater(event) });
        this.validateFarmerAge(this.dateFormater(event));
    };

    handleJoiningDate = (event) => {
        this.setState({
            createdAtSetter: event,
            createdAt: this.dateFormater(event),
        });
    };

    dateFormater(date) {
        var today = date;
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0");
        var yyyy = today.getFullYear();
        today = yyyy + "-" + mm + "-" + dd;

        return today;
    }

    handleChangeAndValidate = async (event) => {
        this.setState({ [event.target.name]: event.target.value });
        this.validateFarmerID(event.target.value);
    };

    async validateFarmerID(farmerId) {
        var send = { id: farmerId };

        const res = await axios
            .post("/MANAGER_validateFarmerID", send)
            .then((response) => {
                this.setState({
                    validateIDError: response.data.farmerValidateError,
                });
            });
        // console.log(this.state.validateIDError);
    }
    async validateFarmerAge(farmerAge) {
        var send = { farmerDOB: farmerAge };

        const res = await axios
            .post("/MANAGER_validateFarmerAge", send)
            .then((response) => {
                if (!response.data) {
                    this.setState({ underAge: false });
                } else {
                    this.setState({ underAge: true });
                }
            });
        // console.log(this.state.validateIDError);
    }

    saveFarmer = async (event) => {
        event.preventDefault();

        const res = await axios
            .post("/MANAGER_createFarmer", this.state)
            .then((response) => {
                console.log(response.data.test);
                // console.log("Age: ", response.data.test2);
            });
    };

    async getFarmID() {
        const res = await axios
            .get("/MANAGER_getFarm_n_manager_ID")
            .then((response) => {
                this.setState({
                    farmID: response.data.farmID,
                    farmName: response.data.farmName,
                    farmLocation: response.data.farmLocation,
                    managerID: response.data.managerID,
                    managerName: response.data.managerName,
                });
                // console.log(response.data);
            })
            .catch((error) => {
                alert("Server Error:\n" + error);
            });
    }

    componentDidMount() {
        this.getFarmID();
    }

    render() {
        const farmID = "114501";
        return (
            <div>
                <Container
                    maxWidth="lg"
                    sx={{ height: "auto", bgcolor: "white" }}
                    className="manager-create-order-details"
                >
                    <div className="manager-create-order-header">
                        {/* <AddShoppingCartOutlinedIcon
                            style={{
                                height: 100,
                                width: "min-content",
                                color: "#249c00",
                                marginTop: "2vh",
                            }}
                        /> */}
                        <img
                            src="./images/addFarmer.svg"
                            style={{
                                height: 120,
                                width: "min-content",
                                color: "#230068",
                            }}
                        />
                        <div className="manager-create-order-head-btn">
                            <h1 className="manager-create-order-h1 ml-0">
                                Create New Farmer
                            </h1>
                        </div>
                    </div>
                    <form onSubmit={this.saveFarmer.bind(this)}>
                        <div className="manager-create-order-contents">
                            <div className="manager-row row">
                                <div className="col-2 font-weight-bold mt-3">
                                    Farmer ID:
                                </div>
                                <div className="col-10">
                                    <TextField
                                        required
                                        error={this.state.validateIDError}
                                        id="lName-manager"
                                        type="text"
                                        variant="outlined"
                                        label="Format Starts with Farmar ID"
                                        name="farmerID"
                                        defaultValue=""
                                        onChange={(e) =>
                                            this.handleChangeAndValidate(e)
                                        }
                                        helperText={
                                            this.state.validateIDError
                                                ? "Farmer ID already exists!"
                                                : "Farm ID: " +
                                                  this.state.farmID
                                        }
                                    />
                                </div>
                            </div>
                            <div className="manager-row row">
                                <div className="col-2 font-weight-bold mt-3">
                                    Name:
                                </div>
                                <div className="col-5">
                                    <TextField
                                        required
                                        id="lName-manager"
                                        type="text"
                                        variant="outlined"
                                        label="Full Name"
                                        name="name"
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                </div>
                                <div className="col-1 font-weight-bold mt-3">
                                    Date Of Birth:
                                </div>
                                <div className="col-3">
                                    <LocalizationProvider
                                        dateAdapter={AdapterDateFns}
                                    >
                                        <Stack spacing={3}>
                                            <DesktopDatePicker
                                                required
                                                error={true}
                                                label="Brith Date"
                                                value={this.state.dOBSetter}
                                                maxDate={new Date()}
                                                inputFormat="dd-MMM-yyyy"
                                                onChange={(e) =>
                                                    this.handleDOB(e)
                                                }
                                                // onChange={(newValue) => {
                                                //     this.setState({
                                                //         createdAt: newValue,
                                                //     });
                                                // }}
                                                renderInput={(params) => (
                                                    <TextField {...params} />
                                                )}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </div>
                            </div>

                            <div className="manager-row row">
                                <div className="col-2 font-weight-bold">
                                    Assign To:
                                </div>
                                <div className="col-10 manager-assign">
                                    <div className="col-6 mr-sm-1">
                                        <strong className="h5 font-weight-bold">
                                            Farm
                                        </strong>

                                        <br />
                                        <div className="manager-assign-row row">
                                            <div className="col-2 mt-3">
                                                ID:
                                            </div>
                                            <div className="col-10 mb-2">
                                                <TextField
                                                    disabled
                                                    type="text"
                                                    label={this.state.farmID}
                                                    variant="outlined"
                                                />
                                            </div>
                                        </div>
                                        <div className="manager-assign-row row">
                                            <div className="col-2 mt-3">
                                                Name:
                                            </div>
                                            <div className="col-10  mb-2">
                                                <TextField
                                                    disabled
                                                    type="text"
                                                    label={this.state.farmName}
                                                    variant="outlined"
                                                />
                                            </div>
                                        </div>
                                        <div className="manager-assign-last-row row">
                                            <div className="col-2 mt-3">
                                                Location:
                                            </div>
                                            <div className="col-10">
                                                <TextField
                                                    sx={{ width: 700 }}
                                                    disabled
                                                    type="text"
                                                    label={
                                                        this.state.farmLocation
                                                    }
                                                    variant="outlined"
                                                />
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
                                            <div className="col-2 mt-3">
                                                ID:
                                            </div>
                                            <div className="col-10 mb-2">
                                                <TextField
                                                    disabled
                                                    type="text"
                                                    label={this.state.managerID}
                                                    variant="outlined"
                                                />
                                            </div>
                                        </div>
                                        <div className="manager-assign-row row">
                                            <div className="col-2 mt-3">
                                                Name:
                                            </div>
                                            <div className="col-10 mb-2">
                                                <TextField
                                                    disabled
                                                    type="text"
                                                    label={
                                                        this.state.managerName
                                                    }
                                                    variant="outlined"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="manager-row row">
                                <div className="col-3 font-weight-bold mt-3">
                                    Starting Salary:
                                </div>
                                <div className="col-4">
                                    <FormControl>
                                        <InputLabel id="demo-simple-select-label">
                                            Salary
                                        </InputLabel>
                                        <Select
                                            required
                                            sx={{ minWidth: 150 }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Salary"
                                            value={this.state.startingSalary}
                                            name="startingSalary"
                                            onChange={(e) =>
                                                this.handleChange(e)
                                            }
                                        >
                                            <MenuItem value={2500}>
                                                {2500}
                                            </MenuItem>
                                            <MenuItem value={5000}>
                                                {5000}
                                            </MenuItem>
                                            <MenuItem value={8000}>
                                                {8000}
                                            </MenuItem>
                                            <MenuItem value={12000}>
                                                {12000}
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-1 font-weight-bold mt-3">
                                    Gender:
                                </div>
                                <div className="col-3">
                                    <FormControl>
                                        <InputLabel id="demo-simple-select-label">
                                            Gender
                                        </InputLabel>
                                        <Select
                                            required
                                            sx={{ minWidth: 150 }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Gender"
                                            value={this.state.gender}
                                            name="gender"
                                            onChange={(e) =>
                                                this.handleChange(e)
                                            }
                                        >
                                            <MenuItem value={"Male"}>
                                                {"Male"}
                                            </MenuItem>
                                            <MenuItem value={"Female"}>
                                                {"Female"}
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>

                            <div className="manager-row row">
                                <div className="col-4 font-weight-bold mt-3">
                                    Address:
                                </div>
                                <div className="col-8">
                                    <TextField
                                        required
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        label="Farmer Present Address"
                                        name="address"
                                        valie={this.state.address}
                                        onChange={(e) => this.handleChange(e)}
                                        helperText="Example: 20 Deshi Chickens, 500 Broiler Chicken Eggs"
                                    />
                                </div>
                            </div>

                            <div className="manager-row-create row">
                                <div className="col-4 font-weight-bold mt-3">
                                    Joining Date:
                                </div>
                                <div className="col-8">
                                    <LocalizationProvider
                                        dateAdapter={AdapterDateFns}
                                    >
                                        <Stack spacing={3}>
                                            <DesktopDatePicker
                                                required
                                                label="Joning Date"
                                                value={
                                                    this.state.createdAtSetter
                                                }
                                                name="createdAt"
                                                minDate={new Date()}
                                                inputFormat="dd-MMM-yyyy"
                                                onChange={(e) =>
                                                    this.handleJoiningDate(e)
                                                }
                                                renderInput={(params) => (
                                                    <TextField {...params} />
                                                )}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </div>
                            </div>
                        </div>
                        <div className="text-center w-100 mb-4 font-weight-bold">
                            <Button
                                disabled={
                                    this.state.validateIDError ||
                                    this.state.underAge
                                }
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={{
                                    height: 50,
                                    width: 125,
                                    marginTop: 4,
                                    marginRight: 2,
                                    fontWeight: 600,
                                }}
                                // onClick={() => this.saveFarmer()}
                            >
                                <SaveOutlinedIcon />
                                &nbsp; Save
                            </Button>
                        </div>
                    </form>
                </Container>
            </div>
        );
    }
}

export default CreateFarmer;
