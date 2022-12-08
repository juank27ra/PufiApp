import {  } from './actions'

const initialState = {
    p: {}
}

export default function rootReducers(state = initialState, action) {
    switch(action.type) {
        case "PAS":
            return {
                ...state,
                p: action.payload
            }
            default:
                return state;
        }
    };