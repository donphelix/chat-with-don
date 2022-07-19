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
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Chip} from "@material-ui/core";

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
                <List className={classes.messageArea}>
                    <ListItem key="1">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="09:30"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="2">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="left" secondary="09:31"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="3">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="right"
                                              primary="Cool. i am good, let's catch up!"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="10:30"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
                <Divider/>
                <Grid container style={{padding: '10px', backgroundColor: '#03a9f4'}}>
                    <Grid item xs={11} style={{backgroundColor: 'white', borderRadius: '10px'}}>
                        <TextField placeholder="Start Typing" InputProps={{disableUnderline: true}} fullWidth/>
                    </Grid>
                    <Grid item xs={1} align="right">
                        <Chip clickable onClick={() => console.log("Coming soon")} label="Send"
                              style={{backgroundColor: 'white', padding: '4px'}}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>);
}

export default Chat;
