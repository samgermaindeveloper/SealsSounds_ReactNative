import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, ImageBackground } from 'react-native';
import { Audio } from 'expo-av'
import store from '../redux/store.js'
import {setBackgroundImage} from '../redux/actions.js'
//import Sound from 'react-native-sound';
//import SoundPlayer from 'react-native-sound-player'

const images = [
    'https://i.imgur.com/SrHW4IM.jpg',
    'https://i.imgur.com/Gry9L09.jpg',
    'https://i.imgur.com/KHOiSnk.jpg',
    'https://i.imgur.com/iHbEQHn.jpg',
    'https://i.imgur.com/fdMLChE.jpg',
    'https://i.imgur.com/6NP1nt9.jpg',
    'https://i.imgur.com/HLcRMp4.jpg',
    'https://i.imgur.com/tjR0Ik3.jpg',
    'https://i.imgur.com/2f5tTlq.jpg',
    'https://i.imgur.com/vBqigcw.jpg',
    'https://i.imgur.com/LrSe7kk.jpg',
    'https://i.imgur.com/K7grPoK.jpg',
    'https://i.imgur.com/mlzsnw8.jpg',
    'https://i.imgur.com/uoUWReH.jpg',
    'https://i.imgur.com/k2sbmY4.jpg',
    'https://i.imgur.com/L3KnJEt.jpg'
]

//const backgroundImage = images[Math.floor(Math.random() * 16)]

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    row:{
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin:10
    },
    button:{
        backgroundColor: '#37E8E8',
        justifyContent: 'center',
        width:'31%',
        borderRadius: 5
    },
    text:{
        textAlign:'center',
        color:'white',
        fontSize:15
    }
})

const playSound = async function(sound){
    const args = {
        playsInSilentModeIOS:true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX
    }
    const s = await Audio.Sound.createAsync(sound, args)
    await s.sound.playAsync()
}

/**
 * Creates a touchable button component that plays a sound when pressed
 * @param {Sound Object} props.sound : An object of type Sound
 * @param {String} props.name : The name of the sound
 */
const SoundButton = (props) => {
    return(
        <TouchableOpacity 
            style={styles.button} 
            onPress={() => playSound(props.sound)}
            >
            <Text style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
    )
}

/**
 * A row of sound buttons
 * @param {[[Sound Object,String]]} props.sounds : An array where each is a 2d array with the Sound object and the name of the sound
 */
const Row = (props) => {
    return(
        <View style={styles.row}>
            {props.sounds.map(sound => <SoundButton key={sound[0]} name={sound[0]} sound={sound[1]} />)}
        </View>
    )
}

const Board = () => {
    let curRowSounds = []
    const soundLen = store.getState().sounds.sounds.length
    let count = 0
    return(
        <ScrollView>
            {store.getState().sounds.sounds.map((sound,i) => {
                curRowSounds.push(sound)
                if (curRowSounds.length >= 3){
                    let row = <Row key={count} sounds={curRowSounds} />
                    curRowSounds = []
                    count += 1
                    return row
                }else if (soundLen === i + 1){
                    count += 1
                    return <Row key={count} sounds={curRowSounds} />
                }
            })}
        </ScrollView>
    )
        
}

/**
 * @param {[String]} sounds: The names of the soundFiles, excluding the extension
 * @param {String} folder: The folder that the sound files are stored in
 */
class Soundboard extends React.Component {

    constructor(props){
        super(props)
        const backgroundImage = images[Math.floor(Math.random() * 16)]
        this.props.navigation.addListener('willFocus', () =>{
            store.dispatch(setBackgroundImage({image:{uri: backgroundImage}}))
        })
        store.dispatch(setBackgroundImage({image:{uri: backgroundImage}}))
    }

    async playSound(soundName){
        const args = {
            playsInSilentModeIOS:true,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX
        }
        const {sound, status} = await Audio.Sound.createAsync(this.state.soundNames[soundName], args)
        sound.playAsync()
    }

    onError(error){
        store.dispatch(setBackgroundImage({image: require('../assets/images/default_seal.jpg')}))
    }

    render(){
        return(
            <ImageBackground style={styles.container} source={store.getState().backgroundImage.image} onError={this.onError.bind(this)}>
                <Board  />
            </ImageBackground>
        )
    }
}

export default Soundboard