/**
 * Created by PhpStorm.
 * User: don@donphelix.com
 * Date: 7/19/22
 * Time: 3:36 PM
 */

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {Chip} from "@material-ui/core";
import {useState} from "react";

const CreateMessage = () => {
    const [message, setMessage] = useState("");
    console.log(message);

    return (
        <>
            <Grid container style={{padding: '10px', backgroundColor: '#03a9f4'}}>
                <Grid item xs={11} style={{backgroundColor: 'white', borderRadius: '10px'}}>
                    <TextField
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Start Typing"
                        InputProps={{disableUnderline: true}}
                        fullWidth/>
                </Grid>
                <Grid item xs={1} align="right">
                    <Chip
                        clickable
                        onClick={() => {
                            if (!message) return;
                            // dispatch an action here to store message
                            setMessage("");
                        }}
                        label="Send"
                        style={{backgroundColor: 'white', padding: '4px'}}/>
                </Grid>
            </Grid>
        </>);
}

export default CreateMessage;
