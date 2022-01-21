import { API_BLOG_POST_METHODS, API_POST_CATEGORY_METHODS } from "../../utils/ApiTypes";

export function getBlogPostAction(payload){
    return {
        type: API_BLOG_POST_METHODS,
        payload: payload,
    }
}
export function getBlogCategoryAction(){
    return {
        type: API_POST_CATEGORY_METHODS
    }
}