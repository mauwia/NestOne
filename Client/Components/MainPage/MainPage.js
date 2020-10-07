import React from 'react'
import { Text,StyleSheet,View } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList,
    DrawerItem, } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dashboard } from './DashBoard';
import { Profile } from './Profile';
import {Login} from '../Auth/Login'
import { color } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { Logout } from '../../Action';
let Drawer=createDrawerNavigator()
export const MainPage=()=>{
    console.log('here')
    let dispatch=useDispatch()
    return <>
        
        <Drawer.Navigator initialRouteName='Dashboard' drawerContent={props=><CustomDrawerContent {...props}/>}>
            <Drawer.Screen name='Dashboard' component={Dashboard} />
            <Drawer.Screen name='Profile' component={Profile}/>
            {/* <Drawer.Screen name="Logout" component={Login} /> */}
        </Drawer.Navigator>
    </>
}

function CustomDrawerContent(props) {
    let dispatch=useDispatch()
    onPress1=(navigation)=>{  
        dispatch(Logout())
        navigation.navigate('Login')
    }
    return (
      <DrawerContentScrollView {...props}>
          <View style={styles.drawer1}>
          <Text style={styles.headerdraw}>NEST ONE</Text>
          </View>
        <DrawerItemList {...props}  />
        {/* <DrawerItem label={() => <Text style={{ color: 'white' }}>Dashboard</Text>}
        style={{backgroundColor: '#008b8b',position:'relative',bottom:0}} 
        inactiveBackgroundColor='white'
        onPress={() => alert('Logged out')}
      />
      <DrawerItem label={() => <Text style={{ color: 'white' }}>Profile</Text>}
        style={{backgroundColor: '#008b8b',position:'relative',bottom:0}} 
        onPress={() => props.navigation.navigate('profile')}
      /> */}
        <DrawerItem label={() => <Text style={{ color: 'white' }}>Logout</Text>}
        style={{backgroundColor: 'red'}} 
        onPress={() => onPress1(props.navigation)}
      />
      </DrawerContentScrollView>
    );
  }
const styles=StyleSheet.create({
    drawer1:{
        flex:1,
    },
    headerdraw:{
        color:"#008b8b",
        fontSize:30,
        marginLeft:7,
        marginTop:12,
        marginBottom:30
    }
})