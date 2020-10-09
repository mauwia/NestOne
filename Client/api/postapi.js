import Axios from "axios"

const api='http://192.168.18.218:3000'

export const AddPost=async detail=>{
    try{let res=await Axios.post(`${api}/post`,detail)
    return res.data
}catch(err){
    throw err
}
}   
export const GetPosts=async ()=>{
    // console.log('await')
   try { let res=await Axios.get(`${api}/post`)
    // console.log(res.data)
    return res.data
}
    catch(err){
        throw err
    }
}
export const GetUserPosts=async (id)=>{
    try{let res = await Axios.get(`${api}/post/user/${id}`)
    return res.data
    }catch(err){
        throw err
    }
}