import { combineReducers } from "redux";
import groupsReducer from "./groupsReducer";
import authReducer from "./authReducer";
import joinedGroupsReducer from "./joinedGroupsReducer";
export default combineReducers({
    groups: groupsReducer,
    joinedGroups: joinedGroupsReducer,
    authStatus: authReducer,
});
