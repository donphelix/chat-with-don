import {  configureStore } from "@reduxjs/toolkit"
import messageReducer from "../reducers/message";
/**
 * TODO:
 *  1. create our store from our messageReducers
 *  2.
 */

const store = configureStore({
    reducer:messageReducer,
})

export default store;
