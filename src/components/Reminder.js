import React from 'react';

function Reminder(props) {
    const checkStyle={
        textDecoration: 'line-through',
        color: 'gray'
    }
    return (
        <p>
            <input 
                type="checkbox" 
                id={props.id}
                key={props.id}
                checked={props.checked} 
                onChange={props.onChange}
                
            />
            <label 
                style={props.checked ? checkStyle : null} >
                {props.name}
            </label>
        </p>
    )
}

export default Reminder;