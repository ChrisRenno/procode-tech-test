import styles from './listItem.module.css';
import type { Todo } from '../../app/types';

interface ListItemProps {
  todo: Todo;
  isUpcoming: boolean;
  onDone: () => void;
}

const ListItem = ({ todo, isUpcoming, onDone }: ListItemProps) => {
  return (
    <li className={`${styles.listItem} ${isUpcoming ? styles.listItemUpcoming : styles.listItemDone}`}>
      <span>{todo.todo}</span>
      <button onClick={onDone}>{todo.completed ? 'Oops back in the list' : 'Mark done'}</button>
    </li>
  );
};

export default ListItem;