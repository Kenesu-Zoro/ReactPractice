import { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos: [
        {
        id: 1,
        text: " Todo Messgage ",
        completed: false,
        }
      ],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, todo) => { },
    toggleCompleted: (id) => { }
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider