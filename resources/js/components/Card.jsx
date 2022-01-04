import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";

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

export default function MultiActionAreaCard(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Card sx={{ maxWidth: 380 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="400"
                        image={props.imgLocation}
                        alt="Couldn't Load Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.header}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.description}
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary">
                            <div className="row">
                                <div className="col-6 font-weight-bold">Price</div>
                                <div className="col-6">{props.price}</div>
                            </div>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        onClick={handleOpen}
                        size="small"
                        variant="outlined"
                        color="primary"
                    >
                        Order
                    </Button>
                </CardActions>
            </Card>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        How To Order
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        To order our products, please call on of the following
                        numbers given below:
                    </Typography>
                    <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2, fontWeight: "bold" }}
                    >
                        017 XXX XXX XX
                        <br />
                        018 XXX XXX XX
                    </Typography>
                </Box>
            </Modal>
        </>
    );
}
