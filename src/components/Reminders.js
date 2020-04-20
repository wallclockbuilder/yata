import React , {useState} from 'react'
import ReminderData from "../reminderData"
import Reminder from "./Reminder"

const Reminders = () => {
    const [check, setCheck] = useState(ReminderData)

    const newCheck = (id) => {
        let newCheck = [...check]
        newCheck[id].ticked = !newCheck[id].ticked
        return newCheck
    }

    let reminderList = check.map(
        function (datum) {
            return <Reminder
                name={datum.item}
                id={datum.id}
                key={datum.id}
                checked={datum.ticked}
                onChange={() => setCheck(newCheck(datum.id))}
            />
        }
    )
    
    return ( 
        <div>
            <h2>Don't forget to buy:</h2>
            {reminderList}
        </div>
    )
}

export default Reminders;