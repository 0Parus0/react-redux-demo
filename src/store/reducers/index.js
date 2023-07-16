import { combineReducers } from "@reduxjs/toolkit";
import { cakeReducer } from "./cakeReducer";
import { iceCreamReducer } from "./iceCreamReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    users: userReducer
})