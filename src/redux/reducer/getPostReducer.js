import { API_BLOG_POST_FAIL, API_BLOG_POST_METHODS, API_BLOG_POST_SUCCESS } from "../../utils/ApiTypes";

export default function getPostReducer(state = {}, action){
    switch (action.type){
    
        case API_BLOG_POST_METHODS: return {...state, loading: true}
    
        case API_BLOG_POST_SUCCESS: return {...state, loading: false, getPost: action.payload}

        case API_BLOG_POST_FAIL : return {...state, loading: false, getPost: null}

        default: return state
    }
}