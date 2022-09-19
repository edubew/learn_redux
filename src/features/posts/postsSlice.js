import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: 'I have heard good things.',
  },
  {
    id: '2',
    title: 'Slices..',
    content: 'collection of reducer logic and actions.',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
