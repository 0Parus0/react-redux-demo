import { configureStore } from "@reduxjs/toolkit";
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import { rootReducer } from "./reducers";



const store = configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware()
            .concat(logger)
            .concat(thunk)
    }
})

export default store;


