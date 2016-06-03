import React, { Component } from 'react';
import loadNodes from '../actions/PhotronAction'

class Nodes extends Component {

    constructor(props) {
        super(props)
      
    }

    componentWillMount() {
      //  loadData(this.props)
    }

    render() {
        return (
            <div>
             Nodes Page
            </div>

        )


    }


}

export default Nodes