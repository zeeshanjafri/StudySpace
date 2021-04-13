import { FETCH_JOINED_GROUPS } from "../actions";

const joinedGroupsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_JOINED_GROUPS:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

export default joinedGroupsReducer;
