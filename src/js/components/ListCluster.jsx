import React from 'react'
import { connect } from 'react-redux'
import Cluster from './Cluster.jsx'
import { fetchClusters } from '../actions/ClusterActions.jsx'
import { Link } from 'react-router'

const mapStateToProps = ({clusters}) => ({
    clusters
})

const mapDispatchToProps = dispatch => ({
    fetchClusters: () => dispatch(fetchClusters())
})


const ListCluster = React.createClass({

    componentDidMount() {
        this.props.fetchClusters()
    },

    render() {
        return  (<div class="list-cluster">
            <Link to='/infrastructure/cluster/new'>Create New Cluster</Link>
            <div className='list'>
            {this.props.clusters.map(cluster => <Cluster cluster={cluster} key={cluster.id} />)}
            </div>
        </div>)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListCluster)

