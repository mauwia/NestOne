import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import _ from 'lodash'
import {useSelector,shallowEqual} from 'react-redux'
import { Tabs } from './Tabs';
export default Images=()=> {
    // let array=_.chunk(["blue","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue","red","blue",],3)
  const {list}=useSelector(state=>({list:_.chunk(Object.values(state.user).reverse(),3)}),shallowEqual)
    return (
      <Grid>
          <Col>
          {
              list.map((item,key)=>{
                //   console.log(item)
                  return<Row key={key}>
                      {item.map((sub,key1)=>{
                          console.log(sub.imagelink)
                            return<>{sub.imagelink!=='none' &&<Col key={sub._id}  size={33}>
                             <Image style={{height:100,borderColor:'white',borderWidth:1}} source={{uri:`${sub.imagelink}`}}/> 
                            </Col>}</>
                      })}
                </Row>
              })
          }
         {/* <Row>
            <Col style={{backgroundColor:'blue', padding:20}} size={33}></Col>
          <Col style={{backgroundColor:'red', padding:20}} size={33}></Col>
          <Col style={{backgroundColor:'blue', padding:20}} size={33}></Col>
          </Row> */}
          {/* <Row>
            <Col style={{backgroundColor:'red', padding:20}} size={33}></Col>
          <Col style={{backgroundColor:'blue', padding:20}} size={33}></Col>
          <Col style={{backgroundColor:'red', padding:20}} size={33}></Col>
          </Row> */}
          </Col>

      </Grid>
    );
  }