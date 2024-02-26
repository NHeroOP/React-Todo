import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/Todo/todoSlice'

export default function AddTodo() {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput("")
  }

  return (
    <form onSubmit={addTodoHandler}>
      <input type="checkbox"></input>
      <input
        type="text"
        placeholder="Create a new Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  )
}
