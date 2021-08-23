import { createStore } from 'redux'
import searchedReducer from './searchedReducer'

const store = createStore(searchedReducer)
export default store