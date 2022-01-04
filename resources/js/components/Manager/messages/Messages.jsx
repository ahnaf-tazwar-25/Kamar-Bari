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
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import "./messages.css";

var tempArr = [];

class Messages extends React.Component {
    state = {
        msgSelector: 0, //will use props to load all the user here
        managers: [],
        allConversations: [],
        sendConversations: [],
        firstSelected: true,
        firstID: null,
        stopRender: false,
        sendSenderID: null,
    };

    setMsgSelector = (params, managerID) => {
        if (this.state.firstSelected) {
            this.setState({ firstSelected: false });
        }
        if (this.state.msgSelector != params) {
            this.setState({ msgSelector: params, sendSenderID: managerID });
            tempArr = [];
            this.setState({ sendConversations: null });

            this.state.allConversations.map((c, key) => {
                if (c.senderID == managerID || c.receiverID == managerID) {
                    tempArr = [...tempArr, c];
                }
            });
            this.setState({ sendConversations: tempArr });
        }
    };

    async getAllMessages() {
        this.setState({ allConversations: [] });
        const res = await axios
            .get("/MANAGER_getConversationsAll")
            .then((response) => {
                this.setState({
                    allConversations: response.data.conversationsAll,
                });
                // console.log(response.data.conversationsAll);
            })
            .catch((error) => {
                alert("Server Error:\n" + error);
            });
    }

    getFirstConversations() {
        if (this.state.managers.length > 0) {
            this.state.allConversations.map((c, key) => {
                if (
                    c.senderID == this.state.managers[0].id ||
                    c.receiverID == this.state.managers[0].id
                ) {
                    tempArr = [...tempArr, c];
                    // this.setState({sendConversations: [...this.state.sendConversations, c]})
                }
            });
        }
        if (this.state.managers.length > 0 && !this.state.stopRender) {
            this.setState({
                sendConversations: tempArr,
                stopRender: true,
                sendSenderID: this.state.managers[0].id,
            });
        }
    }

    // componentDidCatch
    // componentWillUnmount
    // comop

    async getAllManagers() {
        const res = await axios
            .get("/MANAGER_getManagersAll")
            .then((response) => {
                this.setState({ managers: response.data.managersAll });
                // console.log(response.data.managersAll);
            })
            .catch((error) => {
                alert("Server Error:\n" + error);
            });
    }

    componentDidUpdate() {
        if (this.state.firstSelected) {
            this.getFirstConversations();
        }
    }

    componentDidMount() {
        this.getAllMessages();
        this.getAllManagers();
        // setInterval(() => this.getAllMessages(), 1000);
    }

    render() {
        return (
            <>
                <div className="manager-messages">
                    <div className="manager-userList">
                        <h2>Managers</h2>
                        <div className="manager-userListItems">
                            <List>
                                {this.state.managers.map((manager, key) => (
                                    <ListItem disablePadding key={key}>
                                        <ListItemButton
                                            sx={{ my: 1 }}
                                            disableGutters
                                            key={key + 1}
                                            selected={
                                                this.state.msgSelector === key
                                            }
                                            onClick={() =>
                                                this.setMsgSelector(
                                                    key,
                                                    manager.id
                                                )
                                            }
                                        >
                                            <ListItemIcon key={key + 2}>
                                                <Avatar
                                                    key={key + 3}
                                                    alt="Travis Howard"
                                                    src="https://mui.com/static/images/avatar/2.jpg"
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                key={key + 4}
                                                primary={manager.name}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    </div>

                    <div className="manager-convs-text">
                        <ScrollToBottom
                            initialScrollBehavior="auto"
                            className="manager-conversations"
                        >
                            <Conversations
                                selectedVal={
                                    this.state.firstSelected
                                        ? tempArr
                                        : this.state.sendConversations
                                }
                                sendID={this.state.sendSenderID}
                            />
                            {/* {setInterval(
                                () => (
                                    <Conversations
                                        selectedVal={
                                            this.state.firstSelected
                                                ? tempArr
                                                : this.state.sendConversations
                                        }
                                        sendID={this.state.sendSenderID}
                                    />
                                ),
                                1000
                            )} */}
                        </ScrollToBottom>

                        <div className="manager-send-text">
                            <div className="manager-sendText">
                                <div className="manager-text">
                                    <TextField
                                        sx={{ width: "165ch" }}
                                        id="outlined-basic"
                                        label="Write Something"
                                        variant="outlined"
                                        name="text"
                                    />
                                </div>
                            </div>
                            <div className="manager-sendBtn">
                                <Button
                                    variant="contained"
                                    size="large"
                                    endIcon={<SendIcon />}
                                >
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
