import React, { Component } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Conversations from "./Conversations";
import ScrollToBottom from "react-scroll-to-bottom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import "./messages.css";

class Messages extends React.Component {
    state = {
        msgSelector: 1, //will use props to load all the user here
    };

    setMsgSelector = (params) => {
        this.setState({ msgSelector: params });
    };
    render() {
        return (
            <>
                <div className="ceo-messages">

                    <div className="ceo-userList">
                        <div className="ceo-userListItems">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        selected={this.state.msgSelector === 1}
                                        onClick={() => this.setMsgSelector(1)}
                                    >
                                        <ListItemIcon>
                                            <Avatar
                                                alt="Cindy Baker"
                                                src="https://mui.com/static/images/avatar/3.jpg"
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary="Cindy Baker" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        selected={this.state.msgSelector === 2}
                                        onClick={() => this.setMsgSelector(2)}
                                    >
                                        <ListItemIcon>
                                            <Avatar
                                                alt="Travis Howard"
                                                src="https://mui.com/static/images/avatar/2.jpg"
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary="Travis Howard" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </div>

                        <div className="btn">
                            <Button
                                variant="outlined"
                                href="/ceo"
                                startIcon={<HomeIcon />}
                                size="large"
                            >
                                Return to Home Page
                            </Button>
                        </div>

                    </div>

                    <div className="ceo-convs-text">
                        <ScrollToBottom
                            initialScrollBehavior="auto"
                            className="ceo-conversations"
                        >
                            <Conversations />
                        </ScrollToBottom>

                        <div className="ceo-send-text">
                            <div className="ceo-sendText">
                                <div className="ceo-text">
                                    <TextField
                                        sx={{ width: "165ch" }}
                                        id="outlined-basic"
                                        label="Write Something"
                                        variant="outlined"
                                        name="text"
                                    />
                                </div>
                            </div>
                            <div className="ceo-sendBtn">
                                <Button variant="contained" size="large">
                                    Send
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Messages;
