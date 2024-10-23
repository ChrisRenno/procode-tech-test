import styles from './noTodoFound.module.css';

interface noTodoFoundProps {
  fetchDummyTodos: () => void;
}

const NoTodoFound = ({fetchDummyTodos}: noTodoFoundProps) => {
  return (
    <div className={styles.nothingFound}>
      <p>Add a new todo or click the button below to get some ideas :)</p>
      <button onClick={fetchDummyTodos}>+ Dummy Data</button>
    </div>
  )
};

export default NoTodoFound;