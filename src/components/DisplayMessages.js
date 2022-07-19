import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {useStyles} from "./Chat";

const DisplayMessages = () => {
    const classes = useStyles();

    return (
        <>
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
        </>
    );
};

export default DisplayMessages;
