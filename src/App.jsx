import './App.css'
import AddTodo from './components/TodoForm'


function App() {

  return (
    <>
      <header>
        <h1 className="heading">
          TODO
        </h1>
        <AddTodo />
      </header>
    </>
  )
}

export default App
