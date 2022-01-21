import { API_POST_CATEGORY_FAIL, API_POST_CATEGORY_METHODS, API_POST_CATEGORY_SUCCESS } from "../../utils/ApiTypes"

export default function getPostCategory(state = {}, action){
    switch (action.type){
    
        case API_POST_CATEGORY_METHODS: return {...state, loading: true}
    
        case API_POST_CATEGORY_SUCCESS: return {...state, loading: false, getCategory: action.payload}

        case API_POST_CATEGORY_FAIL : return {...state, loading: false, getCategory: null}

        default: return state
    }
}