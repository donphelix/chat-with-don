/**
 * Created by PhpStorm.
 * User: don@donphelix.com
 * Date: 7/19/22
 * Time: 1:19 PM
 */

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import CreateMessage from "./CreateMessage";
import DisplayMessages from "./DisplayMessages";

export const useStyles = makeStyles({
    table: {
        minWidth: 650,
    }, chatSection: {
        width: '100%', height: '80vh'
    }, headBG: {
        backgroundColor: '#e0e0e0'
    }, borderRight500: {
        borderRight: '1px solid #e0e0e0'
    }, messageArea: {
        height: '70vh', overflowY: 'auto'
    }
});

const Chat = () => {
    const classes = useStyles();
    // const [message, setItems] = useState([]);

    return (<div>
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h5" className="header-message">Chat</Typography>
            </Grid>
        </Grid>
        <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={12}>
                {/* Display conversation */}
                <DisplayMessages />
                <Divider />
                {/*Create message and submit*/}
                <CreateMessage />
            </Grid>
        </Grid>
    </div>);
}

export default Chat;
