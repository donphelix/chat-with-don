import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {Chip} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {addMessage} from "../actions";
import {useState} from "react";

const CreateMessage = (props) => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    return (<>
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
                        dispatch(addMessage(message, props.name));
                        setMessage("");
                    }}
                    label="Send"
                    style={{backgroundColor: 'white', padding: '4px'}}/>
            </Grid>
        </Grid>
    </>);
}

export default CreateMessage;
