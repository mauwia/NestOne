import React from 'react'
import { Text,Navigator,View,StyleSheet } from 'react-native'
export const Navbar =()=>{
    return<>
       <View style={styles.Navbar1}>
            <Text style={styles.TextHeader}>Nest One</Text>
       </View>
    </>
}

const styles = StyleSheet.create({
     TextHeader:{
         color:"#3F3F3F",
         fontSize:40,
         
     },
  Navbar1:{
      color:"white",
      flex:1,
      alignItems:'center'
  }
});