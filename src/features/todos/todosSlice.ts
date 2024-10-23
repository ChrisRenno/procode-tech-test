import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export interface Todo {
  todo: string;
  completed: boolean;
  id: number;
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

export const fetchDummyTodos = createAsyncThunk('todos/fetchDummyTodos', async () => {
  const response = await fetch('https://dummyjson.com/todos/random/10');
  const data = await response.json();
  return data.map((todo: Todo) => ({ ...todo, completed: false }));
});

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const roughGuid = Math.random();
      state.todos.push({ todo: action.payload, completed: false, id: roughGuid });
    },
    markDone: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDummyTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    });
  },
});

export const { addTodo, markDone } = todosSlice.actions;
export default todosSlice.reducer;