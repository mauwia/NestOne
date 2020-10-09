import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
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
import Wrapper from './Wrapper';
import FlashMessage from 'react-native-flash-message';



const Stack=createStackNavigator()
const App: () => React$Node = () => {
  // useEffect(()=>{
  // },[])
  return (
    <Provider store={createStore(Reducers,compose(applyMiddleware(reduxThunk)))}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Wrapper/>
        <FlashMessage position='top'/>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
