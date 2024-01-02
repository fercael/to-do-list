import { useState } from "react"
import { Task } from "./Task";
import { PlusCircle } from "@phosphor-icons/react"
import styles from "./Tasklist.module.css"


function Tasklist() {
    const [listOfTasks, setListOfTasks] = useState(Array<string>)
    const [newTask, setNewTask] = useState('')
    return(
        <section className={styles['tasklist-section']}>
            <ul className={styles['tasklist-ul']}>
                {listOfTasks.map((content, index) => {
                    return(
                        <Task id={index} content={content}/>
                    )
                })}
            </ul>
            <input className={styles['tasklist-input']} type="text" name="list-input" id="list-input" value={newTask} onChange={e=>{
                setNewTask(e.target.value)
            }}/>
            <button
                className={styles['tasklist-button']}
                onClick={()=>{
                   setListOfTasks([...listOfTasks, newTask])
                }}
            >
                <PlusCircle className={styles['tasklist-icon']} />
            </button>
        </section>
    )
}

export { Tasklist }