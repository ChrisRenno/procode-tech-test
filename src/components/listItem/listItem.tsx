import styles from './listItem.module.css';
import type { Todo } from '../../App';

interface ListItemProps {
  todo: Todo;
  onDone: () => void;
}

const ListItem = ({ todo, onDone }: ListItemProps) => {
  return (
    <li className={styles.listItem}>
      <span>{todo.todo}</span>
      <button onClick={onDone}>{todo.completed ? 'Oops back in the list' : 'Mark done'}</button>
    </li>
  );
};

export default ListItem;