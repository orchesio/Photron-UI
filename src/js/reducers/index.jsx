import { combineReducers } from 'redux'
import { clusters }  from './ClustersReducer.jsx'
import { routerReducer } from 'react-router-redux'

export const rootReducer = {
   clusters,
   routing: routerReducer
}
