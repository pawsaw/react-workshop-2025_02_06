import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
}

export const counterFeatureName = 'counter';

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: counterFeatureName,
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      return {
        ...state,
        count: state.count + 1,
      };
    },
    decrement: (state: CounterState) => {
      return {
        ...state,
        count: state.count - 1,
      };
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions; // Achtung: das sind die Action Creators, also Funktionen
export const counterReducer = counterSlice.reducer;

export const countSelector = (state) => state.count.count;
