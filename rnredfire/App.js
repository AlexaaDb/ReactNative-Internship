import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import {useDispatch,useSelector} from 'react-redux';
import { getArticles } from './src/store/actions';

import Authenticate from './src/authenticate';

const App=() =>{
  /* const articles = useSelector(state=>state.articles);
  const dispatch= useDispatch(); */
  
  /* useEffect(()=>{
    dispatch(getArticles())
  },[dispatch]) */

  return (
    <View>
      <Header
        leftComponent={{icon:'menu',color:'#fff'}}
        centerComponent={{text:'MY TITLE',style:{color:'#fff'}}}
        rightComponent={{icon:'home',color:'#fff'}}
      />
      {/* <Text>Hello</Text> */}
      <Authenticate/>
    </View>
  );
}

export default App;