import './App.css'
import { useState } from 'react'

export function TodoList() {
  const [to, setTo] = useState("")
  const [todo, setTodo] = useState([
    { id: 1, task: 'Webdev' },
    { id: 2, task: 'DataAnalytics' },
    { id: 3, task: 'Coding' },
    { id: 4, task: 'Angular' }
  ])

  let next = 5

  function addTodo() {
    if (to.trim() === '') {
      alert("Enter input")
      return
    }
    const newTodo = [
      ...todo,
      { id: next++, task: to }
    ]
    setTodo(newTodo)
    setTo("")
  }

  function deleteTodo(id) {
    const updated = todo.filter(t => t.id !== id)
    setTodo(updated)
  }

  return (
    <div>
      <div>
        <h1>Todo-List Serverless Application </h1>
        <input
          type="text"
          id='inp'
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className='list'>
        {todo.map((t) => (
          <li key={t.id}>
            <p>{t.task}</p>
            <button className='btn' onClick={() => deleteTodo(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
