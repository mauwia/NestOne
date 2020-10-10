import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import {  useDispatch } from 'react-redux'
import SecureStorage from 'react-native-secure-storage'
import { Signup } from './Components/Auth/SignUp';
import { Login } from './Components/Auth/Login';
import { Form } from './Components/Auth/Form';
import SplashScreen from 'react-native-splash-screen'
import { MainPage } from './Components/MainPage/MainPage';
import { UserAccess } from './Action';
import Welcome from './Welcome';

const Stack = createStackNavigator()
export const Wrapper = () => {
  let [isSign, setSign] = useState(false)
  let dispatch = useDispatch()
  useEffect(() => {
    const fetchProfile = async () => {
      dispatch(UserAccess())
      let profile = await SecureStorage.getItem('accessToken')
      if (profile) {
        setSign(true)
      }
      SplashScreen.hide()
    }
    fetchProfile()
  }, [])
  return <>

    {!isSign ? (
      <Stack.Navigator initialRouteName={'Welcome'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Home' component={MainPage} />
        <Stack.Screen name='Form' component={Form} />
      </Stack.Navigator>) : (<Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={MainPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Form' component={Form} />
        <Stack.Screen name="SignUp" component={Signup} />
      </Stack.Navigator>)
    }
  </>
}
export default Wrapper