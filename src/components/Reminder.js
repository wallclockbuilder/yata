import React from 'react';

function Reminder(props) {
    return (
        <p>
            <input 
                type="checkbox" 
                id={props.id}
                key={props.id}
                checked={props.checked} 
                onChange={props.onChange}
            />
            <label >{props.name}</label>
        </p>
    )
}

export default Reminder;