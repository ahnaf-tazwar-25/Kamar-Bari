import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Clock from "./Clock";
import AvatarManager from "./AvatarManager";
import MessagesContents from "../messages/MessagesContents";

export default function Topbar() {
    const removeUnderline = {
        textDecoration: "none",
        color: "rgb(0, 168, 8)",
    };
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link to="/ceo" style={removeUnderline} className="logo">
                        Khamar Bari
                    </Link>
                </div>
                <div className="topMiddle">
                    {/* <Clock /> */}
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <MessagesContents />
                    </div>
                    {/* <div className="mb-0"> */}
                    <AvatarManager />
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}
