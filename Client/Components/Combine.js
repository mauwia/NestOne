import React from 'react'
import {Text} from 'react-native'
import { Login } from './Auth/Login'
import { Signup } from './Auth/SignUp'
import { MainPage } from './MainPage/MainPage'
import { Navbar } from './Navbar/Navbar'
export const Combine=()=>{
    return<>
    {/* <Signup/> */}
    <Login/>
    </>
}