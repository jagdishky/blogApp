import { combineReducers } from "redux";
import getPostReducer from "./getPostReducer";
import getPostCategory from "./getPostCategoryReducer";

const rootReducer = combineReducers({
    getPostReducer,
    getPostCategory,
});

export default rootReducer;