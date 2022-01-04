import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import AddForm from "./AddChicken";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        // console.log("Inside: ");
        // console.log(props.id);
    }, []);

    return (
        <div>
            {props.actionType == "AC" && (
                <p className="action" onClick={handleOpen}>
                    <AddOutlinedIcon />
                    Add Chicken
                </p>
            )}
            {props.actionType == "AE" && (
                <p className="action" onClick={handleOpen}>
                    <AddOutlinedIcon />
                    Add Egg
                </p>
            )}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        className="text-center"
                    >
                        {/* {props.actionType == "AC" && "Total Chickens To Be Added"}
                        {props.actionType == "AE" && "Total Eggs To Be Added"} */}
                    </Typography>

                    <div
                        id="modal-modal-description"
                        sx={{ mt: 2 }}
                        className="text-center"
                    >
                        <AddForm secondProps={props} />
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
