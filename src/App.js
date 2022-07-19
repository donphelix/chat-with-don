import './App.css';
import Chat from "./components/Chat";
import {Container} from "@material-ui/core";

const App = () => {
    return (
        <>
            <header></header>
            <Container maxWidth="md">
                <Chat />
            </Container>
        </>
    );
};

export default App;
