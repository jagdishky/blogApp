import { put } from "redux-saga/effects";
import apiCalls from "../../services/apiCalls";
import { API_POST_CATEGORY_FAIL, API_POST_CATEGORY_SUCCESS, BASE_URL } from "../../utils/ApiTypes";

export function* getPostCategoryAction(action){
    try{
        let apiData = {
            apiType: "GET",
            type: BASE_URL + "category"
        }
        const data = yield apiCalls(apiData)
        console.log('in')
        yield put ({
            type: API_POST_CATEGORY_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log('in 2')

        yield put({
            type: API_POST_CATEGORY_FAIL,
            payload: null
        })
    }
}