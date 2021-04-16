import axios from "./axiosConfig";
import { FETCH_POSTS, ERROR, CREATE_POST } from "./types";

export const fetchPosts = () => async (dispatch) => {
    try {
        const response = await axios.get("/Posts/");

        dispatch({
            type: FETCH_POSTS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: { error: "ERROR" },
        });
    }
};
export const createAPost = (postObj) => async (dispatch) => {
    try {
        const response = await axios.post(`/Posts/`, postObj);

        dispatch({
            type: CREATE_POST,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: { error: "ERROR" },
        });
    }
};
