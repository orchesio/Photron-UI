import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { PhotronStore } from '../stores/index.jsx'

import Canvas from '../components/Canvas.jsx'
import Dashboard from '../components/Dashboard.jsx'
import Infrastructure from '../components/Infrastructure.jsx'
import ClusterDetail from '../components/ClusterDetail.jsx'
import NewClusterModal from '../components/NewClusterModal.jsx'
import ListCluster from '../components/ListCluster.jsx'

const history = syncHistoryWithStore(browserHistory, PhotronStore)

export default (
    <Provider store={PhotronStore}>
      <Router history={history}>
        <Route path="/" component={Canvas}>
            <IndexRoute component={Dashboard} />
            <Route path="/infrastructure" component={Infrastructure}>
                <IndexRoute component={ListCluster} />
                <Route path="/infrastructure/cluster" component={ListCluster} /> 
                <Route path="/infrastructure/cluster/new" component={NewClusterModal} />
                <Route path="/infrastructure/cluster/view/:clusterId" component={ClusterDetail} />
            </Route>
        </Route>
      </Router>
    </Provider>
);