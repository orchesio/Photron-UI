
import React from 'react';
import { Link } from 'react-router'

require('../../scss/Sidebar.scss')

let menuItems = [ {
    path: '/',
    name: 'Dashboard'
},{
    path: '/services',
    name: 'Services'
}, {
    path: '/accounts',
    name: 'Account'
}, {
    path: '/infrastructure',
    name: 'Infrastructure'
}, {
    path: '/monitor',
    name: 'Monitor'
}, {
    path: '/settings',
    name: 'Settings'
}

]

const Sidebar = React.createClass({
    render() {
        let props = this.props;

        return (<div className="sidebar">
          <ul>
           { 
              menuItems.map((item, i) => 
                <li key={i}><Link to={item.path} activeClassName="active">{item.name}</Link></li>
            )}
          </ul>
        </div>)
    }
})
export default Sidebar