import * as React from 'react';
import { Image ,StyleSheet} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import _ from 'lodash'
import {useSelector,shallowEqual} from 'react-redux'

export const Images=()=> {
    // let array=_.chunk(["blue","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue",],3)
  const {list}=useSelector(state=>({list:_.chunk(Object.values(state.user).reverse(),3)}),shallowEqual)
    return (
      <Grid>
          <Col>
          {
              list.map((item)=>{
                //   console.log(item)
                  return<Row key={item[0]+'id'}>
                      {item.map((sub)=>{
                          console.log(sub.imagelink)
                            return<>{sub.imagelink!=='none' &&<Col key={sub._id}  size={33}>
                             <Image style={styles.image} source={{uri:`${sub.imagelink}`}}/> 
                            </Col>}</>
                      })}
                </Row>
              })
          }
      
          </Col>

      </Grid>
    );
  }

let styles=StyleSheet.create({
  image:{borderColor:'white',borderWidth:1,height:100}
})