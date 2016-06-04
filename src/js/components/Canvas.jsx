import React from 'react';
import Sidebar from './Sidebar.jsx'


const Canvas = React.createClass({
  render: function() {
    return (
      <div className="canvas">
        <header className="primary-header"><h3>Photron UI</h3></header>
        <Sidebar />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default Canvas;