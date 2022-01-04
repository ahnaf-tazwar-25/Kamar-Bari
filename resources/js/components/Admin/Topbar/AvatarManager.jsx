import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { Box, Typography } from "@mui/material";

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

export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [ceoName, setCeoName] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const getCEOName = async () => {
        const url = "/CEO_getName";
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.user);
        setCeoName(data.user);
    }
    
    React.useEffect(() => {
        getCEOName();
    }, []);

    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls="demo-customized-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                // variant="contained"
                variant=""
                disableElevation
                onClick={handleClick}
                // endIcon={<MoreVertIcon />}
            >
                <Avatar
                    src={
                        "https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    }
                    alt="photoURL"
                    sx={{
                        padding: 0,
                        width: 44,
                        height: 44,
                        ...(open && {
                            "&:before": {
                                zIndex: 1,
                                content: "''",
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                                position: "absolute",
                                bgcolor: (theme) =>
                                    alpha(theme.palette.grey[900], 0.72),
                            },
                        }),
                    }}
                />
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
                <Box sx={{ my: 1.5, px: 2.5 }}>
                    <Typography variant="subtitle1" noWrap>
                        {ceoName}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                        noWrap
                    >
                        {"CEO"}
                    </Typography>
                </Box>
                <MenuItem onClick={handleClose} disableRipple>
                    <Link
                        to="/manager/settings"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <EditIcon />
                        Edit Account
                    </Link>
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                    <Link
                        to="/signout"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <LogoutIcon />
                        Log Out
                    </Link>
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
