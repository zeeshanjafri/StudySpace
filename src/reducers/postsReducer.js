import { FETCH_POSTS, CREATE_POST } from "../actions";

const postsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, data: action.payload };
        // case CREATE_POST:
        //     return { ...state, data: action.payload };
        default:
            return state;
    }
};

export default postsReducer;
