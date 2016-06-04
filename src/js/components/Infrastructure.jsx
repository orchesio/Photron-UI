import React from 'react'
import {connect} from 'react-redux'



// const mapStateToProps = ({clusters}) => ({
//     clusters
// })

// const mapDispatchToProps = dispatch => ({
//     fetchClusters: () => dispatch(fetchClusters())
// })

const Infrastructure = React.createClass({


    render() {
        return (<div className='infrastructurePage'>
            {this.props.children}
        </div>)
    }

});

export default Infrastructure