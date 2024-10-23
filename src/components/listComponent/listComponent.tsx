import styles from './listComponent.module.css';

interface ListComponentProps {
  isUpcoming: boolean;
  items: { text: string; isDone: boolean }[];
}

const ListComponent = ({ items, isUpcoming }: ListComponentProps) => {
  return (
    <div className={`${styles.list} ${isUpcoming ? styles.listUpcoming : styles.listDone}`}>
      {isUpcoming ? 'Upcoming' : 'Done'}
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.isDone ? 'done' : 'not-done'}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;