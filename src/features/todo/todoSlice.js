import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState={
    todos:JSON.parse(localStorage.getItem('todos'))||[{id:1,text:"add"}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            console.log(action.payload)
            const todo={
                id:nanoid(),
                text:action.payload
            }
            
            state.todos.push(todo)
            localStorage.setItem('todos',JSON.stringify(state.todos))
        },
        removeTodo:(state,action)=>{
            console.log(action.payload)
            state.todos=state.todos.filter(todo=>todo.id!==action.payload)
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.map(todo=>todo.id===action.payload.id?action.payload:todo)
            localStorage.setItem("todos", JSON.stringify(state.todos));
        }
    }   
})

export const {addTodo,removeTodo,addAll}=todoSlice.actions

export default todoSlice.reducer