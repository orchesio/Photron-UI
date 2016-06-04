import React from 'react'
import {connect} from 'react-redux'

require('../../scss/Infrastructure.scss')

const Infrastructure = React.createClass({


    render() {
        return (<div className='infrastructurePage'>
            <h2> Clusters </h2>
            {this.props.children}
        </div>)
    }

});

export default Infrastructure