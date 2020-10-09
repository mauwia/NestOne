import * as React from 'react';
import { Text, View,StyleSheet,Image } from 'react-native';
import { useDispatch,useSelector,shallowEqual } from 'react-redux'

export default Post=()=> {
  const {list}=useSelector(state=>({list:Object.values(state.post).reverse()}),shallowEqual)

    return (
      <>
        {list.length===0 && !hit && <Text style={{color:'white',alignSelf:'center'}}>NO POST YET</Text>}
            {/* {list.length===0 &&  <ActivityIndicator size='large' color='white'/>} */}
            {
                list.map(post=>{
                // console.log(post.imagelink)
                    return<>{
                      post.imagelink ==='none' &&
                      <View style={styles.card} key={post._id}>

                <View style={{flexDirection:'row'}}>
                <Image source={{uri:`${post.userId.imagelink}`}} style={styles.cardImage}></Image>
                <Text style={{marginTop:20,color:'#008B8B',marginLeft:9}}>{post.userId.username}</Text>
                </View>
              <Text style={styles.Caption}>{post.caption}</Text>
                             
            </View>}</>
                })
            }   
      </>
    );
  }

  let styles=StyleSheet.create({
    Caption:{
        marginHorizontal:35,
        paddingBottom:20,
        fontSize:20,
        marginTop:10,
        color:"#008b8b"

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