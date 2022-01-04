import React, { Component } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Stack from "@mui/material/Stack";
import "./createOrder.css";

class CreateOrder extends React.Component {
    state = {
        age: null,
        orderID: null,
        farmName: null,
        farmLocation: null,
        managerID: null,
        managerName: null,
        deliveryDate: new Date(),
        createdAt: new Date(),
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div>
                <Container
                    maxWidth="lg"
                    sx={{ height: "auto", bgcolor: "white" }}
                    className="admin-create-order-details"
                >
                    <div className="admin-create-order-header">
                        <AddShoppingCartOutlinedIcon
                            style={{
                                height: 100,
                                width: "min-content",
                                color: "#249c00",
                                marginTop: "2vh",
                            }}
                        />
                        <div className="admin-create-order-head-btn">
                            <h1 className="admin-create-order-h1">
                                New Order
                            </h1>
                        </div>
                    </div>

                    <div className="admin-create-order-contents">
                        <div className="admin-row row">
                            <div className="col-2 font-weight-bold mt-3">
                                Order ID:
                            </div>
                            <div className="col-10">
                                <TextField
                                    required
                                    id="lName-manager"
                                    type="text"
                                    variant="outlined"
                                    label="Format Starts with delivery ZIP code"
                                    name="orderID"
                                    defaultValue=""
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </div>
                        </div>

                        <div className="admin-row row">
                            <div className="col-2 font-weight-bold">
                                Assign To:
                            </div>
                            <div className="col-10 admin-assign">
                                <div className="col-6 mr-sm-1">
                                    <strong className="h5 font-weight-bold">
                                        Farm
                                    </strong>

                                    <br />
                                    <div className="admin-assign-row row">
                                        <div className="col-2 mt-3">ID:</div>
                                        <div className="col-10 mb-2">
                                            <FormControl>
                                                <InputLabel id="demo-simple-select-label">
                                                    Farm ID
                                                </InputLabel>
                                                <Select
                                                    sx={{ minWidth: 150 }}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Farm ID"
                                                    value={this.state.age}
                                                    name="age"
                                                    onChange={(e) =>
                                                        this.handleChange(e)
                                                    }
                                                >
                                                    <MenuItem value={3214654}>
                                                        {3214654}
                                                    </MenuItem>
                                                    <MenuItem value={5647126}>
                                                        {5647126}
                                                    </MenuItem>
                                                    <MenuItem value={1021871}>
                                                        {1021871}
                                                    </MenuItem>
                                                    <MenuItem value={7641987}>
                                                        {7641987}
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div className="admin-assign-row row">
                                        <div className="col-2 mt-3">Name:</div>
                                        <div className="col-10  mb-2">
                                            <TextField
                                                disabled
                                                id="lName-manager"
                                                type="text"
                                                variant="outlined"
                                                label="Select Farm ID to Load"
                                                name="farmName"
                                                defaultValue="Example: Kazi Farms"
                                                onChange={(e) =>
                                                    this.handleChange(e)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="admin-assign-last-row row">
                                        <div className="col-2 mt-3">Location:</div>
                                        <div className="col-10">
                                            <TextField
                                                disabled
                                                id="lName-manager"
                                                type="text"
                                                variant="outlined"
                                                label="Select Farm ID to Load"
                                                name="farmLocation"
                                                defaultValue="Example: Kazi Farms Kitchen,Savar, Savar"
                                                onChange={(e) =>
                                                    this.handleChange(e)
                                                }
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
                                    <div className="admin-assign-row row">
                                        <div className="col-2 mt-3">ID:</div>
                                        <div className="col-10 mb-2">
                                            <FormControl>
                                                <InputLabel id="demo-simple-select-label">
                                                    Manager ID
                                                </InputLabel>
                                                <Select
                                                    sx={{ minWidth: 150 }}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Manager ID"
                                                    value={this.state.age}
                                                    name="managerID"
                                                    onChange={(e) =>
                                                        this.handleChange(e)
                                                    }
                                                >
                                                    <MenuItem value={3214654}>
                                                        {3214654}
                                                    </MenuItem>
                                                    <MenuItem value={5647126}>
                                                        {5647126}
                                                    </MenuItem>
                                                    <MenuItem value={1021871}>
                                                        {1021871}
                                                    </MenuItem>
                                                    <MenuItem value={7641987}>
                                                        {7641987}
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div className="admin-assign-row row">
                                        <div className="col-2 mt-3">Name:</div>
                                        <div className="col-10 mb-2">
                                            <TextField
                                                disabled
                                                id="lName-manager"
                                                type="text"
                                                variant="outlined"
                                                label="Select Manager ID to Name"
                                                name="managerName"
                                                defaultValue="Example: Karim Mahmud"
                                                onChange={(e) =>
                                                    this.handleChange(e)
                                                }
                                            />
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
                            <div className="col-4 font-weight-bold mt-3">
                                Animals:
                            </div>
                            <div className="col-8">
                                <TextField
                                    required
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    label="Total Animals"
                                    name="managerName"
                                    defaultValue=""
                                    onChange={(e) => this.handleChange(e)}
                                    helperText="Example: 20 Deshi Chickens, 500 Broiler Chicken Eggs"
                                />
                            </div>
                        </div>

                        <div className="admin-row row">
                            <div className="col-4 font-weight-bold mt-3">
                                Deliver Address:
                            </div>
                            <div className="col-8">
                                <TextField
                                    required
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    label="Total Animals"
                                    name="managerName"
                                    defaultValue=""
                                    onChange={(e) => this.handleChange(e)}
                                    helperText="Example: BTMC Bhaban, 7-9 Kawran Bazar, Dhaka-1215"
                                />
                            </div>
                        </div>

                        <div className="admin-row row">
                            <div className="col-4 font-weight-bold mt-3">
                                Deliver Date:
                            </div>
                            <div className="col-8">
                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <Stack spacing={3}>
                                        <DesktopDatePicker
                                            label="Delivery Date"
                                            value={this.state.deliveryDate}
                                            name="deliveryDate"
                                            minDate={new Date()}
                                            inputFormat="dd-MMM-yyyy"
                                            onChange={(newValue) => {
                                                this.setState({
                                                    deliveryDate: newValue,
                                                });
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    helperText="04-Dec-2021"
                                                />
                                            )}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div className="admin-row-create row">
                            <div className="col-4 font-weight-bold mt-3">
                                Created At:
                            </div>
                            <div className="col-8">
                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <Stack spacing={3}>
                                        <DesktopDatePicker
                                        disabled
                                            label="Today's Date"
                                            value={this.state.createdAt}
                                            name="createdAt"
                                            minDate={new Date()}
                                            inputFormat="dd-MMM-yyyy"
                                            onChange={(newValue) => {
                                                this.setState({
                                                    createdAt: newValue,
                                                });
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                />
                                            )}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </div>
                        </div>
                    </div>
                    <div className="text-center w-100 mb-4 font-weight-bold">
                        <Button
                            // onClick={() => this.props.changeActive(0)}
                            variant="contained"
                            color="primary"
                            sx={{
                                height: 50,
                                width: 125,
                                marginTop: 4,
                                marginRight: 2,
                                fontWeight: 600,
                            }}
                        >
                            <SaveOutlinedIcon />
                            &nbsp; Save
                        </Button>
                    </div>
                </Container>
            </div>
        );
    }
}

export default CreateOrder;
