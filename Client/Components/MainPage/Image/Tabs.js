import React from 'react'
import {Text , View} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Images from './image'
import Post from './posts'

const Tab = createMaterialTopTabNavigator();
export const Tabs=()=>{
    return<Tab.Navigator tabBarOptions={{activeTintColor:"#008b8b"}} >
            <Tab.Screen name='Images' component={Images} />
            <Tab.Screen name='Post' component={Post} />
        </Tab.Navigator>
}