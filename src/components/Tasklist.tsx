import { useState } from "react"
import { Task } from "./Task";
import { PlusCircle } from "@phosphor-icons/react"


function Tasklist() {
    const [listOfTasks, setListOfTasks] = useState(Array<string>)
    const [newTask, setNewTask] = useState('')
    return(
        <section>
            <ul>
                {listOfTasks.map((content, index) => {
                    return(
                        <Task id={index} content={content}/>
                    )
                })}
            </ul>
            <input type="text" name="list-input" id="list-input" value={newTask} onChange={e=>{
                setNewTask(e.target.value)
            }}/>
            <button
                onClick={()=>{
                   setListOfTasks([...listOfTasks, newTask])
                }}
            >
                <PlusCircle />
            </button>
        </section>
    )
}

export { Tasklist }