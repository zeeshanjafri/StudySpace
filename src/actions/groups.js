import axios from "./axiosConfig";
import { FETCH_GROUPS, ERROR, FETCH_JOINED_GROUPS } from "./types";

export const fetchGroups = () => async (dispatch) => {
    try {
        const response = await axios.get("/Groups/");
        console.log(response);
        dispatch({
            type: FETCH_GROUPS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: { error: "ERROR" },
        });
    }
};

export const fetchJoinedGroups = (userId) => async (dispatch) => {
    try {
        const response = await axios.get(`/GroupUser/`);

        dispatch({
            type: FETCH_JOINED_GROUPS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: { error: "ERROR" },
        });
    }
};
