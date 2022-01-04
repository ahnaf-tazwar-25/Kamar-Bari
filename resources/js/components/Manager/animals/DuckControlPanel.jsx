import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DuckTable from "./DuckTable";
import EggDuck from "./EggDuck";
import DuckTransfer from "./DuckTransfer";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

    const changeAchtiveness = (index) => {
        // this.setState({ activeList: index });
        props.onChange(index);
    };

    return (
        <Box sx={{ width: "100%", marginBottom: 67 }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider"}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    sx={{ bgcolor: "white" }}
                >
                    <Tab label="Ducks" {...a11yProps(0)} />
                    <Tab label="Duck Eggs" {...a11yProps(1)} />
                    <Tab label="Transfer Ducks" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <div className="backBtn">
                <Button
                    variant="contained"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => changeAchtiveness(1)}
                >
                    Back
                </Button>
            </div>
            <TabPanel value={value} index={0}>
                <DuckTable />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <EggDuck />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <DuckTransfer />
            </TabPanel>
        </Box>
    );
}
