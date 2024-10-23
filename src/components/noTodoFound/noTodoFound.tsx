import { useDispatch } from 'react-redux';
import styles from './noTodoFound.module.css';
import { AppDispatch } from '../../app/store';
import { fetchDummyTodos } from '../../features/todos/todosSlice';

const NoTodoFound = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className={styles.nothingFound}>
      <p>Add a new todo or click the button below to get some ideas :)</p>
      <button onClick={() => dispatch(fetchDummyTodos())}>+ Dummy Data</button>
    </div>
  )
};

export default NoTodoFound;