import React from "react";
import Data from "./Data";
// import { DataGrid } from '@mui/x-data-grid';

function BackTracking(){
    return (
        <ul>
        {Data[1].list.map((item, index)=><li key={index}>{item.question}</li>)}
        </ul>
    );
}

export default BackTracking;