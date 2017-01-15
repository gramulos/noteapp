import { fromJS } from 'immutable'
import data from '../data.json'

const ACTION_HANDLERS = {}

// ------------------------------------
// GET_SETTINGS
// ------------------------------------
export const GET_SETTINGS = 'GET_SETTINGS'
export const GET_NOTES = 'GET_NOTES'
export const ADD_NOTE = 'ADD_NOTE'

export const getSettings = () => {
  return {
    type: GET_SETTINGS,
    payload: data
  }
}

export const getNotes = () => {
  return {
    type: GET_NOTES
  }
}

export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    payload: note
  }
}

Object.assign(ACTION_HANDLERS, {
  [GET_SETTINGS]: (state, { payload }) => {
    const userNotes = localStorage.getItem('userNotes')
    if (!userNotes) {
      localStorage.setItem('userNotes', JSON.stringify(payload.defaultNotes))
    }
    return state
      .set('colors', fromJS(payload.colors))
  },

  [GET_NOTES]: (state) => {
    const userNotes = JSON.parse(localStorage.getItem('userNotes'))
    return state
      .set('notes', fromJS(userNotes))
  },

  [ADD_NOTE]: (state, { payload }) => {
    const userNotes = JSON.parse(localStorage.getItem('userNotes'))
    userNotes.push(payload)
    localStorage.setItem('userNotes', JSON.stringify(userNotes))
    return state
      .update('notes', notes => notes.push(fromJS(payload)))
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
