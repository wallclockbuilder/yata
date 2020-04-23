import React , {useState} from 'react'
import ReminderData from "../reminderData"
import Reminder from "./Reminder"

const Reminders = () => {
    const [todos, setTodos] = useState(ReminderData)
    const newTodos = (id) => {
        let newTodos = [...todos]
        newTodos[id].ticked = !newTodos[id].ticked
        return newTodos
    }

    let reminderList = todos.map(
        function (datum) {
            return <Reminder
                name={datum.item}
                id={datum.id}
                key={datum.id}
                checked={datum.ticked}
                onChange={() => setTodos(newTodos(datum.id))}
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