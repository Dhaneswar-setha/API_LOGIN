import {combineReducers} from "redux";

import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./reducer";


const persistConfig ={
    key:"root",
    storage,
    whitelist:["auth"],
    // whitelist:["fetch"],

};

const rootReducer = combineReducers({
    auth: authReducer,

});

export default persistReducer(persistConfig, rootReducer);