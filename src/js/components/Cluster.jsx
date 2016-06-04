import React from 'react';

const Cluster = ({ cluster }) => {

    return (<div className="cluster">
            <p>ID: { cluster.id} </p>
            <p>Name: { cluster.name}</p>
            <p>Size: {cluster.size}</p>
        
    </div>)

}

export default Cluster