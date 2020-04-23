import React , {useState} from 'react'
import ReminderData from "../reminderData"
import Reminder from "./Reminder"

const Reminders = () => {
    const [todos, setTodos] = useState(ReminderData)
    const [todo, setTodo] = useState("")


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
    let handleSubmit = (e) => {
        e.preventDefault()
        let lastTodo = [...todos].pop()
        let newTodo = {id:lastTodo.id + 1, item: todo, ticked:false}
        setTodos([...todos, newTodo])
        setTodo("")
    }
    let handleOnChange = (e) => {
        setTodo(e.target.value)
        console.log(todo)
    }
    
    return ( 
        <div>
            <h2>Don't forget to buy:</h2>
            {reminderList}
            <form onSubmit={handleSubmit} >
                <input value={todo} onChange={handleOnChange}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Reminders;