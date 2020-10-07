import React, { useEffect, useState } from 'react'
import { View ,Text,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native'
// import { color } from 'react-native-reanimated'
// import AsyncStorage from '@react-native-community/async-storage'
import SecureStorage from 'react-native-secure-storage'
import Valley from './card.jpg'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
import { userPosts } from '../../Action'
import defaultAvatar from '../Auth/default.png' 
import { color } from 'react-native-reanimated'

export const Profile=({navigation})=>{
    let dispatch=useDispatch()
    let [profile,setProfile]=useState({})
    const {list}=useSelector(state=>({list:Object.values(state.user).reverse()}),shallowEqual)
    console.log(list)
    useEffect(()=>{
        const fetchPro=async()=>{

            let profile1=await SecureStorage.getItem("accessToken")
            // console.log("PROFILE" , profile)
            profile1=JSON.parse(profile1)
            setProfile({...profile1})
          
            await dispatch(userPosts())
            
        }
       fetchPro()
    },[])
    // console.log(profile)
    return<ScrollView><View style={styles.Parent3} >
        <View style={styles.ProfilDra}>
        <TouchableOpacity style={styles.iconPar} onPress={()=>{navigation.openDrawer()}} >
            <Icon name='bars' style={styles.Icon1}></Icon>
        </TouchableOpacity>
        <View style={styles.CenterData}>
        <Image source={{uri: `${profile.imagelink}`}} style={styles.Image3}/>
            <Text style={styles.name}>{profile.username}</Text>
        <View style={styles.ProfilCard}>
            <View>
            <Text style={styles.innerTextCard}>Status</Text>
            <Text style={styles.innerTextCard1}>{profile.status}</Text>
            <Text style={styles.innerTextCard}>Email</Text>
            <Text style={styles.innerTextCard1}>{profile.email}</Text>
            </View>
            
            </View>
        </View>
        </View>
       
    </View>
    <View>

    </View>{
        list.map(post=>{
            return<View style={styles.card}>
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
     {/* <View style={styles.postSec}>
    <Text style={styles.pictureHeader}>PICTURES</Text>
    <View style={styles.pictureGrp}>
    <View style={{flex:1}}>
    <Image source={defaultAvatar} style={styles.pictureImg}/></View>
    <View style={{flex:1}}>
    <Image source={defaultAvatar} style={styles.pictureImg}/></View>
    <View style={{flex:1}}>
    <Image source={defaultAvatar} style={styles.pictureImg}/></View>
    
    </View>
    
        </View> */}
    </ScrollView>
}

let styles=StyleSheet.create({
    Caption:{
        marginLeft:20,
        paddingBottom:20,
        fontSize:20,
        marginTop:10,
        color:'#008B8B'

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
        marginTop:70,
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
    pictureImg:{
        // alignSelf:'stretch',
        // width:100,
        // height:200,
        height: 200,
        width: 100,
        // flex: 2,
    },
    pictureGrp:{
        flex:1,
        flexDirection:'row'
    },
    pictureHeader:{
        color:'#008B8B',fontSize:20,fontWeight:'bold',
        
    },
    postSec:{
        position:"relative",
        top:90,
        flexDirection:'column',
        marginLeft:20,
        flex:1,
        flexGrow:1,
        alignItems:'flex-start'
    },  
    innerTextCard1:{
        color:"#008B8B",
        alignSelf:'flex-end',
        position:'relative',
        bottom:18,
    },
    innerTextCard:{
        color:"#008B8B",
        marginTop:20,
        // marginBottom:40
    },
    name:{
        fontSize:20,
        marginTop:8,
        alignSelf:'center',
        color:'white'
    },
    CenterData:{
        alignSelf:'center'
    },
    ProfilCard:{
        // alignSelf:'stretch',
        position:'relative',
        top:50,
        backgroundColor:'white',
        color:'#008B8B',
        borderRadius:10,
        paddingHorizontal:20,
        width:320
    },
    ProfilDra:{
        backgroundColor:'#008B8B',
        // width:100,
        flex:1,
        alignItems:'flex-start',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    },
    Image3:{    
        width:100,
        height:100,
        borderRadius:100,
        alignSelf:'center'
    },
    Parent3:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-start',
    },
    IconPar:{
        alignSelf:'flex-start',      
    },
    Icon1:{
        alignSelf:'flex-start',
        color:'#008B8B',
        backgroundColor:'white',
        borderRadius:10,
        width:50,
        fontSize:30,
        margin:20,
        paddingLeft:11,
        paddingTop:10,
        paddingBottom:10,
    }
})