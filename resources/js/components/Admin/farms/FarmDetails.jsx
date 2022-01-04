import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Grid from "@mui/material/Grid";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

export default function BasicCard(props) {
    const [deactivate, setDeactivate] = useState(false);
    const [costValue, setCostValue] = useState(props.farmDetails.cost);
    const [costActive, setCostActive] = useState(false);
    const [postCost, setPostCost] = useState();
    const [farmStatus, setFarmStatus] = useState(props.farmDetails.status);

    

    const handleSubmit = async (event) => {
        event.preventDefault();

        var tempCost = { cost_value: postCost, farmID: props.farmDetails.id };

        const res = await axios
            .post("/CEO_setFarmCostValue", tempCost)
            .then((response) => {
                setCostValue(response.data.updateCostValue);
                setPostCost(response.data.updateCostValue);
                setCostActive(false);
            })
            .catch((error) => {
                alert("This was the error:\n" + error);
            });
    };

    function handleChange(event) {
        setPostCost(event.target.value);
    }

    useEffect(() => {
        // setCostValue(props.farmDetails.cost);
        // setFarmStatus(props.farmDetails.status);
    });

    async function changeStatus(toBeChangeFarmStatus) {
        let send = {
            status: toBeChangeFarmStatus,
            farmID: props.farmDetails.id,
        };
        // console.log();
        await axios
            .post("/CEO_changeFarmStatus", send)
            .then((response) => {
                // console.log(response.data.newStatusValue);
                setFarmStatus(response.data.newStatusValue);
                setDeactivate(false);
                props.getUsers3();
            })
            .catch((error) => {
                alert("This was the error:\n" + error);
            });
    }

    return (
        <Grid container direction="column" alignItems="center" justify="center">
            <Card className="w-75 mt-5">
                <CardContent sx={deactivate && { bgcolor: "#f1f2f6" }}>
                    {/* <CardContent> */}
                    <div className="w-100 d-flex justify-content-between">
                        <Typography
                            className="d-flex align-items-end"
                            variant="h5"
                            component="div"
                        >
                            <div>
                                <p className=" ml-1">
                                    {props.farmDetails.name} <br />
                                    <Typography
                                        sx={{ mb: 1.5, fontWeight: 600 }}
                                        color={
                                            farmStatus === "Activated"
                                                ? "green"
                                                : "red"
                                        }
                                    >
                                        {farmStatus}
                                    </Typography>
                                </p>
                            </div>
                        </Typography>

                        {farmStatus === "Activated" && (
                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => setDeactivate(true)}
                                sx={{
                                    height: 1 / 2,
                                    marginTop: 1,
                                    marginRight: 2,
                                }}
                            >
                                <ErrorOutlineIcon />
                                &nbsp; Deactivate
                            </Button>
                        )}

                        {farmStatus === "Deactivated" && (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => setDeactivate(true)}
                                sx={{
                                    height: 1 / 2,
                                    marginTop: 1,
                                    marginRight: 2,
                                }}
                            >
                                {/* <ErrorOutlineIcon /> */}
                                &nbsp; Activate
                            </Button>
                        )}
                    </div>

                    <Typography
                        variant="body2"
                        component="div"
                        sx={{ mt: 1.5 }}
                    >
                        <div className="row border-bottom w-50 my-3">
                            <div className="col-3">
                                <strong>ID:</strong>
                            </div>
                            <div className="col-3">{props.farmDetails.id}</div>
                        </div>

                        <div className="row border-bottom w-50 my-3">
                            <div className="col-3">
                                <strong>Address:</strong>
                            </div>
                            <div className="col-9">
                                {props.farmDetails.address}
                            </div>
                        </div>

                        <div className="row border-bottom w-50 my-3">
                            <div className="col-3">
                                <strong>Area in sq. ft.:</strong>
                            </div>
                            <div className="col-9">
                                {props.farmDetails.area}
                            </div>
                        </div>
                        <div className="row border-bottom w-50 my-3">
                            <div className="col-3">
                                <strong>Total Cost:</strong>
                            </div>
                            <div className="col-9 d-flex">
                                {costActive === false && (
                                    <>
                                        <div>{costValue}</div>
                                        <Button
                                            disabled={
                                                farmStatus === "Deactivated" ||
                                                deactivate
                                                    ? true
                                                    : false
                                            }
                                            size="small"
                                            variant="outlined"
                                            color="primary"
                                            sx={{ mb: 2, ml: 14 }}
                                            onClick={() => setCostActive(true)}
                                        >
                                            Add Cost
                                        </Button>
                                    </>
                                )}
                                {costActive === true && (
                                    <>
                                        <TextField
                                            type="number"
                                            InputProps={{
                                                inputProps: { min: 0 },
                                            }}
                                            variant="outlined"
                                            label="Total Cost"
                                            // value={priceBDT}
                                            name="price"
                                            defaultValue={costValue}
                                            onChange={(e) => handleChange(e)}
                                        />
                                        <Button
                                            sx={{
                                                mt: 1,
                                                ml: 3,
                                                mr: 2,
                                                height: 30,
                                            }}
                                            size="small"
                                            variant="contained"
                                            color="primary"
                                            onClick={handleSubmit}
                                        >
                                            Add
                                        </Button>
                                        <Button
                                            sx={{ mt: 1, mx: 2, height: 30 }}
                                            size="small"
                                            variant="contained"
                                            color="error"
                                            onClick={() => setCostActive(false)}
                                        >
                                            Cancel
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="row border-bottom w-50 my-3">
                            <div className="col-3">
                                <strong>Total Farmers:</strong>
                            </div>
                            <div className="col-9 d-flex">
                                <div>{props.farmDetails.totalFarmers}</div>
                                <Button
                                    disabled={deactivate}
                                    size="small"
                                    variant="outlined"
                                    color="success"
                                    sx={{ mb: 2, ml: 15 }}
                                    onClick={() =>
                                        props.changeFarmID(
                                            props.farmDetails.id,
                                            5
                                        )
                                    }
                                >
                                    List of Farmers
                                </Button>
                            </div>
                        </div>

                        <div className="row border-bottom w-50 my-3">
                            <div className="col-3">
                                <strong>Chickens:</strong>
                            </div>
                            <div className="col-9">
                                100 Chickens, 500 Chicken Eggs
                            </div>
                        </div>

                        <div className="row border-bottom w-50 my-3">
                            <div className="col-3">
                                <strong>Ducks:</strong>
                            </div>
                            <div className="col-9">100 Ducks, 50 Duck Eggs</div>
                        </div>
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        background: "white",
                    }}
                >
                    {!deactivate ? (
                        <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={() => props.loadDetails(false)}
                        >
                            Close
                        </Button>
                    ) : (
                        <>
                            <strong className="mt-2 mr-2">
                                Are you sure you want to{" "}
                                {farmStatus === "Activated"
                                    ? "deactivate"
                                    : "activate"}{" "}
                                {props.farmDetails.name}?
                            </strong>

                            <Button
                                size="small"
                                variant="contained"
                                color="error"
                                onClick={() =>
                                    changeStatus(
                                        farmStatus === "Activated"
                                            ? "Deactivated"
                                            : "Activated"
                                    )
                                }
                            >
                                Yes
                            </Button>
                            <Button
                                size="small"
                                variant="contained"
                                color="primary"
                                onClick={() => setDeactivate(false)}
                            >
                                No
                            </Button>
                        </>
                    )}
                </CardActions>
            </Card>
        </Grid>
    );
}
