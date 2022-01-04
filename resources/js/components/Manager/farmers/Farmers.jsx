import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Attendance from "./Attendance";
import FarmersList from "./FarmersList";
import CreateFarmer from "./CreateFarmer";
import Button from "@mui/material/Button";


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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

 

    return (
        <>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        sx={{ bgcolor: "wheat" }}
                    >
                        <Tab label="Attendance" {...a11yProps(0)} />
                        <Tab label="Farmers" {...a11yProps(1)} />
                        <Tab label="Add Farmer" {...a11yProps(2)} />
                    </Tabs>
                </Box>

             

                <TabPanel value={value} index={0} >
                    <Attendance />
                    {/* <div className="row mt-5">
                        <div className="col-2">
                            Total Present Farmers:
                        </div>
                        <div className="col-2">13 out of 20</div> 
                        <div className="col-6">
                            <Button
                                variant="contained"
                                style={{marginBottom: "24vh"}}
                                // onClick={() => changeAchtiveness(1)}
                                // startIcon={<ArrowBackIcon />}
                            >
                                Submit Attendance
                            </Button>
                        </div>
                    </div> */}
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <FarmersList />
                </TabPanel>

                <TabPanel value={value} index={2}>
                    <CreateFarmer />
                </TabPanel>
            </Box>
        </>
    );
}
