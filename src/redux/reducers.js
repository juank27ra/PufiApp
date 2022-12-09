

const initialState = {
    subscribe: {}
}

export default function rootReducers(state = initialState, action) {
    switch(action.type) {
        case "PAS":
            return {
                ...state,
            }
            default:
                return state;
        }
    };