import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {Empass} from '../../Action'
import { Text,View,StyleSheet, TextInput, TouchableOpacity,  Image} from 'react-native'
import { showMessage } from 'react-native-flash-message'
import logo from '../../assets/nestone.png'
export const Signup =({navigation})=>{
    const dispatch=useDispatch()

    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    let [pas]=useState(false)
    let onPress1=()=>{
        if(password.length>=9)
        {
            // console.log('Valid')
        dispatch(Empass({email,password}))
            navigation.push('Form')
    }
        else
        // setpass(true)
        showMessage({
            message:"Password should be greater than 9 ",
            hideOnPress:true,
            icon:'warning',
            type:'warning'
        })
    }
return<View style={styles.Header1}>
            {/* <Text style={styles.TextHeader}>Nest One</Text> */}
            <Image source={logo} style={styles.TextHeader}/>
            <View style={styles.Parent} >
            <Text style={styles.CreAcc}>Create Account</Text>
            <Text style={styles.EmaPass}>Enter Email and Password </Text>
            <TextInput style={styles.username} onChangeText={value=>setEmail(value)} value={email} placeholder='Email'/>
            <TextInput secureTextEntry={true} style={styles.username} onChangeText={value=>setPassword(value)} value={password} placeholder="Password"/>
           { pas && <Text style={styles.red}>Should be greater than 8</Text>}
            <TouchableOpacity style={styles.Signup} disabled={!email && !password} onPress={()=>{onPress1()}}>
                <Text style={styles.white}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.Login}>
            <Text>Already Have Account </Text>
            <TouchableOpacity onPress={()=>{navigation.push('Login')}}><Text style={styles.blue}>Login</Text></TouchableOpacity>
            </View>
            </View>
       </View>
    
}

const styles = StyleSheet.create({
    CreAcc:{fontSize:25,fontWeight:"normal",marginLeft:15,padding:20},
    EmaPass:{marginLeft:15,padding:10},
    Header1:{
      alignItems:'center',
      color:"white",
      flex:1
  },
    Login:{
        flex:1,
        flexDirection:'row',
        // alignItems:'flex-start'
    },
    Parent:{
        alignItems:'center',
        flex:1,
        justifyContent:"flex-start"
    },

    Signup:{
        backgroundColor:'#3F3F3F',
        borderRadius:20,
        color:"white",
        marginBottom:10,
        paddingBottom:10,
        paddingLeft:50,
        paddingRight:50,
        paddingTop:10
     },
    TextHeader:{
        //  color:"#3F3F3F",
        //  fontSize:50,
        //  marginLeft:20,
         marginTop:50,
         
         
     },
     blue:{
        color:'blue'
    },
     red:{
        color:'red'
    },

     username:{
        borderBottomWidth:1,
        margin:20,
        width:250,
     },
  white:{
        color:'white'
    }
});