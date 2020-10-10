/* eslint-disable no-useless-catch */
import { SignUp, LoginIn } from '../api/authApi'
import { AddPost, GetPosts, GetUserPosts } from '../api/postapi'
import SecureStorage from 'react-native-secure-storage'

export const Empass = (empass) => {
    return {
        type: "EMAIL_AND_PASS",
        payload: { ...empass }
    }
}
export const details = (details) => async (dispatch, getState) => {
    try {
        let res = getState().signup
        let data = await SignUp({ ...res, ...details })
        dispatch({ type: 'SIGN_UP', payload: data })
    } catch (err) {
        throw err
    }
}
export const Loginin = (username, password) => async dispatch => {
    try {
        let data = await LoginIn(username, password)
        dispatch({ type: "LOGIN_IN", payload: data })
    }
    catch (err) {
        throw err
    }

}
export const addPost = (details) => async dispatch => {
    try {
        let name = await SecureStorage.getItem("accessToken")
        name = JSON.parse(name)
        let data = await AddPost({ ...details, username: name._id })
        dispatch({ type: "ADD_POST", payload: { ...data, userId: { imagelink: name.imagelink, username: name.username } } })
    } catch (err) {
        throw err
    }
}
export const getPosts = () => async dispatch => {
    try {
        let data = await GetPosts()

        dispatch({ type: "GET_POSTS", payload: data })
    }
    catch (err) {
        throw err
    }
}

export const userPosts = () => async (dispatch, getState) => {
    try {

        let name = getState().signup

        let data = await GetUserPosts(name._id)
        dispatch({ type: 'USER_POSTS', payload: data })
    } catch (err) {
        throw err
    }
}
export const UserAccess = () => async dispatch => {
    try {
        let name = await SecureStorage.getItem("accessToken")
        name = JSON.parse(name)
        dispatch({ type: 'USER_LOAD', payload: name })
    } catch (err) {
        throw err
    }
}
export const Hit = () => {
    return {
        type: "HIT"
    }
}
export const Logout = () => async dispatch => {
    try {
        await SecureStorage.removeItem("accessToken")
        dispatch({ type: "LOGOUT" })
    } catch (err) {
        throw err
    }
}