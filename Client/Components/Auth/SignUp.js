import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {Empass} from '../../Action'
import { Text,Navigator,View,StyleSheet, TextInput,Button, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
export const Signup =({navigation})=>{
    const dispatch=useDispatch()

    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    let onPress1=()=>{
        navigation.push('Form')
        dispatch(Empass({email,password}))
    }
return<KeyboardAvoidingView style={{flex:1}} behavior="height">
       <View style={styles.Header1}>
            <Text style={styles.TextHeader}>Nest One</Text>

            <View style={styles.Parent} >
            <Text style={{marginLeft:15,padding:20,fontSize:25,fontWeight:"normal"}}>Create Account</Text>
            <Text style={{marginLeft:15,padding:10}}>Enter Email and Password </Text>
            <TextInput style={styles.username} onChangeText={value=>setEmail(value)} value={email} placeholder='Email'/>
            <TextInput secureTextEntry={true} style={styles.username} onChangeText={value=>setPassword(value)} value={password} placeholder="Password"/>

            <TouchableOpacity style={styles.Signup} disabled={!email && !password} onPress={()=>{onPress1()}}>
                <Text style={{color:'white'}}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.Login}>
            <Text>Already Have Account </Text>
            <TouchableOpacity onPress={()=>{navigation.push('Login')}}><Text style={{color:'blue'}}>Login</Text></TouchableOpacity>
            </View>
            </View>
       </View>
    </KeyboardAvoidingView>
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