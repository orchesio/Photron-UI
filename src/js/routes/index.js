import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import Canvas from '../components/Canvas.jsx'

// Pages
import Dashboard from '../components/Dashboard.jsx'
import Nodes from '../components/Nodes.jsx'
import Clusters from '../components/Clusters.jsx'
import Workspaces from '../components/Workspaces.jsx'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Canvas}>
        <IndexRoute component={Nodes} />
        <Route path="/nodes" component={Nodes} />
        <Route path="/clusters" component={Clusters} />
        <Route path="/workspaces" component={Workspaces} />
    </Route>
  </Router>
);