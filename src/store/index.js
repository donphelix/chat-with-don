import {configureStore} from "@reduxjs/toolkit"
import messageReducer from "../reducers/message";

/**
 * TODO:
 *  1. create our store from our messageReducers
 *  2.
 */

//store message in localStorage
const saveToLocalStorage = state => {
    try {
        // convert object to string
        const serialisedState = JSON.stringify(state);
        console.log("serialisedState", serialisedState);
        localStorage.setItem("persistentState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

// load string from localStorage and convert back in to an Object
// invalid output must be undefined
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
        load: loadFromLocalStorage
    },

})

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
console.log(store.getState());
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
