import axios from "./axiosConfig";
import { FETCH_GROUPS, ERROR } from "./types";

export const fetchGroups = () => async (dispatch) => {
    console.log("hi");
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
