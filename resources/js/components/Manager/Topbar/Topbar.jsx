import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

import AvatarManager from "./AvatarManager";
import FarmDropDown from "./FarmDropDown";

class Topbar extends React.Component {
    state = {
        activeList: 1,
    };

    changeAchtiveness = (index) => {
        this.setState({ activeList: index });
        this.props.onChange(index);
    };

    componentDidMount(){
        // this.setState({ activeList: this.props.activeContent });
        // console.log(this.props.activeContent);
        // console.log(this.state.activeList);
    }
    render() {
        const { activeList } = this.state;
        const removeUnderline = {
            textDecoration: "none",
            // color: "rgb(0, 168, 8)",
            fontSize: "18px",
        };
        
        return (
            <div className="manager-topbar">
                <div className="manager-topbarWrapper">
                    <div className="manager-topLeft">
                        <Link
                            to="/manager"
                            style={removeUnderline}
                            className="d-flex"
                        >
                            <img
                                style={{
                                    maxHeight: "40px",
                                    marginTop: "0.5vh",
                                }}
                                src="./images/KhamarBariUserLogo.png"
                                alt="Khamar Bari"
                            />
                            <h2 className="kamarbari-logo mt-2">Khamar Bari</h2>
                        </Link>
                    </div>

                    <div className="manager-center-nav">
                        <a
                            className={
                                activeList === 1 && this.props.activeContent != 5
                                    ? "manager-topbarListItem active"
                                    : "manager-topbarListItem"
                            }
                            style={removeUnderline}
                            onClick={() => this.changeAchtiveness(1)}
                        >
                            <span>Status</span>
                        </a>
                        <a
                            className={
                                activeList === 2 || activeList === 5 || this.props.activeContent == 5
                                    ? "manager-topbarListItem active"
                                    : "manager-topbarListItem"
                            }
                            style={removeUnderline}
                            // onClick={() => this.changeAchtiveness(2)}
                        >
                            <span>
                                <FarmDropDown
                                    activeNess={this.changeAchtiveness}
                                />
                            </span>
                        </a>
                        <a
                            className={
                                activeList === 3
                                    ? "manager-topbarListItem active"
                                    : "manager-topbarListItem"
                            }
                            style={removeUnderline}
                            onClick={() => this.changeAchtiveness(3)}
                        >
                            <span>Orders</span>
                        </a>
                        <a
                            className={
                                activeList === 4
                                    ? "manager-topbarListItem active"
                                    : "manager-topbarListItem"
                            }
                            style={removeUnderline}
                            onClick={() => this.changeAchtiveness(4)}
                        >
                            <span>Messeges</span>
                        </a>
                    </div>

                    <AvatarManager />
                </div>
            </div>
        );
    }
}

export default Topbar;
