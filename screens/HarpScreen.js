import React from 'react';
import Soundboard from '../components/Soundboard.js'
import store from '../redux/store.js'
import {setNavigation, setSounds} from '../redux/actions.js'
import HeaderButton from '../components/HeaderButton.js'

class HarpScreen extends React.Component{
    static navigationOptions = {
        headerRight: (
          <HeaderButton />  
        )
      }

    constructor(props){
        super(props)
        store.dispatch(setNavigation({navigation:this.props.navigation}))
        store.dispatch(setSounds({
            sounds: [
                ["Ag", require("../assets/Sounds/Harp/Ag.mp3")], 
                ["BugOff", require("../assets/Sounds/Harp/BugOff.mp3")], 
                ["GreenDay", require("../assets/Sounds/Harp/GreenDay.mp3")], 
                ["Hallelujah", require("../assets/Sounds/Harp/Hallelujah.mp3")], 
                ["Ma", require("../assets/Sounds/Harp/Ma.mp3")], 
                ["Mom", require("../assets/Sounds/Harp/Mom.mp3")], 
                ["Mom2", require("../assets/Sounds/Harp/Mom2.mp3")], 
                ["Mrrh", require("../assets/Sounds/Harp/Mrrh.mp3")], 
                ["Naa", require("../assets/Sounds/Harp/Naa.mp3")], 
                ["Umba", require("../assets/Sounds/Harp/Umba.mp3")], 
                ["Wow", require("../assets/Sounds/Harp/Wow.mp3")], 
                ["ahHgh", require("../assets/Sounds/Harp/ahHgh.mp3")], 
                ["ahHhghGa", require("../assets/Sounds/Harp/ahHhghGa.mp3")], 
                ["brrrga", require("../assets/Sounds/Harp/brrrga.mp3")], 
                ["haa", require("../assets/Sounds/Harp/haa.mp3")], 
                ["mmmmmmmmmmmm", require("../assets/Sounds/Harp/mmmmmmmmmmmm.mp3")], 
                ["mrhrmph", require("../assets/Sounds/Harp/mrhrmph.mp3")]
            ]
        }))
    }

    render(){
        return(
            <Soundboard navigation={this.props.navigation}/>
        )
    }
}

export default HarpScreen