import { useState } from 'react';
import './addTodo.css';

interface AddTodoProps {
  addTodo: (todo: string) => void;
}

const AddTodo  = ({ addTodo }: AddTodoProps) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit" disabled={!todo.trim()}>Add</button>
    </form>
  );
};

export default AddTodo;