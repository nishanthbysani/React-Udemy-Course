import React  from 'react';
import './Person.css';
// Functional Based Components
// Props are used to pass data from the parent component to the child component
const person = (props) => {
return (
    <div className="Person">
        <p onClick={props.click}>I'm {props.name} of {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
)
}

export default person