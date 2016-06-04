import React from 'react'
import {connect} from 'react-redux'
import { Link , browserHistory } from 'react-router'
import ReactDOM from 'react-dom'
import { addCluster } from '../actions/ClusterActions.jsx'

const mapStateToProps = () => ({
    cluster: {}
})

const mapDispatchToProps = dispatch => ({
    onSave: cluster => dispatch(addCluster(cluster))
})

const NewClusterModal = React.createClass({

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.name).focus()
    },

    render() {

        return (<div class='modal'>

            <h1> New Cluster </h1>
            <label> Name: </label>
            <input ref="name" placeholder="Cluster Name" />
            <label> Size: </label>
            <input ref="size" placeholder="Cluster Size" />
            <button onClick={this.onSave}>Save Cluster</button>
            <Link to='/infrastructure'> Cancel </Link>
        </div>)

    },
    onSave(e) {

        var name = ReactDOM.findDOMNode(this.refs.name)
        var size = ReactDOM.findDOMNode(this.refs.size)
        this.props.onSave(Object.assign({}, this.props.cluster,
            { 
                name: name.value,
                size: size.value
            }))
        browserHistory.push(`/infrastructure/cluster`)
    }



})

export default connect(mapStateToProps, mapDispatchToProps)(NewClusterModal)