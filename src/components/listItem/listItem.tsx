interface ListItemProps {
  todo: string;
  completed: boolean;
  onDone: () => void;
}

const ListItem = ({ todo, completed, onDone }: ListItemProps) => {
  return (
    <li>
      <span>{todo}</span>
      <button onClick={onDone}>{completed ? 'Oops back in the list' : 'Mark done'}</button>
    </li>
  );
};

export default ListItem;