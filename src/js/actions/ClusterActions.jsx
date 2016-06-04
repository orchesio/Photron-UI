import ActionTypes from '../constants/ActionTypes.jsx'

var dumpData = [
              {
                id: 123456779,
                name: 'aa',
                size: 8
              },
               {
                id: 123453779,
                name: 'aa',
                size: 8
              },
              {
                id: 123423479,
                name: 'aa',
                size: 8
              }]
export const receiveClusters = data => ({type: ActionTypes.REQUEST_CLUSTERS, data: data})

export const fetchClusters = () => ({
    // hardcode data for now, should call API
        type: ActionTypes.REQUEST_CLUSTERS,
        data: dumpData
            

        
})

export const addCluster = data => ({type: ActionTypes.ADD_CLUSTER, data: data})

