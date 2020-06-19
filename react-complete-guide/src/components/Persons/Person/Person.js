import React from 'react'
import styled from 'styled-components';
//import './Person.css'

const StyledDiv =  styled.div` width: 60%;
    margin: 20px auto;
    border: 1px solid #666;
    box-shadow: 0 2px 4px #333;
    padding: 20px;
    text-align: center;
    @media (min-width: 500px) {
        width: 400px;

    }
`;

const person = (props) => {
    return (
        <StyledDiv>
            <p onClick={props.click}> I am {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>        
        </StyledDiv>   
    )

};

export default person;

