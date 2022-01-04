import React from "react";
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

import Clock from "./Clock";


class Sidebar extends React.Component {
    state = {
        activeList: 1,
    };

    changeAchtiveness = (index) => {
        this.setState({ activeList: index });
        this.props.onChange(index);
    };

    render() {
        const { activeList } = this.state;
        const removeUnderline = {
            textDecoration: "none",
            color: "inherit",
        };
        return (
            <div className="manager-sidebar" id="sidebar">
                <h1 className="manager-appName">Wellcome to the <br/> Farm, <br/>Ahnaf Tazwar</h1>
                <div className="manager-sidebarWrapper">
                    <div className="manager-sidebarMenu">
                        <h3 className="manager-sidebarTitle">Dashboard </h3>
                        <ul className="manager-sidebarList">
                            {/* <a
                                className={
                                    activeList === 1
                                        ? "manager-sidebarListItem active"
                                        : "manager-sidebarListItem"
                                }
                                style={removeUnderline}
                                onClick={() => this.changeAchtiveness(1)}
                            >
                                <LineStyle className="manager-sidebarIcon" />
                                <span>Status</span>
                            </a>

                            <a
                                className={
                                    activeList === 2
                                        ? "manager-sidebarListItem active"
                                        : "manager-sidebarListItem"
                                }
                                style={removeUnderline}
                                onClick={() => this.changeAchtiveness(2)}
                            >
                                <Timeline className="manager-sidebarIcon" />
                                Animals
                            </a>

                            <a
                                className={
                                    activeList === 3
                                        ? "manager-sidebarListItem active"
                                        : "manager-sidebarListItem"
                                }
                                style={removeUnderline}
                                onClick={() => this.changeAchtiveness(3)}
                            >
                               <ShoppingCartOutlined className="manager-sidebarIcon" />
                                Orders
                            </a>
                            <a
                                className={
                                    activeList === 4
                                        ? "manager-sidebarListItem active"
                                        : "manager-sidebarListItem"
                                }
                                style={removeUnderline}
                                onClick={() => this.changeAchtiveness(4)}
                            >
                                <ForumOutlined className="manager-sidebarIcon" />
                                <span>Messeges</span>
                            </a> */}

                            <Clock />
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
