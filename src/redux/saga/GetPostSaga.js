import { put } from "redux-saga/effects";
import apiCalls from "../../services/apiCalls";
import { API_BLOG_POST_FAIL, API_BLOG_POST_METHODS, API_BLOG_POST_SUCCESS, BASE_URL } from "../../utils/ApiTypes";

export function* getPostAction(action){
    try{
        let apiData = {
            apiType: "GET",
            type: BASE_URL + "blog-post" + "?category=" +action.payload.category
        }
        const data = yield apiCalls(apiData)
        console.log('in')
        yield put ({
            type: API_BLOG_POST_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log('in 2')

        yield put({
            type: API_BLOG_POST_FAIL,
            payload: null
        })
    }
}