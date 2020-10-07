import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, ActivityIndicator
} from 'react-native';
import {applyMiddleware, compose, createStore} from 'redux'
import reduxThunk from 'redux-thunk'
import {Provider, useDispatch, useSelector} from 'react-redux'
import Reducers from './Reducers';
import SecureStorage from 'react-native-secure-storage'

import { Combine } from './Components/Combine';
import { Signup } from './Components/Auth/SignUp';
import { Login } from './Components/Auth/Login';
import { Form } from './Components/Auth/Form';
import { MainPage } from './Components/MainPage/MainPage';
import { UserAccess } from './Action';
import { Profile } from './Components/MainPage/Profile';

const Stack=createStackNavigator()
const Loader=()=>{
  return<ActivityIndicator/>
}
export default Wrapper=()=>{
    let [isSign,setSign]=useState(false)
    let dispatch=useDispatch()
    let user=useSelector(state=>state.signup)
    useEffect(()=>{
      const fetchProfile=async()=>{
        let profile=await SecureStorage.getItem('accessToken')
        console.log(profile)
        if(profile){
          setSign(true)
        }
        
    }
    fetchProfile()
    },[])
    
    // console.log(!)
    return<>

     {!isSign? (
        <Stack.Navigator initialRouteName={'SignUp'} screenOptions={{headerShown:false}}>
            <Stack.Screen name="SignUp" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name='Home' component={MainPage}/>
            <Stack.Screen name='Form' component={Form} />
        </Stack.Navigator>):(<Stack.Navigator initialRouteName={'Home'} screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={MainPage}/>
            {/* <Stack.Screen name='Profile' component={Profile}/> */}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name='Form' component={Form} />
            {/* <Stack.Screen name="Signup" component={Signup} /> */}
        </Stack.Navigator>)
        }
        {/* <Text>Hell</Text> */}
        </>
}