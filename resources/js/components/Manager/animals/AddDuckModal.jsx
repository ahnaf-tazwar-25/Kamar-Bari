import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import AddDuck from "./AddDuck";

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

    return (
        <div>
            {props.actionType == "A" && (
                <p onClick={handleOpen} className="action" >
                    <AddOutlinedIcon />
                    Add Duck
                </p>
            )}
            {props.actionType == "D" && <p onClick={handleOpen}><DeleteOutlinedIcon />Delete Duck</p>}

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
                        {props.actionType == "A" && "Total Ducks To Be Added"}
                        {props.actionType == "D" && "Total Ducks To Be Deleted"}
                    </Typography>

                    <div
                        id="modal-modal-description"
                        sx={{ mt: 2 }}
                        className="text-center"
                    >
                        <AddDuck secondProps={props} actionType={props.actionType} />
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
