import authReducer from "./reducers/authReducer";
import classReducer from "./reducers/classReducer";
import {thunk} from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    classes: classReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;