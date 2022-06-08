import React from "react";
import Data from "./Data";

function DP(){
    return (
        <ul>
        {Data[0].list.map((item, index)=><li key={index}>{item.question}</li>)}
        </ul>
    );
}

export default DP;