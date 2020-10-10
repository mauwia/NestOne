/* eslint-disable no-useless-catch */
const api = 'http://192.168.18.218:3000'
import axios from 'axios'
import SecureStorage from 'react-native-secure-storage'
export const SignUp = async details => {
    try {
        const body = {
            email: details.email,
            username: details.username,
            password: details.password,
            fullname: details.fullname,
            status: details.status,
            imagelink: details.imagelink
        }
        let res = await axios.post(`${api}/auth/signup`, body)
        return res.data
    }

    catch (err) {
        throw err
    }
}
export const LoginIn = async (username, password) => {

    try {
        let res = await axios.post(`${api}/auth/signin`, { username, password })
        await SecureStorage.setItem('accessToken', JSON.stringify(res.data))
        return res.data
    }
    catch (err) {
        throw err
    }

}
