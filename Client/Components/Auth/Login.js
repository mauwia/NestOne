/* eslint-disable react/prop-types */
import React, {  useState } from 'react'
import { Text,  View, StyleSheet, TextInput,  TouchableOpacity,  Image } from 'react-native'

import { showMessage } from 'react-native-flash-message'
import { useDispatch, useSelector } from 'react-redux'
import { Hit, Loginin } from '../../Action'
import logo from '../../assets/nestone.png'


export const Login = ({ navigation }) => {
    let dispatch = useDispatch()
    let [pas] = useState(false)
    let [username, setUsername] = useState('Mohammad')
    let [password, setPassword] = useState('123456789')
    const hit = useSelector(state => state.hit)
    const onPress1 = async () => {
        dispatch(Hit())
        try {
            await dispatch(Loginin(username, password))
            dispatch(Hit())
            navigation.push('Home')
        } catch (err) {
            dispatch(Hit())
            showMessage({
                message: "Invalid Credentials",
                hideOnPress: true,
                icon: 'warning',
                type: 'warning'
            })
        }
    }
    return <>
        <View style={styles.Header1}>
            <Image source={logo} style={styles.TextHeader} />
            <View style={styles.Parent} >
                <Text style={styles.LoginTxt}>Login Account</Text>
                <Text style={styles.LoginTxt1}>Enter Name and Password For Login </Text>
                <TextInput style={styles.username} placeholder='Username' onChangeText={val => setUsername(val)} value={username} />
                <TextInput secureTextEntry={true} style={styles.username} value={password} onChangeText={val => setPassword(val)} placeholder="Password" />
                {pas && <Text style={styles.red}>Invalid Credentials</Text>}
                {!hit && <TouchableOpacity style={styles.Signup} onPress={() => onPress1()} >
                    <Text style={ styles.white}>Login</Text>
                </TouchableOpacity>}
                {hit && <TouchableOpacity style={styles.Signup} disabled={true}  >
                    <Text style={styles.white}>Loading</Text>
                </TouchableOpacity>}
                <View style={styles.Login}>
                    <Text>Don`&apos`t Have Account ? </Text>
                    <TouchableOpacity onPress={() => { navigation.push('SignUp') }}><Text style={styles.blue} >Signup</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    Header1: {
        alignItems: 'center',
        color: "white",
        flex: 1
    },
    Login: {
        flex: 1,
        flexDirection: 'row',
    },
    LoginTxt:{
        fontSize: 25, fontWeight: "normal", marginLeft: 15, padding: 20 
    },
    LoginTxt1:{
        marginLeft: 15, padding: 10
    },
    Parent: {
        alignItems: 'center',
        flex: 1,
        justifyContent: "flex-start"
    },
    Signup: {
        backgroundColor: '#3F3F3F',
        borderRadius: 20,
        color: "white",
        marginBottom: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10
    },
    TextHeader: {
        marginTop: 30,
    },
    blue:{
        color:'blue'
    },
    red:{
        color:'red'
    },

    username: {
        borderBottomWidth: 1,
        margin: 20,
        width: 250,
    },
    white:{
        color:'white'
    }
});
