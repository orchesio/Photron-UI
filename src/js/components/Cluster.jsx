import React from 'react';
import { Link } from 'react-router'



const Cluster = ({ cluster }) => {

    return (<div className="cluster">
            <Link to={`/infrastructure/cluster/view/${cluster.id}`}>
        <div>
            <p>ID: { cluster.id} </p>
            <p>Name: { cluster.name}</p>
            <p>Size: {cluster.size}</p>
        </div>
        </Link>
    </div>)

}

export default Cluster