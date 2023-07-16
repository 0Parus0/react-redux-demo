import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
const initialState = {
    loading: false,
    users: [],
    error: ''
}


const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,

    }
}

const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}


const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
        return {
            ...state,
            loading: true
        }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }

        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
        return state
    }
}


const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data.map((user) => user.id);
                dispatch(fetchUserSuccess(users))
            })
            .catch((error) =>{
                dispatch(fetchUsersFailure(error.message));

            })
    }
}

const store = configureStore({
    reducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware()
            .concat(thunk)
    }
});

const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers())