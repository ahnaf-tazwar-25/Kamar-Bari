import React from "react";
// import axios from "axios";

import "./sidebar.css";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    Person,
    Home,
    AndroidOutlined,
    ShoppingCartOutlined,
    MailOutline,
    Equalizer,
    ForumOutlined,
    Group,
} from "@material-ui/icons";

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import { Link } from "react-router-dom";

class Sidebar extends React.Component {
    state = {
        activeList: this.props.dashVal,
        ceoName: null,
    };

    changeAchtiveness = (index) => {
        this.setState({ activeList: index });
        this.props.onChange(index);
    };
    

    async getCEOName (){
        const url = "/CEO_getName";
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.user);
        this.setState({ceoName: data.user})
    }

    async componentDidMount (){
        this.getCEOName();
    }

    render() {
        const { activeList } = this.state;
        const removeUnderline = {
            textDecoration: "none",
            color: "inherit",
        };

        return (
            <div className="sidebar" id="sidebar">
                <h1 className="appName p-4 font-weight-bold">{this.state.ceoName}</h1>
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Dashboard </h3>
                        <ul className="sidebarList">
                            <a
                                className={
                                    activeList === 1
                                        ? "sidebarListItem active"
                                        : "sidebarListItem"
                                }
                                style={removeUnderline}
                                onClick={() => this.changeAchtiveness(1)}
                            >
                                <LineStyle className="sidebarIcon" />
                                <span>Home</span>
                            </a>

                            <a
                                className={
                                    activeList === 2
                                        ? "sidebarListItem active"
                                        : "sidebarListItem"
                                }
                                style={removeUnderline}
                                onClick={() => this.changeAchtiveness(2)}
                            >
                                <Timeline className="sidebarIcon" />
                                Production
                            </a>

                            <a
                                className={
                                    activeList === 3
                                        ? "sidebarListItem active"
                                        : "sidebarListItem"
                                }
                                style={removeUnderline}
                                onClick={() => this.changeAchtiveness(3)}
                            >
                                <AttachMoneyIcon className="sidebarIcon" />
                                Animal Prices
                            </a>
                            {/* <a
                                className={
                                    activeList === 7
                                        ? "sidebarListItem active"
                                        : "sidebarListItem"
                                }
                                style={removeUnderline}
                                onClick={() => this.changeAchtiveness(7)}
                            >
                                <Equalizer className="sidebarIcon" />
                                Reports
                            </a> */}
                        </ul>
                    </div>

                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Quick Menu </h3>
                        <ul className="sidebarList">
                            <a
                                className={
                                    activeList === 4
                                        ? "sidebarListItem active"
                                        : "sidebarListItem"
                                }
                                style={removeUnderline}
                                onClick={() => this.changeAchtiveness(4)}
                            >
                                <Person className="sidebarIcon" />
                                <span>Managers</span>
                            </a>

                            <a
                                className={
                                    activeList === 5 || this.props.dashVal === 5
                                        ? "sidebarListItem active"
                                        : "sidebarListItem"
                                }
                                style={removeUnderline}
                                onClick={() => this.changeAchtiveness(5)}
                            >
                                <Group className="sidebarIcon" />
                                Farmers
                            </a>

                            <a
                                className={
                                    activeList === 6 && this.props.dashVal != 5
                                        ? "sidebarListItem active"
                                        : "sidebarListItem"
                                }
                                style={removeUnderline}
                                onClick={() => this.changeAchtiveness(6)}
                            >
                                <Home className="sidebarIcon" />
                                Farms
                            </a>

                            {/* <a
                                className={
                                    activeList === 7
                                        ? "sidebarListItem active"
                                        : "sidebarListItem"
                                }
                                style={removeUnderline}
                                onClick={() => this.changeAchtiveness(7)}
                            >
                                <Equalizer className="sidebarIcon" />
                                Reports
                            </a> */}
                        </ul>
                    </div>

                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Notifiactions </h3>
                        <ul className="sidebarList">
                            <a
                                className={
                                    activeList === 8
                                        ? "sidebarListItem active"
                                        : "sidebarListItem"
                                }
                                style={removeUnderline}
                                href="/ceo/messages"
                                onClick={() => this.changeAchtiveness(8)}
                            >
                                <ForumOutlined className="sidebarIcon" />
                                Messages
                            </a>
                            <a
                                className={
                                    activeList === 9
                                        ? "sidebarListItem active"
                                        : "sidebarListItem"
                                }
                                style={removeUnderline}
                                onClick={() => this.changeAchtiveness(9)}
                            >
                               <ShoppingCartOutlined className="sidebarIcon" />
                                Orders
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
