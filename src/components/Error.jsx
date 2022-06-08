import React from "react";
import err from "../images/404.png";

function Home(){
    return (
        <>
            <h1>Error 404: File not found</h1>
            <img src={err} alt="error"/>
            {/* <img src="../../public/images/404.png"></img> */}
        </>
    );
}

export default Home;

// public\images\404.png