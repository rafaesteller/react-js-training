import React from 'react'
import Userinput from "./Userinput";
import Useroutput from "./Useroutput";
const user = (props) => {
    return (
        <div>
            <Useroutput name={props.name}/>
        </div>
    )
};

export default user;

