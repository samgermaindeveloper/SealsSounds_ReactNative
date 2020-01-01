import React from 'react'
import {Button, StyleSheet} from 'react-native'
import store from '../redux/store.js'

const styles = StyleSheet.create({
    headerButton:{
      height:50,
      width:50,
      backgroundColor:'blue'
    }
  });

const HeaderButton = () =>{
  return(
    <Button 
        title="Image→"
        style={styles.headerButton}
        onPress={() => store.getState().navigation.navigation.navigate("image")}
    />
  )
}

export default HeaderButton