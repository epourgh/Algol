import { combineReducers } from 'redux'

import searchedReducer from './reducers'

const rootReducer = combineReducers({
  searched: searchedReducer
})

export default rootReducer
