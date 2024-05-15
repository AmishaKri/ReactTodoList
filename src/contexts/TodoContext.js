import { createContext, useContext } from "react"
export const TodoContext = createContext({
    todos: [{
          
        id: 1,
        todo: "Todo msg",
        completed: false,    
    }      

    ],
    addTodo: (todo) =>{}, // In context api , only function declaration is used & function definition will be perform in App.jsx
    updateTodo: (id,todo) => {},
    deleteTodo: (id) =>{},
    toggleComplete: (id) =>{} 

})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider