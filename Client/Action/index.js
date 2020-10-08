
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
    try{
    let res=getState().signup
    let data=await SignUp({...res,...details})
    dispatch({type:'SIGN_UP',payload:data})
}catch(err){
    throw err
}
}
export const Loginin=(username,password)=>async dispatch=>{
    // console.log('hello2')
    try{
    let data=await LoginIn(username,password)
    dispatch({type:"LOGIN_IN",payload:data})}
    catch(err){
        throw err
    }
   
}
export const addPost=(details)=>async dispatch=>{
   try{ // console.log('hello')
    let name=await SecureStorage.getItem("accessToken")
    name=JSON.parse(name)
    // console.log(name.imagelink)
    let data=await AddPost({...details,username:name._id})
    // console.log(data)
    dispatch({type:"ADD_POST",payload:{...data,userId:{imagelink:name.imagelink,username:name.username}}})
}catch(err){
    throw err
}
}
export const getPosts=()=>async dispatch=>{
    try{
    // console.log('work')
    let data=await GetPosts()
    // console.log(data)
    dispatch({type:"GET_POSTS",payload:data})}
    catch(err){
        throw err
    }
}

export const userPosts=()=>async (dispatch,getState)=>{
   try{ 
    // let name=await SecureStorage.getItem("accessToken")
    // name=JSON.parse(name)
    // console.log('===>')
    let name=getState().signup
    console.log(name)
    let data = await GetUserPosts(name._id)
    dispatch({type:'USER_POSTS',payload:data})
}catch(err){
    throw err
}
}
export const UserAccess=()=>async dispatch=>{
    let name=await SecureStorage.getItem("accessToken")
    name=JSON.parse(name)
    dispatch({type:'USER_LOAD',payload:name})
}
export const Hit=()=>{
    return{
        type:"HIT"
    }
}
export const Logout=()=>async dispatch=>{
    // console.log('hll')
    await SecureStorage.removeItem("accessToken")
    dispatch({type:"LOGOUT"})
}