import { AUTH_USER, AUTH_ERROR } from "../actions";

export const AUTH_STATE = {
    authenticated: 1,
    errorMessage: "",
};
const authReducer = (state = AUTH_STATE, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                authenticated: action.payload.token,
                errorMessage: "",
            };
        case AUTH_ERROR:
            return {
                ...state,
                authenticated: "",
                errorMessage: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
