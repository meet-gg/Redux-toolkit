import { useEffect, useState } from 'react'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
import {useDispatch, useSelector } from 'react-redux'
import { addAll } from './features/todo/todoSlice'

function App() {
  // const [todos, setTodos] = useState([])
  const todos=useSelector(state=>state.todos)
  const dispatch=useDispatch();

  return (
    <>
    <h1 className='text-center text-3xl py-5'>Add your Todos</h1>
    <div className="flex justify-center">
  <AddTodo />
    </div>
    <div className='mx-80'>
    <Todos/>
    </div>
    </>
  )
}

export default App
