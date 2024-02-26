import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{
    id: 1,
    text: "Hello World",
    completed: false,
  },]
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }

      state.todos.push(todo)
    },

    editTodo: (state, action) => {
      const {id, text} = action.payload
      const index = state.todos.findIndex(todo => todo.id === id)
      state.todos[index].text = text;

    },

    delTodo: (state, action) => {
      state.todos = state.todos.filter(todo => (
        todo.id !== action.payload
      ))
    },

    toggleComplete: (state, action) => {
      const {id, completed} = action.payload
      const index = state.todos.findIndex(todo => todo.id === id)
      state.todos[index].completed = !completed;
    }

  }
})

export const { addTodo, delTodo, editTodo, toggleComplete } = todoSlice.actions
export default todoSlice.reducer
