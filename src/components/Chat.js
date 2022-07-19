import React, {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import CreateMessage from "./CreateMessage";
import DisplayMessages from "./DisplayMessages";
import {useStyles} from "../msgstyle";

const names = prompt("Enter your name");

const Chat = () => {
    const classes = useStyles();
    const [username, setUsername] = useState("Doe");

    useEffect(() => {
        setUsername(names);
    }, [username])

    return (<div>
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h5" className="header-message">Chat</Typography>
            </Grid>
        </Grid>
        <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={12}>
                {/* Display conversation */}
                <DisplayMessages name={username}/>
                <Divider/>
                {/*Create message and submit*/}
                <CreateMessage name={username}/>
            </Grid>
        </Grid>
    </div>);
}

export default Chat;
