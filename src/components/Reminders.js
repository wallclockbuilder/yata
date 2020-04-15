import React from "react";
import Reminder from "./Reminder";

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
    export default Reminders;