// action types
export const SET_NAVIGATION = 'SET_NAVIGATION'
export const SET_SOUNDS = 'SET_SOUNDS'
export const SET_BACKGROUND_IMAGE = 'SET_BACKGROUND_IMAGE'

// action creators
export const setNavigation = update => ({
  type: SET_NAVIGATION,
  payload: update,
})

export const setSounds = update => ({
  type: SET_SOUNDS,
  payload: update
})

export const setBackgroundImage = update => ({
  type: SET_BACKGROUND_IMAGE,
  payload: update
})