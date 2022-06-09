import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

function BasicCard(props) {
    const [isEditable, setIsEditable] = useState(false);

    const handleEdit = () => {
        console.log("I am here");
        setIsEditable(!isEditable);
        if(isEditable){props.onEdit(props.id);}
    };

    let navigate = useNavigate();

    function handleClick(event){
        // navigate("./Back-tracking", {replace: false});
        console.log("clicked", event);
    }

    function go(){
        console.log(_.kebabCase(props.topicName));
        navigate("./topic/" + _.kebabCase(props.topicName), {replace: false});
    }

    return (
        <Card sx={{ minWidth: 275 }} variant="outlined" className="note" onClick={handleClick}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.topicName}
                </Typography>
                {/* <TextField
                    onBlur={() => setIsEditable(false)}
                    value={props.title}
                    variant="standard"
                    InputProps={{ disableUnderline: true, }}
                /> */}
            </CardContent>
            <CardActions>
                {/* <Button size="small">Learn More</Button> */}
                <EditIcon style={{ color: '#f5ba13' }} onClick={handleEdit} />
                <DeleteIcon style={{ color: '#f5ba13' }} onClick={()=>props.onDelete(props.id)} />    
                <Typography onClick={go}>Go</Typography>            
            </CardActions>
        </Card>
    );
}

export default BasicCard;