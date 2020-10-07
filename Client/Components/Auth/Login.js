import React, { useState } from 'react'
import { Text,Navigator,View,StyleSheet, TextInput,Button, TouchableOpacity} from 'react-native'
import { exp } from 'react-native/Libraries/Animated/src/Easing'
import { useDispatch } from 'react-redux'
import { Loginin } from '../../Action'

export const Login =({navigation})=>{
    let dispatch=useDispatch()
    let [username,setUsername]=useState('Mohammad')
    let [password,setPassword]=useState('123456789')
    const onPress1=async()=>{
        await dispatch(Loginin(username,password))
        navigation.push('Home')
    }
    return<>
       <View style={styles.Header1}>
            <Text style={styles.TextHeader}>Nest One</Text>

            <View style={styles.Parent} >
            <Text style={{marginLeft:15,padding:20,fontSize:25,fontWeight:"normal"}}>Login Account</Text>
            <Text style={{marginLeft:15,padding:10}}>Enter Name and Password For Login </Text>
            <TextInput style={styles.username} placeholder='Username'onChangeText={val=>setUsername(val)} value={username}/>
            <TextInput secureTextEntry={true} style={styles.username} value={password} onChangeText={val=>setPassword(val)} placeholder="Password"/>

            <TouchableOpacity style={styles.Signup} onPress={()=>onPress1()} disabled={!username&&!password}>
                <Text style={{color:'white'}}>Login</Text>
            </TouchableOpacity>
            <View style={styles.Login}>
            <Text>Don't Have Account ? </Text>
            <TouchableOpacity onPress={()=>{navigation.push('SignUp')}}><Text style={{color:'blue'}} >Signup</Text></TouchableOpacity>
            </View>
            </View>
       </View>
    </>
}

const styles = StyleSheet.create({
    Login:{
        flex:1,
        flexDirection:'row',
        // alignItems:'flex-start'
    },
    Parent:{
        marginTop:40,
        flex:1,
        justifyContent:"flex-start",
        alignItems:'center'
    },
     TextHeader:{
         color:"#3F3F3F",
         fontSize:50,
         marginLeft:20,
         marginTop:30,
         
         
     },
     username:{
        width:250,
        margin:20,
        borderBottomWidth:1,
     },

     Signup:{
        paddingLeft:50,
        borderRadius:20,
        paddingRight:50,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#3F3F3F',
        color:"white",
        marginBottom:10
     },
  Header1:{
      color:"white",
      alignItems:'center',
      flex:1
  }
});
