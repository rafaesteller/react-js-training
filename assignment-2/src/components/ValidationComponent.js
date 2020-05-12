import React from 'react'

const minLenght = 5;

const validationComponent = (props) => {
    let message = props.inputLength >= minLenght ? 'Text long enough' : 'Text too short'
    return (
        <div>
            <p> { message } </p>
        </div>
    )
}

export default validationComponent