import styles from './listComponent.module.css';
import ListItem from '../listItem/listItem';
import type { Todo } from '../../App';

interface ListComponentProps {
  isUpcoming: boolean;
  items: Todo[];
  onDone: (id: number) => void;
}

const ListComponent = ({ items, isUpcoming, onDone }: ListComponentProps) => {
  return (
    <div className={`${styles.list} ${isUpcoming ? styles.listUpcoming : styles.listDone}`}>
      {isUpcoming ? 'Upcoming' : 'Done'}
      <ul>
        {items.map((item) => (
          <ListItem key={item.id} todo={item.todo} completed={item.completed} onDone={() => onDone(item.id)} />
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;