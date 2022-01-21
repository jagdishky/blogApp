import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
function configStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    )    
    sagaMiddleware.run(rootSaga)
    return store;
}

let store = configStore();

export default store;