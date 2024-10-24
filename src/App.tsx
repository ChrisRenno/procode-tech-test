import styles from './App.module.css'
import Header from './components/header/header' 
import ListComponent from './components/listComponent/listComponent'
import AddTodo from './components/addTodo/addTodo';
import NoTodoFound from './components/noTodoFound/noTodoFound';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './app/store';
import { addTodo, markItem } from './features/todos/todosSlice';
import type { Todo } from './app/types';

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
          <ListComponent items={todos.filter(todo => todo.completed === false)} isUpcoming={true} onDone={(id) => dispatch(markItem(id))} />
          <ListComponent items={todos.filter(todo => todo.completed === true)} isUpcoming={false}  onDone={(id) => dispatch(markItem(id))} />
        </>
        : <NoTodoFound />
        }
    </div>
    </main>
  )
}

export default App;