// import { combineReducers } from 'redux'
// import { LIST_NODES, LIST_CLUSTERS, LIST_CLUSTER_BY_ID, SET_VISIBILITY_FILTER, VisibilityFilters} from '../actions/PhotronAction'
// const { SHOW_ALL } = VisibilityFilters;

// function visibilityFilter(state = SHOW_ALL, action) {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             return action.filter;
//         default:
//             return state;

//     }
// } 

// function photron(state = [], action) {

//     switch (action.type) {

//         case LIST_NODES:
//             return [
//                 ...state,
//                 {
//                 }
//             ]
//         default:
//             return state

//     }
// }

// const photronApp = combineReducers({
//     visibilityFilter,
//     photron

// })