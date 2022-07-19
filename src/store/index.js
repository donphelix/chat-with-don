import {configureStore} from "@reduxjs/toolkit"
import messageReducer from "../reducers/message";

//store message in localStorage
const saveToLocalStorage = state => {
    try {
        // convert object to string
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistentState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

// load string from localStorage and convert back in to an Object
const loadFromLocalStorage = () => {
    try {
        const serialisedState = localStorage.getItem("persistentState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
};

const store = configureStore({
    reducer: {
        message: messageReducer,
    },
    preloadedState: loadFromLocalStorage(),
});

// listen for store changes and use saveToLocalStorage to
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
