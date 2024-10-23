import { useState } from 'react'
import './App.css'

import Header from './components/header/header' 
import ListComponent from './components/listComponent/listComponent'
import AddTodo from './components/addTodo/addTodo';

export interface Todo {
  todo: string;
  completed: boolean;
  id: number;
}

function App() {
  // const [count, setCount] = useState(0)

  const [todos, setTodos] = useState<Todo[]>([])

  const fetchDummyTodos = async () => {

    const dummyData = await fetch('https://dummyjson.com/todos/random/10')
      .then(res => res.json());

      dummyData.forEach((todo: Todo) => {
        todo.completed = false;
      });

    setTodos(dummyData);

  }

  const addTodo = (todo: string) => {
    const roughGuid = Math.random();
    setTodos([...todos, { todo, completed: false, id: roughGuid }]);
  }

  const markDone = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        if (todo.completed) {
          return {
            ...todo,
            completed: false
          }
        }

        return {
          ...todo,
          completed: true
        }
      }
      return todo;
    });

    setTodos(newTodos);
  }



  return (
    <main>
    <Header />
    <ListComponent items={todos.filter(todo => todo.completed === false)} isUpcoming={true} onDone={markDone} />
    <ListComponent items={todos.filter(todo => todo.completed === true)} isUpcoming={false}  onDone={markDone} />

    <p>Add a new item</p>
      <AddTodo addTodo={addTodo} />

   {!todos.length && <button onClick={() => fetchDummyTodos()}>or + Dummy Data</button>}
    </main>
  )
}

export default App
