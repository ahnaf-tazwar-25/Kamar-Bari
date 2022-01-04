import * as React from "react";
import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";

export default function WidgetSm(props) {
    
    return (
        <div className="widgetSm mobileWidgetSm">
            <span className="widgetSmTitle">All Poultry Farms</span>

            <br />
            <ul className="widgetSmList">
                {props.farms.map((farm, key) => (
                    <li  key={farm.id} className="widgetSmListItem">
                        <div key={farm.id + 1} className="widgetSmUser">
                            <span key={farm.id + 2} className="widgetSmUsername">
                                {farm.name}
                            </span>
                            <span key={farm.id + 3} className="widgetSmUserTitle">
                                Manager: {props.managers[key].name}
                            </span>
                        </div>
                        <button key={farm.id + 4} className="widgetSmButton"
                        onClick={() => props.changeSelector(key)}>
                            <Visibility />
                            &nbsp; Display
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    );
}
