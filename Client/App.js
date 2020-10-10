/* eslint-disable no-undef */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {
  StatusBar,
} from 'react-native';
import {applyMiddleware, compose, createStore} from 'redux'
import reduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import Reducers from './Reducers';
import Wrapper from './Wrapper';
import FlashMessage from 'react-native-flash-message';

const App: () => React$Node = () => {
  
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



export default App;
