import { reset } from "../actions";
import { createSlice } from "@reduxjs/toolkit";
const songSlice = createSlice({
  name: "Song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

export const { addSong, removeSong } = songSlice.actions;
export const songsReducer = songSlice.reducer;
