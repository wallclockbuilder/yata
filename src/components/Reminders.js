import React from "react";
import Reminder from "./Reminder";
import reminderData from "../reminderData";

const reminderList = reminderData.map(function(datum) {
    return <Reminder name={datum.item} key={datum.id} />;
})

function Reminders() {
    return (
            <div>
                <h2>Don't forget to buy:</h2>
                {reminderList}
            </div>
        )
}

export default Reminders;