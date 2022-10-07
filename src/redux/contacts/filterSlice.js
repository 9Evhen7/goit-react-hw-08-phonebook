import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterQuery: (state, action) => (state = action.payload),
  },
});

export const { setFilterQuery } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
