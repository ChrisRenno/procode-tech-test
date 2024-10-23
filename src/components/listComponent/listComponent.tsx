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
      <h2>{isUpcoming ? 'Upcoming' : 'Done'}</h2>
      <ul>
        {items.length ? items.map((item) => (
          <ListItem key={item.id} todo={item} onDone={() => onDone(item.id)} />
        )) : <p>{isUpcoming ? `You've done them all, add a new one or bask in a warm glow of a job well done` : `Get to it!`}</p>}
      </ul>
    </div>
  );
};

export default ListComponent;