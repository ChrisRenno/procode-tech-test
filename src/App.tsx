import styles from './App.module.css'
import Header from './components/header/header' 
import ListComponent from './components/listComponent/listComponent'
import AddTodo from './components/addTodo/addTodo';
import NoTodoFound from './components/noTodoFound/noTodoFound';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './app/store';
import { addTodo, markDone } from './features/todos/todosSlice';

export interface Todo {
  todo: string;
  completed: boolean;
  id: number;
}

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos.todos as Todo[]);

  return (
    <main>
      <Header />
      <div className={styles.container}>
      <AddTodo addTodo={(todo) => dispatch(addTodo(todo))} />
      {todos.length ?
        <>
          <ListComponent items={todos.filter(todo => todo.completed === false)} isUpcoming={true} onDone={(id) => dispatch(markDone(id))} />
          <ListComponent items={todos.filter(todo => todo.completed === true)} isUpcoming={false}  onDone={(id) => dispatch(markDone(id))} />
        </>
        : <NoTodoFound />
        }
    </div>
    </main>
  )
}

export default App;