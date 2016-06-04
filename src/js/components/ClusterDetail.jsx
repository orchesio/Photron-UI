import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import Cluster from './Cluster.jsx'
import { fetchCluster } from '../actions/ClusterActions.jsx'

const mapStateToProps = ({clusters}, {params: { clusterId }}) => ({
    cluster: clusters.filter(cluster => cluster.id === parseInt(clusterId, 10))[0]
})

const ClusterDetail = React.createClass({

    render() {
        return (<div className='cluster-detail'>
            <Cluster cluster={this.props.cluster}/>
        </div>)
    }

});

export default connect(mapStateToProps)(ClusterDetail)