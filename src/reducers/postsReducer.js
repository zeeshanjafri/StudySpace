import { FETCH_POSTS } from "../actions";

const postsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

export default postsReducer;
