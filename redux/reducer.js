import {combineReducers} from 'redux'
import {SET_NAVIGATION, SET_SOUNDS, SET_BACKGROUND_IMAGE} from './actions'

const navigationReducer = (state = [], action) => {
  if (action.type === SET_NAVIGATION) return action.payload
  return state
}

const soundsReducer = (state = [], action) => {
  if (action.type === SET_SOUNDS) return action.payload
  return state
}

const backgroundImageReducer = (state = [], action) => {
  if (action.type === SET_BACKGROUND_IMAGE) return action.payload
  return state
}

const reducer = combineReducers({
  navigation: navigationReducer,
  sounds: soundsReducer,
  backgroundImage: backgroundImageReducer
})

export default reducer
