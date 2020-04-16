import React from 'react';

function Reminder(props) {
    return (
        <p>
            <input type="checkbox" id={props.name} />
            <label >{props.name}</label>
        </p>
    )
}

export default Reminder;