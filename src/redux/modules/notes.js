import { fromJS } from 'immutable'
import data from '../data.json'

const ACTION_HANDLERS = {}

// ------------------------------------
// GET_SETTINGS
// ------------------------------------
export const GET_SETTINGS = 'GET_SETTINGS'

export const getSettings = () => {
  return {
    type: GET_SETTINGS,
    payload: data
  }
}

Object.assign(ACTION_HANDLERS, {
  [GET_SETTINGS]: (state, { payload }) => {
    return state
      .set('colors', fromJS(payload.colors))
  }
})

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = fromJS({
  isLoading: false
})

export default function registrationReducer (state, action) {
  state = state || initialState
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
