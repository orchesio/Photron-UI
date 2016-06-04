import React from 'react'
import { connect } from 'react-redux'
import Cluster from './Cluster.jsx'
import { fetchClusters } from '../actions/ClusterActions.jsx'
import { Link } from 'react-router'

require ('../../scss/ListCluster.scss')

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
        return  (<div className="list-cluster">
            <Link className='btn' to='/infrastructure/cluster/new'>Create New Cluster</Link>
            <div className='list'>
            {this.props.clusters.map(cluster =>   <Link to={`/infrastructure/cluster/view/${cluster.id}`} key={cluster.id}>
                <Cluster cluster={cluster} key={cluster.id} /> </Link>)}
            </div>
        </div>)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListCluster)

