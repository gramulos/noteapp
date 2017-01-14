import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import notes from './modules/notes'

export default combineReducers({
  notes,
  router,
  form: formReducer
})
