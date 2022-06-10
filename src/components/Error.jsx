import { Typography } from "@mui/material";
import React from "react";
import err from "../images/404.png";

function Error() {
    return (
        <>
            <h1>Error 404: File not found</h1>
            <img id="error" src={err} alt="error" />
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <a href="/">Click here</a> redirect to home page
            </Typography>

        </>
    );
}

export default Error;

// public\images\404.png