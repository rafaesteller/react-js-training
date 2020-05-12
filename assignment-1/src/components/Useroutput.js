import React from 'react'
import './UserOutput.css'
const userOutput  = (props) => {
    return (
        <div className="UserOutput">
            <p>Hello {props.name}</p>
            <p>Welcome to GCN</p>
        </div>
    )
};

export default userOutput;