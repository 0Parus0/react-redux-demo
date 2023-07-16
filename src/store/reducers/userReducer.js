import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../types/userTypes"

const initialState = {
    loading: false,
    users: [],
    error: ''
}


 export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
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