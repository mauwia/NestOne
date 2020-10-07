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
import { color } from 'react-native-reanimated';
let Drawer=createDrawerNavigator()
export const MainPage=()=>{
    console.log('here')
    return <>
        
        <Drawer.Navigator initialRouteName='Dashboard'drawerContent={props=><CustomDrawerContent {...props}/>}>
            <Drawer.Screen name='Dashboard' component={Dashboard} />
            <Drawer.Screen name='Profile' component={Profile}/>
        </Drawer.Navigator>
    </>
}
function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
          <View style={styles.drawer1}>
          <Text style={styles.headerdraw}>NEST ONE</Text>
          </View>
        <DrawerItemList {...props} style={{color:"white"}} />
      </DrawerContentScrollView>
    );
  }
const styles=StyleSheet.create({
    drawer1:{
        flex:1,
    },
    headerdraw:{
        fontSize:30,
        marginLeft:7,
        marginTop:12,
        marginBottom:30
    }
})