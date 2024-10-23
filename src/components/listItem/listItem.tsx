interface ListItemProps {
  todo: string;
  onDone: () => void;
}

const ListItem = ({ todo, onDone }: ListItemProps) => {
  return (
    <div>
      <span>{todo}</span>
      <button onClick={onDone}>Done</button>
    </div>
  );
};

export default ListItem;