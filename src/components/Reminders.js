import React from "react";
import Reminder from "./Reminder";

const data = [
    {id: 0,  item:"milk"},
    {id: 1, item: "cocoa"},
    {id: 2, item: "gas"},
    {id: 3, item: "petrol"},
    {id: 4, item: "diesel"}
]

const reminderList = data.map(function(datum) {
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