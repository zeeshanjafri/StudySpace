import { combineReducers } from "redux";
import groupsReducer from "./groupsReducer";
import { reducer as formReducer, FormStateMap } from "redux-form";

import postsReducer from "./postsReducer";
import authReducer from "./authReducer";
import joinedGroupsReducer from "./joinedGroupsReducer";
export default combineReducers({
    groups: groupsReducer,
    joinedGroups: joinedGroupsReducer,
    posts: postsReducer,
    authStatus: authReducer,
    form: formReducer,
});
