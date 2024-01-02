import { useState } from 'react'

import { TrashSimple } from '@phosphor-icons/react'

import styles from './Task.module.css'




interface TaskProps {
    id: number,
    content: string,
    deleteTask: () => void
}

function Task(props:TaskProps) {
    const id = props.id;
    const [checkboxStatus, setCheckboxStatus] = useState(false)

    return(
        <li className={styles['task-li']}>
            <input 
                className={styles['task-checkbox']}
                type="checkbox" 
                name={props.id.toString()} 
                id={props.id.toString()} 
                checked={checkboxStatus}
                onChange={()=>{
                    if(checkboxStatus == false) setCheckboxStatus(true)
                    if(checkboxStatus == true) setCheckboxStatus(false)
                }}
            />
            <p className={styles['task-p']}
                style={{
                    textDecoration: (checkboxStatus)? 'line-through': 'none',
                    opacity: (checkboxStatus)? '70%': '100%'
                }}
            >
                {props.content}
            </p>
            <button 
                className={styles['task-button']}
                onClick={() => {
                    props.deleteTask(id)
                }}
            >
                <TrashSimple className={styles['task-trashsimple']} size={24} color='var(--red)'/>
            </button>
        </li>
    )
}

export { Task }