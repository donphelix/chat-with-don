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

const store = configureStore({
    reducer: messageReducer
})

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
console.log(store.getState());
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
