import {combineReducers} from 'redux'
import PostReducer from './PostReducer'
import  SignupReducer  from './SignUpReducer'
import UserReducer from './UserReducer'
export default combineReducers({
    signup:SignupReducer,
    post:PostReducer,
    user:UserReducer
})