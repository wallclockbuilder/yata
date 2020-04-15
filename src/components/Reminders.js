import React from "react";

function Reminders() {
        return (
            <div>
                <h2>Don't forget to buy:</h2>
                <Reminder name="milk" />
                <Reminder name="cocoa" />
                <Reminder name="gas" />
            </div>
        )
    }

    function Reminder(props) {
        return (
            <p>
                <input type="checkbox" id={props.name} />
                <label for={props.name}>{props.name}</label>
            </p>
        )
    }
    export default Reminders;