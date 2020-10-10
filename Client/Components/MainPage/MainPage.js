import React from 'react'
import { Text,StyleSheet,View,Image } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList,
    DrawerItem, } from '@react-navigation/drawer';
import { Dashboard } from './DashBoard';
import { Profile } from './Profile';
import { useDispatch } from 'react-redux';
import { Logout } from '../../Action';
import logo from '../../assets/nestone.png'

let Drawer=createDrawerNavigator()
export const MainPage=()=>{
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
    let onPress1=(navigation)=>{  
        dispatch(Logout())
        navigation.navigate('Login')
    }
    return (
      <DrawerContentScrollView {...props}>
          <View style={styles.drawer1}>
          {/* <Text style={styles.headerdraw}>NEST ONE</Text>
           */}
            <Image source={logo} style={styles.headerdraw}/>

          </View>
        <DrawerItemList {...props}  />
    
        <DrawerItem label={() => <Text style={styles.white}>Logout</Text>}
        style={styles.red} 
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
    
        marginBottom:30,
        marginLeft:40,
        marginTop:12
    },
    red:{
        backgroundColor:'red'
    },
    white:{
        color:'white'
    }
})