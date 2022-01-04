import React, { Component } from "react";

import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";

import "./managerSettings.css";

class ManagerSettings extends React.Component {
    state = {
        loadContents: 0,
    };

    changeLoadContents = (index) => {
        this.setState({ loadContents: index });
    };

    render() {
        const Input = styled("input")({
            display: "none",
        });

        return (
            <div className="w-100">
                <div className="">
                <div className="manager-home-btn">
                    <Button
                        variant="outlined"
                        href="/manager"
                        startIcon={<HomeIcon />}
                        size="large"
                    >
                        Return to Home Page
                    </Button>
                </div>
                <div className="container manager-contents">
                    <div className="mangaer-avatar">
                        <label htmlFor="icon-button-file">
                            <Avatar
                                alt="Ahnaf Tazwar"
                                src="https://www.bootdey.com/img/Content/avatar/avatar7.png"
                                sx={{ width: 180, height: 180 }}
                                className="mangaer-photo"
                            />

                            <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                            />
                            <div className="mangaer-btnCenter" align="center">
                                <Button variant="contained" component="span">
                                    <PhotoCamera />
                                    &nbsp; Upload
                                </Button>
                            </div>
                        </label>
                    </div>
                    <div className="mangaer-infos">
                        {this.state.loadContents === 0 && (
                            <div>
                                <div className="manager-row row">
                                    <div className="col-5 mangaer-field ">
                                        First Name:
                                    </div>
                                    <div className="col-3 mangaer-active">
                                        Ahnaf Tazwar
                                    </div>
                                </div>
                                <div className="manager-row row">
                                    <div className="col-5 mangaer-field ">
                                        Contact Number:
                                    </div>
                                    <div className="col-3 mangaer-active">
                                        01777113225
                                    </div>
                                </div>
                                <div className="manager-row row">
                                    <div className="col-5 mangaer-field ">
                                        Password:
                                    </div>
                                    <div className="col-3 mangaer-active">
                                        ************
                                    </div>
                                    <div className="col-4 mangaer-active">
                                        <Button
                                            variant="contained"
                                            color="success"
                                            onClick={() =>
                                                this.changeLoadContents(1)
                                            }
                                        >
                                            <VpnKeyIcon /> &nbsp; Change
                                            Password
                                        </Button>
                                    </div>
                                </div>
                                <div className="manager-row row">
                                    <div className="col-5 mangaer-field ">Address:</div>
                                    <div className="col-3 mangaer-active">
                                        Keraniganj, Dhaka
                                    </div>
                                </div>
                            </div>
                        )}

                        {this.state.loadContents === 1 && (
                            <div>
                                <div className="manager-row row">
                                    <div className="col-5 mangaer-field ">
                                        Enter Current Password:
                                    </div>
                                    <div className="col-5 mangaer-active">
                                        <TextField
                                            sx={{
                                                width: 500,
                                                maxWidth: "100%",
                                            }}
                                            id="standard-password-input"
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                            variant="outlined"
                                        />
                                    </div>
                                </div>
                                <div className="manager-row row">
                                    <div className="col-5 mangaer-field ">
                                        Enter New Password:
                                    </div>
                                    <div className="col-5 mangaer-active">
                                        <TextField
                                            sx={{
                                                width: 500,
                                                maxWidth: "100%",
                                            }}
                                            id="standard-password-input"
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                            variant="outlined"
                                        />
                                    </div>
                                </div>
                                <div className="manager-row row">
                                    <div className="col-5 mangaer-field ">
                                        Re-Enter New Password:
                                    </div>
                                    <div className="col-5 mangaer-active">
                                        <TextField
                                            sx={{
                                                width: 500,
                                                maxWidth: "100%",
                                            }}
                                            id="standard-password-input"
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                            variant="outlined"
                                        />
                                    </div>
                                </div>
                                <br />
                                <div align="center">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                    >
                                        Save
                                    </Button>
                                    &nbsp; &nbsp; &nbsp;
                                    <Button
                                        variant="contained"
                                        color="error"
                                        size="large"
                                        onClick={() =>
                                            this.changeLoadContents(0)
                                        }
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/*  */}
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default ManagerSettings;
