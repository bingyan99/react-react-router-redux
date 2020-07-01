import homeReducer from './home'
import appReducer from './app'

import { combineReducers } from 'redux'

const reducers = combineReducers({
  homeReducer,
  appReducer,
})
export default reducers