import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import axios from "axios";

export default function Farmers(props) {
    const [farmers, setFarmers] = React.useState([]);
    const [farms, setFarms] = React.useState([]);
    const [farmID, setFarmID] = React.useState([]);

    const columns = [
        { field: "id", headerName: "ID", width: 200 },
        { field: "name", headerName: "Full Name", width: 200 },
        { field: "farmID", headerName: "Farm ID", width: 200 },
        { field: "dOB", headerName: "Date Of Birth", width: 200 },
        { field: "gender", headerName: "Gender", width: 200 },
        { field: "salary", headerName: "Salary in BDT", width: 200 },
        { field: "status", headerName: "Status", width: 200 },
        // {
        //     field: "action",
        //     headerName: "Action",
        //     width: 250,
        //     disableClickEventBubbling: true,
        //     renderCell: (params) => {
        //         return (
        //             <div className="d-flex justify-content-between w-100">
        //                 Loading...
        //                 {/* {!fireLoad && (
        //                     <>
        //                         <button
        //                             onClick={() => {
        //                                 // detailsOnClick(true, params);
        //                             }}
        //                             className="btn btn-success"
        //                         >
        //                             Details
        //                         </button>
        //                     </>
        //                 )} */}
        //             </div>
        //         );
        //     },
        // },
    ];

    async function getUsers(id) {
        var tempArr = [];
        // console.log(id);
        const farmID = { farm_id: id };

        const res = await axios
            .post("/CEO_loadFarmers", farmID)
            .then((response) => {
                // console.log(response.data);
                response.data.farmers.map((user, key) => {
                    // console.log(user);
                    tempArr.push({
                        id: user.id,
                        name: user.name,
                        farmID: user.farmID,
                        dOB: user.dOB,
                        salary: user.salary,
                        section: user.section == "p" ? "Poultry" : "Dairy",
                        status: user.status,
                        gender: user.gender === "m" ? "Male" : "Female",
                    });
                    // setFarmers(old => [...old, tempArr]);
                });
                setFarmers(tempArr);
                // console.log(tempArr);
            });
    }

    async function getFarms() {
        var tempArr = [];

        const res = await axios.get("/CEO_loadFarms").then((response) => {
            // console.log("Inside");
            response.data.farms.map((farm, key) => {
                // console.log(farm.id);
                tempArr.push({
                    id: farm.id,
                    name: farm.name,
                });
                // tempArr.push(<MenuItem value={farm.id}>{farm.id}</MenuItem>);
                // setFarmers(old => [...old, tempArr]);
            });
            setFarms(tempArr);
            // console.log(tempArr);
        });
    }

    React.useEffect(() => {
        setFarmID(props.farmID);
        getUsers(props.farmID);
        getFarms();
    }, []);

    const handleChange = (event) => {
        setFarmID(event.target.value);
        getUsers(event.target.value);
    };

    return (
        <div>
            <br />
            <h1>List of Managers in total Farmers</h1>
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
               
            >
                <FormControl className="w-25 mt-1 mb-5">
                    <InputLabel id="demo-simple-select-label">Farm</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="farmSelect"
                        label="Farm"
                        value={farmID}
                        onChange={handleChange}
                    >
                        {/* <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem> */}

                        {farms.map((farm, key) => (
                            <MenuItem key={key} value={farm.id}>
                                {farm.id + ", " + farm.name}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Farm ID, Farm Name</FormHelperText>
                </FormControl>
            </Grid>

            <DataGrid
                style={{ height: 600, width: "100%" }}
                rows={farmers}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[2]} sx={{bgcolor: "white"}}
            />
        </div>
    );
}
