
import React from 'react';
import { Link } from 'react-router';

let menuItems = [ {
    path: '/nodes',
    name: 'Nodes'
}, {
    path: '/clusters',
    name: 'Clusters'
}, {
    path: '/workspaces',
    name: 'WorkSpaces'
}]

const Sidebar = React.createClass({
    render() {
        let props = this.props;

        return (<aside className="primary-aside">
          <ul>
           { 
              menuItems.map((item, i) => 
                <li key={i}><Link to={item.path} activeClassName="active">{item.name}</Link></li>
            )}
          </ul>
        </aside>)
    }
})
export default Sidebar