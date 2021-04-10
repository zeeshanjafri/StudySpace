import { FETCH_GROUPS } from "../actions";

const groupsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_GROUPS:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

export default groupsReducer;
