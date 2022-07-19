import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {useSelector} from "react-redux";
import {Card} from "@material-ui/core";
import {useStyles} from "../msgstyle";

const DisplayMessages = (props) => {
    const classes = useStyles();
    const messages = useSelector(state => state).message;
    const messageKeys = Object.keys(messages);

    const listMessages = messageKeys.map((key) =>
        {
            if(messages[key].name === "Don") {

                return <Card  variant="outlined" key={`name_${key}`}>
                    <ListItem>
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary={messages[key].label}></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary={messages[key].name}></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                </Card>;
            } else {
                return <ListItem key={`name_${key}`}>
                    <Grid container>
                        <Grid item xs={12}>
                            <ListItemText align="left" primary={messages[key].label}></ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText align="left" secondary={messages[key].name}></ListItemText>
                        </Grid>
                    </Grid>
                </ListItem>;
            }
        }
    );
    return (
        <>
            <List className={classes.messageArea}>
                {listMessages}
            </List>
        </>
    );
};

export default DisplayMessages;
