/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-color-literals */
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import logo from './assets/nestone.png'
export const Welcome = ({ navigation }) => {
    return <View style={styles.Main}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.testyle} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <TouchableOpacity style={styles.Signup} onPress={() => navigation.navigate('SignUp')} ><Text style={styles.whites}>Sign Up</Text></TouchableOpacity>
        <TouchableOpacity style={styles.Login}><Text style={styles.whites} onPress={() => navigation.navigate('Login')} >Login</Text></TouchableOpacity>
    </View>
}
let styles = StyleSheet.create({
    Login: {
        backgroundColor: '#3F3F3F',
        borderRadius: 20,
        color: "white",
        marginVertical: 10,
        paddingBottom: 10,
        paddingHorizontal:50,
        paddingTop: 10
    },
    Main: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    Signup: {
        backgroundColor: 'purple',
        borderRadius: 20,
        marginVertical: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10

    },
    logo: {
        marginBottom: 10
    },
    testyle: {
        alignSelf: 'center',
        color: '#008b8b',
        fontSize: 20,
        marginHorizontal: 50,
        marginVertical: 20,
        textAlign: 'center'
    },
    whites:{
        color:'white',
    }
})

export default Welcome