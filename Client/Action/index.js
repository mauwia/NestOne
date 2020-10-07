
import {SignUp,LoginIn} from '../api/authApi'
import {AddPost,GetPosts, GetUserPosts} from '../api/postapi'
import SecureStorage from 'react-native-secure-storage'

export const Empass=(empass)=>{
    return{
        type:"EMAIL_AND_PASS",
        payload:{...empass}
    }
}
export const details=(details)=>async (dispatch,getState)=>{
    let res=getState().signup
    let data=await SignUp({...res,...details})
    dispatch({type:'SIGN_UP',payload:data})
}
export const Loginin=(username,password)=>async dispatch=>{
    console.log('hello2')
    let data=await LoginIn(username,password)
    // console.log(data)
    dispatch({type:"LOGIN_IN",payload:data})
}
export const addPost=(details)=>async dispatch=>{
    // console.log('hello')
    let name=await SecureStorage.getItem("accessToken")
    name=JSON.parse(name)
    console.log(name.imagelink)
    let data=await AddPost({...details,username:name._id})
    console.log(data)
    dispatch({type:"ADD_POST",payload:{...data,userId:{imagelink:name.imagelink,username:name.username}}})
}
export const getPosts=()=>async dispatch=>{
    let data=await GetPosts()
    dispatch({type:"GET_POSTS",payload:data})
}
export const userPosts=()=>async dispatch=>{
    let name=await SecureStorage.getItem("accessToken")
    name=JSON.parse(name)
    let data = await GetUserPosts(name._id)
    dispatch({type:'USER_POSTS',payload:data})
}