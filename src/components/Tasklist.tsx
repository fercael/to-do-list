import { useState } from "react"
import { Task } from "./Task";
import { PlusCircle } from "@phosphor-icons/react"
import styles from "./Tasklist.module.css"



function Tasklist() {
    const [listOfTasks, setListOfTasks] = useState(Array<string>)
    const [newTask, setNewTask] = useState('')

    function updateList(id: number) {
        listOfTasks.splice(id, 1)
        setListOfTasks([...listOfTasks])
    }


    return(
        <section className={styles['tasklist-section']}>
            <div className={styles['tasklist-inputbar']}>
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
            </div>
            <ul className={styles['tasklist-ul']}>
                {listOfTasks.map((content, index) => {
                    return(
                        <Task key={index} id={index} content={content} deleteTask={updateList}/>
                    )
                })}
            </ul>
          
        </section>
    )
}

export { Tasklist }