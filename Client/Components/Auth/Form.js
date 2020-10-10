/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import defaultAvatar from './default.png'
import ImagePicker from 'react-native-image-picker'
import { showMessage } from 'react-native-flash-message'
import { useDispatch, useSelector } from 'react-redux'
import { details, Hit } from '../../Action'
import Axios from 'axios'

export const Form = ({ navigation }) => {

    const dispatch = useDispatch()
    const [pas] = useState(false)
    const hit = useSelector(state => state.hit)
    const [avatar, setAvatar] = useState(defaultAvatar)
    const [fullname, setfullname] = useState('')
    const [username, setUsername] = useState('')
    const [status, setstatus] = useState('')

    const handlePicker = () => {
        ImagePicker.showImagePicker({}, response => {
            if (response.didCancel) {
                setAvatar(defaultAvatar)
            }
            else {
                setAvatar(response)
            }
        })
    }

    const cloudnaryUpload = async (photo) => {
        let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dk8xi5rcy/upload';
        let data = {
            "file": photo,
            "upload_preset": "Bazzz1999"
        }


        try {
            const config = {
                headers: { "content-type": "application/json" },
            };
            let result = await Axios.post(CLOUDINARY_URL, data, config)

            return result.data
        } catch (err) {
            console.log(err)
        }
    }
    let onPress1 = async () => {
        try {

            if (fullname.length && username.length && status.length) {
                dispatch(Hit())
                const source = "data:image/jpeg;base64," + avatar.data;
                let data = await cloudnaryUpload(source)
                await dispatch(details({ username, fullname, status, imagelink: data.secure_url }))
                dispatch(Hit())
                navigation.push('Login')
            } else {
                showMessage({
                    message: "Give Complete And Correct Info",
                    hideOnPress: true,
                    icon: 'warning',
                    type: 'warning'
                })
            }
        } catch (err) {
            dispatch(Hit())
            showMessage({
                message: "Invalid Credentials",
                hideOnPress: true,
                icon: 'warning',
                type: 'warning'
            })
            navigation.push('SignUp')
        }
    }


    return <>
        <View style={styles.Parent1}>
            <TouchableOpacity onPress={() => { handlePicker() }}><Image source={avatar} style={styles.Image1} /></TouchableOpacity>
            <TextInput placeholder='Full Name' onChangeText={value => setfullname(value)} value={fullname} style={styles.TextInput2} />
            <TextInput placeholder='Username' onChangeText={value => setUsername(value)} value={username} style={styles.TextInput2} />
            <TextInput placeholder='Status' onChangeText={value => setstatus(value)} value={status} style={styles.TextInput2} />
            {pas && <Text style={styles.Msg}>Give Complete And Correct Information</Text>}
            {!hit && <TouchableOpacity onPress={() => onPress1()} style={styles.Submission}><Text style={styles.whites}>Submit</Text></TouchableOpacity>}
            {hit && <TouchableOpacity disabled={true} style={styles.Submission}><Text style={styles.whites}>Loading...</Text></TouchableOpacity>}
        </View>
    </>

}
let styles = StyleSheet.create({
   
    Image1: {
        borderRadius: 200,
        height: 200,
        marginBottom: 20,
        marginTop: 50,
        width: 200,
    },
    Msg:{
        color:'red',
    },
    Parent1: {
        alignItems: 'center',
        flex: 1,
        justifyContent: "flex-start"
    },
    Submission: {
        backgroundColor: 'purple',
        borderRadius: 20,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10
    },
    TextInput2: {
        borderBottomWidth: 1,
        marginBottom: 20,
        width: 250
    },
    whites:{
        color:'white'
    }

})