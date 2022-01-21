import { all, takeLatest } from "redux-saga/effects";
import { API_BLOG_POST_METHODS, API_POST_CATEGORY_METHODS } from "../../utils/ApiTypes";
import { getPostCategoryAction } from "./getPostCategorySaga";
import { getPostAction } from "./GetPostSaga";

function* watchGetBlogPostAction(){
    yield takeLatest(API_BLOG_POST_METHODS,getPostAction)
    yield takeLatest(API_POST_CATEGORY_METHODS,getPostCategoryAction)
}

function* rootSaga() {
    yield all ([
        watchGetBlogPostAction()
    ])
}

export default rootSaga;