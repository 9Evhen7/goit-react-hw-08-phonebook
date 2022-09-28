import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { query: '' },
  reducers: {
    setFilterQuery: {
      reducer(state, action) {
        state.query = action.payload;
      },
    },
  },
});

export const { setFilterQuery } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
