import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: 0,
        text: 'Learn HTML and CSS',
        completed: true,
      },
      {
        id: 1,
        text: 'Get good at JavaScript',
        completed: true,
      },
      {
        id: 2,
        text: 'Master React',
        completed: false,
      },
      {
        id: 3,
        text: 'Discover Redux',
        completed: false,
      },
      {
        id: 4,
        text: 'Build amazing apps',
        completed: false,
      },
    ],
  },
  reducers: {
    deleteTodos: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { deleteTodos } = todoSlice.actions;

export default todoSlice.reducer;
