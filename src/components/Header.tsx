function Header() {
    const dateTime = new Date
    return(
        <header>
            <h1>{`${dateTime.getDay()}-${dateTime.getMonth()}-${dateTime.getFullYear()}`}</h1>
        </header>
    )
}

export { Header }