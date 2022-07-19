import {makeStyles} from "@material-ui/core/styles";

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
    },
    paper: {
        width: "80vw",
        height: "80vh",
        maxWidth: "500px",
        maxHeight: "700px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "relative"
    },
    paper2: {
        width: "80vw",
        maxWidth: "500px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "relative"
    },
    container: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    messagesBody: {
        width: "calc( 100% - 20px )",
        margin: 10,
        overflowY: "scroll",
        height: "calc( 100% - 80px )"
    }
});
