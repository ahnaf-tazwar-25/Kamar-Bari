import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import OrdersList from "./ordersList";
import OrderDetails from "./OrderDetails";
import CreateOrder from "./CreateOrder";

import axios from "axios";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs(props) {
    const [value, setValue] = React.useState(0);
    const [loadContent, setLoadContent] = React.useState(0);
    const [orderID, setOrderID] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const changeAchtiveness = (index, e) => {
        setLoadContent(index);
        setOrderID(e);
    };

    React.useEffect(() => {
        // getOrders();
        // console.log(orders);
    }, []);

    return (
        <>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                    >
                        <Tab label="Orders" {...a11yProps(0)} />
                        <Tab label="Create Order" {...a11yProps(1)} />
                    </Tabs>
                </Box>

                <TabPanel value={value} index={0} >
                    {loadContent === 0 && (
                        <OrdersList changeActive={changeAchtiveness} />
                    )}
                    {loadContent === 1 && (
                        <OrderDetails
                            orderID={orderID}
                            changeActive={changeAchtiveness}
                        />
                    )}
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <CreateOrder />
                </TabPanel>
            </Box>
        </>
    );
}
