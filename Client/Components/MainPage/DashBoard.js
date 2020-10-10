import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import SecureStorage from 'react-native-secure-storage'
import ImagePicker from 'react-native-image-picker'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { addPost, getPosts, Hit } from '../../Action'
import Axios from 'axios'
import { showMessage } from 'react-native-flash-message'


export const Dashboard = ({ navigation }) => {

    let dispatch = useDispatch()
    const [avatar, setAvatar] = useState('')
    const [caption, setCaption] = useState('')
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

    const handlePicker = () => {
        ImagePicker.showImagePicker({}, response => {
            if (response.didCancel) {

                setAvatar('')
            }
            else {
                // console.log(response)
                const source = "data:image/jpeg;base64," + response.data;
                setAvatar(source)

            }
        })
    }
    const onPress1 = async () => {
        if (avatar || caption) {
            try {
                dispatch(Hit())
                let name = await SecureStorage.getItem("accessToken")
                name = JSON.parse(name)
                let data = await cloudnaryUpload(avatar)
                dispatch(addPost({ caption: caption ? caption : 'none', imagelink: avatar ? data.secure_url : 'none', userId: name._id }))
                setCaption('')
                setAvatar('')
                dispatch(Hit())
            } catch (err) {
                dispatch(Hit())
                showMessage({
                    message: "Internet Error",
                    hideOnPress: true,
                    icon: 'warning',
                    type: 'warning'
                })
            }
        } else {
            showMessage({
                message: "Add Post aur Picture",
                hideOnPress: true,
                icon: 'warning',
                type: 'warning'
            })
        }
    }
    const { list } = useSelector(state => ({ list: Object.values(state.post).reverse() }), shallowEqual)
    const hit = useSelector(state => state.hit)
    const isFocused = useIsFocused();
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                dispatch(Hit())
                await dispatch(getPosts())
                dispatch(Hit())
            } catch (err) {
                showMessage({
                    message: "No Internet Connection",
                    hideOnPress: true,
                    icon: 'warning',
                    type: 'warning'
                })
                dispatch(Hit())

            }
        }
        fetchProfile()
    }, [isFocused])
    return <ScrollView style={styles.Background}>
        <View style={styles.Parent3}>
            <View style={styles.IconPar}>
                <TouchableOpacity style={styles.iconPar} onPress={() => { navigation.openDrawer() }} >
                    <Icon name='bars' style={styles.Icon1} />
                </TouchableOpacity></View>
            <View style={styles.InputStatus}>
                <TextInput placeholderTextColor='#008b8b' style={styles.status} value={caption} onChangeText={val => setCaption(val)} placeholder='Enter Your Status' />
                {avatar.length > 1 && <Image source={{ uri: `${avatar}` }} style={styles.Postingpic} />}
                <View style={styles.CameraView}><TouchableOpacity style={styles.CAMERA} onPress={() => { handlePicker() }}><Icon name='camera' style={styles.CameraIcon} />
                </TouchableOpacity>

                    <TouchableOpacity style={styles.PostBtn}>
                        {!hit && <Text name='caret-square-right' style={styles.PostTxt} onPress={() => onPress1()}>POST</Text>}
                    </TouchableOpacity>
                </View>
            </View>

            <View>

                {hit && <ActivityIndicator size='large' color='white' />}
                {list.length === 0 && !hit && <Text style={styles.NoPost}>NO POST YET</Text>}
                {
                    list.map(post => {
                        return <View style={styles.card} key={post._id}>

                            <View style={styles.Cardchild1}>
                                <Image source={{ uri: `${post.userId.imagelink}` }} style={styles.cardImage}></Image>
                                <Text style={styles.usernameCard}>{post.userId.username}</Text>
                            </View>
                            {post.caption != 'none' && <Text style={styles.Caption}>{post.caption}</Text>}
                            {post.imagelink !== 'none' && <Image source={{ uri: `${post.imagelink}` }} style={styles.cardImage1} />}


                        </View>
                    })
                }

            </View>

        </View>
    </ScrollView>
}
let styles = StyleSheet.create({
    Background:{ backgroundColor: '#008B8B' },
    CAMERA:{ marginLeft: 20 },
    CameraIcon:{ color: '#008B8B', fontSize: 30 },
    CameraView: {
        padding: 10,
        paddingTop: 20,
        flexDirection: 'row'
    },
    Caption: {
        color: "#008b8b",
        fontSize: 20,
        marginHorizontal: 35,
        marginTop: 10,
        paddingBottom: 20

    },
    Cardchild1:{ flexDirection: 'row' },
    Icon1: {
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 10,
        color: '#008B8B',
        elevation: 5,
        fontSize: 30,
        marginHorizontal: 20,
        marginTop: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        shadowColor: '#470000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
    },
    IconPar: {
        alignSelf: 'flex-start'
    },
    InputStatus: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 20,
        padding: 10
    },
    NoPost:{ alignSelf: 'center', color: 'white' },
    Parent3: {
        alignItems: 'stretch',
        backgroundColor: '#008B8B',
        flex: 1,
        justifyContent: 'flex-start',

    },
    PostBtn:{ borderRadius: 10, color: 'white', marginLeft: 170, padding: 5 },
    PostTxt:{ color: '#008B8B', fontSize: 15 },
    Postingpic:{ alignSelf: 'stretch', height: 250, marginLeft: 15, marginTop: 10, padding: 20, width: 270 },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
        paddingBottom: 10
    },
    cardImage: {
        borderRadius: 30,
        height: 50,
        marginLeft: 10,
        marginTop: 10,
        width: 50
    },
    cardImage1: {

        alignSelf: 'stretch',
        height: 500
    },
    status: {
        borderBottomWidth: 1,
        borderColor: '#008b8b',

    },
    usernameCard:{ color: '#008B8B', marginLeft: 9, marginTop: 20 },
   
})