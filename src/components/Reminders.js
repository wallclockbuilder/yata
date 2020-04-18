import React from 'react'
import ReminderData from "../reminderData"
import Reminder from "./Reminder"

class Reminders extends React.Component {
    constructor(){
        super()
        this.state = {
            reminderData: ReminderData
        }
    }

    render(){
        const reminderList =  this.state.reminderData.map(
            function (datum) {
                return <Reminder name={datum.item} key={datum.id} />
            }
        )
        
        return (
            <div>
                <h2>Don't forget to buy:</h2>
                {reminderList}
            </div>
        )
    }
}

export default Reminders;