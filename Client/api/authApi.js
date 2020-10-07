const api='http://192.168.18.218:3000'
// import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import { exp } from 'react-native/Libraries/Animated/src/Easing'
import SecureStorage from 'react-native-secure-storage'
export const SignUp =async details=>{
    const body = {
        email:details.email,
        username:details.username,
        password:details.password,
        fullname:details.fullname,
        status:details.status,
        imagelink:details.imagelink
    }
        console.log(body)
        let res = await axios.post(`${api}/auth/signup`,body)
        return res.data
}
export const LoginIn=async (username,password)=>{

    // console.log('hellp')
    let res=await axios.post(`${api}/auth/signin`,{username,password})
    // console.log('===>',res.data)
    
    await SecureStorage.setItem('accessToken',JSON.stringify(res.data))
    // await console.log(AsyncStorage.getItem("accessToken"))   
    return res.data
    
}
export const Profile=async ()=>{
    let accessToken=await AsyncStorage.getItem('accessToken')
    // console.log(accessToken)
    let result=await axios.get(`${api}/auth/me`,{headers:{
        Authorization:`Bearer ${accessToken}`
    }})
    // console.log('===> 1',result.data)
}
