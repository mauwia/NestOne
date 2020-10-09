import React from 'react'
import { View,Text, Image,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import logo from './assets/nestone.png'
export default Welcome=({navigation})=>{
    return<View style={styles.Main}>
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.testyle} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <TouchableOpacity style={styles.Signup} onPress={()=>navigation.navigate('SignUp')} ><Text style={{color:'white'}}>Sign Up</Text></TouchableOpacity>
        <TouchableOpacity style={styles.Login}><Text style={{color:'white'}} onPress={()=>navigation.navigate('Login')} >Login</Text></TouchableOpacity>
    </View>
}
let styles=StyleSheet.create({
    logo:{
        marginBottom:10
    },
    testyle:{
        alignSelf:'center',
        marginHorizontal:50,
        textAlign:'center',
        fontSize:20,
        marginVertical:20,
        color:'#008b8b'
    },
    Main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    Signup:{
        backgroundColor: 'purple',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 20,
        marginVertical:10

     },
     Login:{
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 60,
        borderRadius: 20,
        backgroundColor:'#3F3F3F',
        color:"white",
        marginVertical:10
     }
})