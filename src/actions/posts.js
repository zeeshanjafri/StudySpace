import axios from "./axiosConfig";
import { FETCH_POSTS, ERROR } from "./types";

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
