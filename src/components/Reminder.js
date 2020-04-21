import React from 'react';

function Reminder(props) {
    const checkStyle={
        textDecoration: 'line-through',
        color: 'gray'
    }
    return (
        <p>
            
            <label 
                style={props.checked ? checkStyle : null} >
                <input 
                    type="checkbox" 
                    id={props.id}
                    key={props.id}
                    checked={props.checked} 
                    onChange={props.onChange}
            
                />
                {props.name}
            </label>
        </p>
    )
}

export default Reminder;