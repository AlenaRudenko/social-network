import { combineReducers, createStore } from "redux";
import { dialoguesReducer } from "./dialoguesReducer";
import { profileReducer } from "./profileReducer";
import { sideBarReducer } from "./sideBarReducer";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  sideBar: sideBarReducer
});

export const store = createStore(rootReducer);
