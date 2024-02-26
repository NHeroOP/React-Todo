import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from "../app/todoSlice"

export default function AddTodo() {
  const [input, setInput] = useState("")
  const [check, setIsChecked] = useState(false)
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput("")
    console.log("test");
  }

  return (
    <form onSubmit={addTodoHandler} id='AddTodoForm'>
      <input type="checkbox" onChange={(e) => {
        setIsChecked(e.target.checked)
        if(e.target.checked) addTodoHandler(e)
      } }></input>
      <input
        type="text"
        placeholder="Create a new Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  )
}
