
import React from 'react';
import { Link } from 'react-router';

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