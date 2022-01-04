import React from "react";
import ReactDOM from "react-dom";
import "../bootstrap/app.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Signin from "./Signin";
import SignOut from "./SignOut";
import Default from "./Default";

import Adminhome from "./Admin/adminHome";
import Messages from "./Admin/messages/Messages";
import ManagerHome from "./Manager/ManagerHome";
import ManagerSettings from "./Manager/ManagerSettings";

function Root() {
    // React.useEffect(() => {
    //     getAllContacts();
    // }, []);

    return (
        <>
            <div className="container-fluids">
                <Routes>
                    <Route exact path="/" element={<Default />} />
                    <Route exact path="/signin" element={<Signin />} />
                    <Route exact path="/signout" element={<SignOut />} />

                    {/* <Route exact path="/signin" element={<Test />} /> */}
                    {/* <Route exact path="/test" element={<Test />} /> */}

                    <Route exact path="/ceo" element={<Adminhome />} />
                    <Route exact path="/ceo/messages" element={<Messages />} />
                    <Route exact path="/manager" element={<ManagerHome />} />
                    <Route
                        exact
                        path="/manager/settings"
                        element={<ManagerSettings />}
                    />
                </Routes>
            </div>
        </>
    );
}

export default Root;

// if (document.getElementById("root")) {
//     ReactDOM.render(
//         <Router>
//             <Root />
//         </Router>,
//         document.getElementById("root")
//     );
// }

// function tick() {
ReactDOM.render(
    <Router>
        <Root />
    </Router>,
    document.getElementById("root")
);
// }

// setInterval(tick, 1000);
