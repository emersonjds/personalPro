import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const {increment} = counterSlice.actions;
