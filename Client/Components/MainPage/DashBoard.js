import React,{useEffect,useState} from 'react'
import { View,Text,TouchableOpacity,StyleSheet,Image, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import SecureStorage from 'react-native-secure-storage'
import ImagePicker from 'react-native-image-picker'
import {GetPosts} from '../../api/postapi'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
import { addPost,getPosts } from '../../Action'

import defaultImage from '../Auth/default.png'
import Valley from './card.jpg'


export const Dashboard=({navigation})=>{

    let dispatch=useDispatch()
    const [avatar,setAvatar]=useState()
    const [caption,setCaption]=useState('')
    const handlePicker=()=>{
        ImagePicker.showImagePicker({},response=>{
            if(response.didCancel){
                setAvatar(defaultAvatar)
            }
            else{
            console.log(response.uri,response.type,response.fileName)
            setAvatar(response.uri)
            
        }
        })
    }
    const onPress1=async()=>{
        // if(!avatar){
        //     setAvatar()
        // }
        let name=await SecureStorage.getItem("accessToken")
        name=JSON.parse(name)
        console.log('hello')
        dispatch(addPost({caption:caption,imagelink:avatar?avatar:'none',userId:name._id}))
        setCaption('')
        setAvatar(null)
    }
    const {list}=useSelector(state=>({list:Object.values(state.post).reverse()}),shallowEqual)
    // console.log(list)
    useEffect(()=>{
        const fetchProfile=async()=>{
            await dispatch(getPosts())
        }
        fetchProfile()
    },[])
    return<ScrollView style={{backgroundColor:'#008B8B'}}>
        <View style={styles.Parent3}>
            <View style={styles.IconPar}>
            <TouchableOpacity style={styles.iconPar} onPress={()=>{navigation.openDrawer()}} >
            <Icon name='bars' style={styles.Icon1}/>
        </TouchableOpacity></View>
        <View style={styles.InputStatus}>
            <TextInput style={styles.status} value={caption} onChangeText={val=>setCaption(val)} placeholder='Enter Your Status'/>
        {avatar &&<Image source={{uri:`${avatar}`}} style={{marginLeft:15,marginTop:10,alignSelf:'stretch',padding:20,width:270,height:250}}/>}
            <View style={styles.CameraView}><TouchableOpacity style={{marginLeft:20}} onPress={()=>{handlePicker()}}><Icon name='camera' style={{fontSize:30,color:'#008B8B'}}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={{borderRadius:10,marginLeft:170,backgroundColor:'#008B8B',color:'white',padding:5}}>
            <Text name='caret-square-right' style={{fontSize:15,color:'white'}} onPress={()=>onPress1()}>POST</Text>
            </TouchableOpacity>
            </View>
        </View>
        <View>
            {
                list.map(post=>{
                    console.log(post.imagelink)
                    return<View style={styles.card} key={post._id}>
                <View style={{flexDirection:'row'}}>
                <Image source={{uri:`${post.userId.imagelink}`}} style={styles.cardImage}></Image>
                <Text style={{marginTop:20,color:'#008B8B',marginLeft:9}}>{post.userId.username}</Text>
                </View>
                <Text style={styles.Caption}>{post.caption}</Text>
                <View style={styles.uploadImageParent}>
                <Image source={Valley} style={styles.uploadImage}/>
                </View>
            </View>
                })
            }    
           
        </View>
        
    </View>
    </ScrollView>
}
let styles=StyleSheet.create({
    Caption:{
        marginHorizontal:35,
        paddingBottom:20,
        fontSize:20,
        marginTop:10

    },
    uploadImageParent:{
        borderRadius:10,
        alignSelf:'stretch'
    },
    uploadImage:{
        // borderRadius:10,
        width:340,
        alignSelf:'stretch'
        // marginLeft:35 ,
        // padding:40
    },
    card:{
        borderRadius:10,
        backgroundColor:'white',
        margin:10,
        paddingBottom:10
    },
    cardImage:{
        marginTop:10,
        marginLeft:10,
        borderRadius:30,
        width:50,
        height:50
    },
    status:{
        borderBottomWidth:1,
        // width:100
    },
    CameraView:{
        padding:10,
        paddingTop:20,
        flexDirection:'row'
    },
    InputStatus:{
        borderRadius:10,
        // height:10?0,
        backgroundColor:'white',
        margin:20,
        padding:10
    },
    Parent3:{
        flex:1,
        // flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'stretch',
        backgroundColor:'#008B8B',

    },
    IconPar:{
        alignSelf:'flex-start'
    },
    Icon1:{
        color:'#008B8B',
        alignSelf:'flex-start',
        backgroundColor:'white',
        borderRadius:10,
        fontSize:30,
        marginTop:20,
        marginHorizontal:20,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
        shadowOffset: {width: 0, height: 1},
        shadowColor: '#470000',
        shadowOpacity: 1,
        elevation: 5,
    }
})