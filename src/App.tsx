import { Header } from "./components/Header"
import { Task } from "./components/Task"

function App() {
  return (
    <>
      <Header />
      <Task id={1} status={true} content="Lavar roupa" />
    </>
  )
}

export default App
