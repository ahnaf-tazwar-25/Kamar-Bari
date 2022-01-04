import React, { useState } from "react";
// import { DataGrid } from "@material-ui/data-grid";
import { DataGrid } from "@mui/x-data-grid";
import PersonAddOutlined from "@material-ui/icons/PersonAddOutlined";
import ManagerDetails from "./ManagerDetails";


export default function ManagerFrontPage(props) {
    const [fireLoad, setFireLoad] = useState(false);
    const [userParams, setUserParams] = useState();

    const detailsOnClick = (val, params) => {
        setFireLoad(val);
        setUserParams(params.row);
    };
    const cancelFire = () => {
        setFireLoad(false);
    };
    var columns = [
        { field: "id", headerName: "ID", width: 200 },
        { field: "name", headerName: "Full Name", width: 200 },
        { field: "farmID", headerName: "Farm ID", width: 200 },
        { field: "dOB", headerName: "Date Of Birth", width: 200 },
        { field: "salary", headerName: "Salary in BDT", width: 200 },
        { field: "status", headerName: "Status", width: 200 },
        {
            field: "action",
            headerName: "Action",
            width: 250,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                return (
                    <div className="d-flex justify-content-between w-100">
                        {!fireLoad && (
                            <>
                                <button
                                    onClick={() => {
                                        detailsOnClick(true, params);
                                    }}
                                    className="btn btn-success"
                                >
                                    Details
                                </button>
                            </>
                        )}
                    </div>
                );
            },
        },
    ];

    return (
        <div className="align-items-center">
            <br />

            <h1 className="text-center font-weight-bold text-warning">List of Managers in total Managers</h1>
            <br />
            <DataGrid
                style={{ height: 400, width: "100%" }}
                rows={props.rows}
                // columns={columns()}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[2]}
                disableSelectionOnClick
                rowHeight={65}
                sx={{bgcolor: "white"}}
            />
            {fireLoad ? (
                <ManagerDetails
                    managerParams={userParams}
                    loadAddManager={cancelFire}
                />
            ) : (
                <div className="add-manager " onClick={() => props.onChange(2)}>
                    <PersonAddOutlined
                        style={{ height: 105, width: "35%" }}
                        className="manager-svg"
                    />
                    <h3 className="btn-name">
                        <label>Add Manager</label>
                    </h3>
                </div>
            )}
        </div>
    );
}
