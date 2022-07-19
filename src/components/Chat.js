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
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import {Chip} from "@material-ui/core";
import FaceIcon from '@mui/icons-material/Face';

const useStyles = makeStyles({
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

    return (<div>
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h5" className="header-message">Chat</Typography>
            </Grid>
        </Grid>
        <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={12}>
                <Divider/>
                <Grid container style={{padding: '10px', backgroundColor: '#03a9f4'}}>
                    <Grid item xs={11} style={{backgroundColor: 'white', borderRadius: '10px'}}>
                        <TextField placeholder="Start Typing" InputProps={{disableUnderline: true}} fullWidth/>
                    </Grid>
                    <Grid xs={1} align="right">
                        <Chip clickable label="Send" color="success"
                              style={{backgroundColor: 'white', padding: '4px'}}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>);
}

export default Chat;
