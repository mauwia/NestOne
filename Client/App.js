import React from 'react';
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
import {Provider} from 'react-redux'
import Reducers from './Reducers';
import { Combine } from './Components/Combine';
import { Signup } from './Components/Auth/SignUp';
import { Login } from './Components/Auth/Login';
import { Form } from './Components/Auth/Form';
import { MainPage } from './Components/MainPage/MainPage';


const Stack=createStackNavigator()
const App: () => React$Node = () => {
  let thus=true
  return (
    <Provider store={createStore(Reducers,compose(applyMiddleware()))}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
      <Stack.Navigator initialRouteName={'SignUp'} screenOptions={{headerShown:false}}>
          <Stack.Screen name="SignUp" component={Signup} />
          <Stack.Screen name='Home' component={MainPage}/>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name='Form' component={Form} />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
