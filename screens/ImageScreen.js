import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import store from '../redux/store.js'

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%'
    }
})

class ImageScreen extends React.Component{
    render(){
        return(
            <ImageBackground style={styles.container} source={store.getState().backgroundImage.image}></ImageBackground>
        )
    }
}

export default ImageScreen