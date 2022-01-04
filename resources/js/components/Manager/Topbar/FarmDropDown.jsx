import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        backgroundColor: "rgba(249, 238, 176)",
        color:
            theme.palette.mode === "light"
                ? "rgb(55, 65, 81)"
                : theme.palette.grey[300],
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

export default function FarmDropDown(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [activeBtn, setactiveBtn] = React.useState("Farm");

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClose1 = () => {
        setAnchorEl(null);
        props.activeNess(5);

        setactiveBtn("Farmers");
    };
    const handleClose2 = () => {
        setAnchorEl(null);
        props.activeNess(2);
        setactiveBtn("Animals");
    };

    return (
        <div>
            <Button
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                disableElevation
                style={{ color: "inherit" }}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                {activeBtn}
            </Button>

            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose1}>
                    <EditIcon />
                    Farmers
                </MenuItem>

                <Divider sx={{ my: 0.5 }} />

                <MenuItem onClick={handleClose2}>
                    <img
                        src="./images/chickenSVG.svg"
                        height={25}
                        width={25}
                        sx={{ marginBottom: 20 }}
                    />
                    &nbsp; Animals
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
