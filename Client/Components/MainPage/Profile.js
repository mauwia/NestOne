import React, { useEffect, useState } from 'react'
import { View ,Text,TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native'
import SecureStorage from 'react-native-secure-storage'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useDispatch} from 'react-redux'
import { Hit, userPosts } from '../../Action'
import { Tabs } from './Image/Tabs'

export const Profile=({navigation})=>{
    let dispatch=useDispatch()
    let [profile,setProfile]=useState({})
    // console.log(list)
    useEffect(()=>{
        const fetchPro=async()=>{
            dispatch(Hit())
            let profile1=await SecureStorage.getItem("accessToken")
            // console.log("PROFILE" , profile)
            profile1=JSON.parse(profile1)
            setProfile({...profile1})
          
            await dispatch(userPosts())
            dispatch(Hit())
            
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
        <Tabs/>

   

     </ScrollView>
}

let styles=StyleSheet.create({
   
    CenterData:{
        alignSelf:'center'
    },
    Icon1:{
        alignSelf:'flex-start',
        backgroundColor:'white',
        borderRadius:10,
        color:'#008B8B',
        fontSize:30,
        margin:20,
        paddingBottom:10,
        paddingLeft:11,
        paddingTop:10,
        width:50,
    },
  
    Image3:{    
        alignSelf:'center',
        borderRadius:100,
        height:100,
        width:100
    },
  
    Parent3:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-start',
        marginBottom:52
    },
    ProfilCard:{
        backgroundColor:'white',
        borderRadius:10,
        color:'#008B8B',
        paddingHorizontal:20,
        position:'relative',
        top:50,
        width:320
    },
    ProfilDra:{
        alignItems:'flex-start',
        backgroundColor:'#008B8B',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        flex:1,
    },
    
   
    innerTextCard:{
        color:"#008B8B",
        marginTop:20,
        // marginBottom:40
    },
    innerTextCard1:{
        alignSelf:'flex-end',
        bottom:18,
        color:"#008B8B",
        position:'relative',
    },
    name:{
        alignSelf:'center',
        color:'white',
        fontSize:20,
        marginTop:8
    },
  
})