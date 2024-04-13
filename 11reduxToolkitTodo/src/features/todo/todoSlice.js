import { createSlice, nanoid } from "@reduxjs/toolkit";
//nanoid generates unique id

const initialState= {
    todos: [{id: 1, text: "Hello WOrld"}]
}

//reducer ek functionality hai aur slice ek bara reducer hai

export const todoSlice= createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo= {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removoTodo: (state, action)=> {
            state.todos= state.todos.filter((todo)=> todo.id !== action.payload )
        },
    }
})

export const {addTodo, removoTodo} = todoSlice.actions

export default todoSlice.reducer