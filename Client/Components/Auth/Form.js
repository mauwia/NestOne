import React,{useState} from 'react'
import {Text,View,Image,ActivityIndicator,StyleSheet} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import defaultAvatar from './default.png'
import ImagePicker from 'react-native-image-picker'

export const Form =()=>{
    const [avatar,setAvatar]=useState(defaultAvatar)
    const handlePicker=()=>{
        ImagePicker.showImagePicker({},response=>{
            if(response.didCancel){
                setAvatar(defaultAvatar)
            }
            else{
            setAvatar(response)
        }
        })
    }
    return<>
        <View style={styles.Parent1}>
        <TouchableOpacity onPress={()=>{handlePicker()}}><Image source={avatar}  style={styles.Image1} /></TouchableOpacity>
        <TextInput placeholder='Full Name' style={styles.TextInput2}/>
        <TextInput placeholder='Username' style={styles.TextInput2} />
        <TextInput placeholder='Status' style={styles.TextInput2} />
        <TouchableOpacity style={styles.Submission}><Text style={{color:'white'}}>Submit</Text></TouchableOpacity>
        </View>
    </>

}
let styles=StyleSheet.create({
    Image1:{
        borderRadius:200,
        width:200,
        height:200,
        marginTop:50,
        marginBottom:20,
    },
    Parent1:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:'center'
    },
    TextInput2:{
        borderBottomWidth:1,
        width:250,
        marginBottom:20
    },
    Submission:{
        backgroundColor:'purple',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:50,
        paddingRight:50,
        borderRadius:20
    }
    
})