import React from 'react';
import Soundboard from '../components/Soundboard.js'
import store from '../redux/store.js'
import {setNavigation, setSounds} from '../redux/actions.js'
import HeaderButton from '../components/HeaderButton.js'

class WeddellScreen extends React.Component{
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
                ["AAAAAA", require("../assets/Sounds/Weddell/AAAAAA.mp3")], 
                ["(sneezes)", require("../assets/Sounds/Weddell/(sneezes).mp3")], 
                ["baguette", require("../assets/Sounds/Weddell/baguette.mp3")], 
                ["bliss", require("../assets/Sounds/Weddell/bliss.mp3")], 
                ["d\'egff", require("../assets/Sounds/Weddell/d\'egff.mp3")], 
                ["d\'egg", require("../assets/Sounds/Weddell/d\'egg.mp3")], 
                ["egg!", require("../assets/Sounds/Weddell/egg!.mp3")], 
                ["egg! 2", require("../assets/Sounds/Weddell/egg!_2.mp3")], 
                ["egg", require("../assets/Sounds/Weddell/egg.mp3")], 
                ["fibsh", require("../assets/Sounds/Weddell/fibsh.mp3")], 
                ["fish", require("../assets/Sounds/Weddell/fish.mp3")], 
                ["geaaaagh", require("../assets/Sounds/Weddell/geaaaagh.mp3")], 
                ["gegg", require("../assets/Sounds/Weddell/gegg.mp3")], 
                ["gighphbh", require("../assets/Sounds/Weddell/gighphbh.mp3")], 
                ["guh", require("../assets/Sounds/Weddell/guh.mp3")], 
                ["l\'egg!", require("../assets/Sounds/Weddell/l\'egg!.mp3")], 
                ["l\'egg", require("../assets/Sounds/Weddell/l\'egg.mp3")], 
                ["lligkk", require("../assets/Sounds/Weddell/lligkk.mp3")], 
                ["mibph", require("../assets/Sounds/Weddell/mibph.mp3")], 
                ["mnnnbpbbhbhpth", require("../assets/Sounds/Weddell/mnnnbpbbhbhpth.mp3")], 
                ["murph!", require("../assets/Sounds/Weddell/murph!.mp3")], 
                ["Alien", require("../assets/Sounds/Weddell/Alien.mp3")], 
                ["Alien 2", require("../assets/Sounds/Weddell/Alien_2.mp3")], 
                ["Alien 3", require("../assets/Sounds/Weddell/Alien_3.mp3")], 
                ["Alien 4", require("../assets/Sounds/Weddell/Alien_4.mp3")], 
                ["Alien 5", require("../assets/Sounds/Weddell/Alien_5.mp3")], 
                ["Alien 6", require("../assets/Sounds/Weddell/Alien_6.mp3")], 
                ["AAAAA", require("../assets/Sounds/Weddell/AAAAA.mp3")], 
                ["AAAAAHHHHH", require("../assets/Sounds/Weddell/AAAAAHHHHH.mp3")], 
                ["AAAAGH", require("../assets/Sounds/Weddell/AAAAGH.mp3")], 
                ["AAAGHA", require("../assets/Sounds/Weddell/AAAGHA.mp3")], 
                ["AAAGHAAAA", require("../assets/Sounds/Weddell/AAAGHAAAA.mp3")], 
                ["AAGH", require("../assets/Sounds/Weddell/AAGH.mp3")], 
                ["AAGHHH", require("../assets/Sounds/Weddell/AAGHHH.mp3")], 
                ["AANNNNAAAGGHHHH", require("../assets/Sounds/Weddell/AANNNNAAAGGHHHH.mp3")], 
                ["BNNNGHPHH", require("../assets/Sounds/Weddell/BNNNGHPHH.mp3")], 
                ["BEHH", require("../assets/Sounds/Weddell/BEHH.mp3")], 
                ["BGGHHNNHHH", require("../assets/Sounds/Weddell/BGGHHNNHHH.mp3")], 
                ["BNNNGGHHPH", require("../assets/Sounds/Weddell/BNNNGGHHPH.mp3")], 
                ["BNNNGH", require("../assets/Sounds/Weddell/BNNNGH.mp3")], 
                ["Beh", require("../assets/Sounds/Weddell/Beh.mp3")], 
                ["Bleaahh", require("../assets/Sounds/Weddell/Bleaahh.mp3")], 
                ["Bleeaaaahhh", require("../assets/Sounds/Weddell/Bleeaaaahhh.mp3")], 
                ["Fair", require("../assets/Sounds/Weddell/Fair.mp3")], 
                ["GAAAAGHAA", require("../assets/Sounds/Weddell/GAAAAGHAA.mp3")], 
                ["GAGHAAGAHH", require("../assets/Sounds/Weddell/GAGHAAGAHH.mp3")], 
                ["GEELOLIGLET", require("../assets/Sounds/Weddell/GEELOLIGLET.mp3")], 
                ["HAAAAAAAA", require("../assets/Sounds/Weddell/HAAAAAAAA.mp3")], 
                ["Hello", require("../assets/Sounds/Weddell/Hello.mp3")], 
                ["MMGGGNN", require("../assets/Sounds/Weddell/MMGGGNN.mp3")], 
                ["MMMGHHH", require("../assets/Sounds/Weddell/MMMGHHH.mp3")], 
                ["Move", require("../assets/Sounds/Weddell/Move.mp3")], 
                ["Rats", require("../assets/Sounds/Weddell/Rats.mp3")], 
                ["Trumpet", require("../assets/Sounds/Weddell/Trumpet.mp3")], 
                ["UEAAGHH", require("../assets/Sounds/Weddell/UEAAGHH.mp3")]
            ]
        }))
    }

    render(){
        return(
            <Soundboard navigation={this.props.navigation}/>
        )
    }
}

export default WeddellScreen