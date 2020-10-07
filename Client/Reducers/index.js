import {combineReducers} from 'redux'
import PostReducer from './PostReducer'
import  SignupReducer  from './SignUpReducer'
import UserReducer from './UserReducer'
import LoaderReducer from './LoaderReducer'
import ErrorReducer from './ErrorReducer'
export default combineReducers({
    signup:SignupReducer,
    post:PostReducer,
    user:UserReducer,
    hit:LoaderReducer,
    error1:ErrorReducer
})