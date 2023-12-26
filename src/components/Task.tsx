interface TaskProps {
    id?: number,
    content: string
}

function Task(props:TaskProps) {
    return(
        <li>
            <input type="checkbox" name={props.id.toString()} id={props.id.toString()} />
            <p>{props.content}</p>
        </li>
    )
}

export { Task }