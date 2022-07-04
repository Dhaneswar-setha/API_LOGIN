// import * as types from "./actionType";
import{LOGIN_START} from  "./actionType";
import{LOGIN_SUCCESS} from  "./actionType";
import{LOGIN_FAIL} from  "./actionType";
import{FETCH_START} from  "./actionType";
import{FETCH_SUCCESS} from  "./actionType";
import{FETCH_FAIL} from  "./actionType";

const initialState ={
    user: null,
    loading : false,
    error: null,
    fe: null,

};
const authReducer =(state =  initialState, action) =>{
    switch (action.type) {
        case LOGIN_START:
            return{
                ...state,
                loading:true,
            };
            case LOGIN_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    user:action.payload,
                };
                case LOGIN_FAIL:
                    return{
                        ...state,
                        loading:false,
                        error:action.payload,
                    };
                    case FETCH_START:
            return{
                ...state,
                loading:true,
            };
            case FETCH_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    fe:action.payload,
                };
                case FETCH_FAIL:
                    return{
                        ...state,
                        loading:false,
                        error:action.payload,
                    };
        default:
            return state;
    }
};
export default authReducer;


    