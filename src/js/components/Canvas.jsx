import React from 'react';
import Sidebar from './Sidebar.jsx'


const Canvas = React.createClass({
  render: function() {
    return (
      <div className="canvas">
        <header className="primary-header"></header>
        <Sidebar />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default Canvas;