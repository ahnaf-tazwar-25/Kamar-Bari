import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import { Home } from "@material-ui/icons";
import FarmDetails from "./FarmDetails";

export default function FarmsFrontPage(props) {
    const [farmDetailsLoad, setFarmDetailsLoad] = useState(false);
    const [farmDetails, setFarmDetails] = useState();

    const columns = [
        { field: "serial", headerName: "Serial", width: 170 },
        { field: "name", headerName: "Name", width: 200 },
        { field: "id", headerName: "ID", width: 200 },
        { field: "managerID", headerName: "Manager ID", width: 200 },
        { field: "address", headerName: "Adress", width: 380 },
        { field: "area", headerName: "Area in sqft", width: 120 },
        { field: "status", headerName: "Status", width: 160 },
        {
            field: "action",
            headerName: "Action",
            width: 120,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                return (
                    <div className="d-flex justify-content-around w-100">
                        {!farmDetailsLoad && (
                            <button
                                onClick={() => {
                                    detailsOnClick(true, params);
                                }}
                                className="btn btn-success h-75 mt-1"
                            >
                                Details
                            </button>
                        )}
                    </div>
                );
            },
        },
    ];

    const detailsOnClick = (val, params) => {
        setFarmDetailsLoad(val);
        setFarmDetails(params);
    };

    const changeFarmID = (id, loader) => {
        props.changeFarmID(id, loader);
    };
const getUsers2 = () =>{
    props.getUsers();
}
    return (
        <div>
            <br />

            <h1 className="text-white font-weight-bold m-2 ml-3 mt-5">
                List of total Farms
            </h1>
            <br />
            <DataGrid
                style={{ height: 400, width: "98%" }}
                rows={props.rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[2]}
                sx={{ bgcolor: "white", ml: 2 }}
            />
            {!farmDetailsLoad ? (
                <div className="add-manager " onClick={() => props.onChange(2)}>
                    <Home
                        style={{ height: 105, width: "35%" }}
                        className="manager-svg"
                    />
                    <h3 className="btn-name">
                        <label>Add Farm</label>
                    </h3>
                </div>
            ) : (
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                    className="mt-0 mb-5"
                >
                    <FarmDetails
                        farmDetails={farmDetails.row}
                        loadDetails={setFarmDetailsLoad}
                        changeFarmID={changeFarmID}
                        getUsers3={getUsers2}
                    />
                </Grid>
            )}
        </div>
    );
}
