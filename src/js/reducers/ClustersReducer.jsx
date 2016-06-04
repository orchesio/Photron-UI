import ActionTypes from '../constants/ActionTypes.jsx'


export const clusters = (state, action) => {
    switch (action.type) {
        case ActionTypes.REQUEST_CLUSTERS:
            return state.length > 0 ? state : action.data
        case ActionTypes.ADD_CLUSTER:
          let newCluster = Object.assign({}, action.data, {
            id: +new Date
          })
          return state.concat([newCluster])

        default: return state || [];
    }
}
