/* eslint-disable react-native/sort-styles */
import * as React from 'react';
import { Text, View,StyleSheet,Image } from 'react-native';
import { useSelector,shallowEqual } from 'react-redux'

export const Post=()=> {
  const {list}=useSelector(state=>({list:Object.values(state.post).reverse()}),shallowEqual)

    return (
      <>
        {list.length===0  && <Text style={styles.NoPost}>NO POST YET</Text>}
            {/* {list.length===0 &&  <ActivityIndicator size='large' color='white'/>} */}
            {
                list.map(post=>{
                    return<>{
                      post.imagelink ==='none' &&
                      <View style={styles.card} key={post._id}>

                <View style={styles.ViewFlex}>
                <Image source={{uri:`${post.userId.imagelink}`}} style={styles.cardImage}></Image>
                <Text style={styles.username}>{post.userId.username}</Text>
                </View>
              <Text style={styles.Caption}>{post.caption}</Text>
                             
            </View>}</>
                })
            }   
      </>
    );
  }

  let styles=StyleSheet.create({
    CameraView:{
        padding:10,
        paddingTop:20,
        flexDirection:'row'
    },
    Caption:{
        color:"#008b8b",
        fontSize:20,
        marginHorizontal:35,
        marginTop:10,
        paddingBottom:20

    },
    Icon1:{
        alignSelf:'flex-start',
        backgroundColor:'white',
        borderRadius:10,
        color:'#008B8B',
        elevation: 5,
        fontSize:30,
        marginHorizontal:20,
        marginTop:20,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
    },
    IconPar:{
        alignSelf:'flex-start'
    },
    InputStatus:{
        backgroundColor:'white',
        borderRadius:10,
        margin:20,
        padding:10
    },
    NoPost:{alignSelf:'center',color:'#008b8b'},
    Parent3:{
        alignItems:'stretch',
        backgroundColor:'#008B8B',
        flex:1,
        justifyContent:'flex-start',

    },
    ViewFlex:{
        flexDirection:'row'
    },
    card:{
        backgroundColor:'white',
        borderRadius:10,
        margin:10,
        paddingBottom:10
    },
    cardImage:{
        borderRadius:30,
        height:50,
        marginLeft:10,
        marginTop:10,
        width:50
    },
    cardImage1:{
        // marginTop:10,
        // width:100,
        alignSelf:'stretch',
        height:500
    },
    status:{
        borderBottomWidth:1,
        borderColor:'#008b8b',
        // width:100
    },
    uploadImage:{
        width:340,
        alignSelf:'stretch'
        // marginLeft:35 ,
        // padding:40
    },
    uploadImageParent:{
        alignSelf:'stretch',
        borderRadius:10
    },
    username:{color:'#008B8B',marginLeft:9,marginTop:20}
})