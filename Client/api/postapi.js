import Axios from "axios"

const api='http://192.168.18.218:3000'

export const AddPost=async detail=>{
    let res=await Axios.post(`${api}/post`,detail)
    return res.data
}   
export const GetPosts=async ()=>{
    let res=await Axios.get(`${api}/post`)
    // console.log(res.data)
    return res.data
}
export const GetUserPosts=async (id)=>{
    let res = await Axios.get(`${api}/post/user/${id}`)
    return res.data
}