import  { createStore, combineReducers } from 'redux'
import { rootReducer } from '../reducers/index.jsx'

export const PhotronStore = createStore(combineReducers(rootReducer))

 

