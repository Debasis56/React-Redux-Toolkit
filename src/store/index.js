import { configureStore } from "@reduxjs/toolkit";

import { songsReducer, addSong, removeSong } from "./slices/songSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";
// export const reset = createAction("app/reset");
// console.log(reset);
// const moviesSlice = createSlice({
//   name: "movie",
//   initialState: [],
//   reducers: {
//     addMovie(state, action) {
//       state.push(action.payload);
//     },
//     removeMovie(state, action) {
//       const index = state.indexOf(action.payload);
//       state.splice(index, 1);
//     }
//     // reset(state, action) {
//     //   return [];
//     // }
//   },
//   extraReducers(builder) {
//     builder.addCase(reset, (state, action) => {
//       return [];
//     });
//   }
// });

// const songSlice = createSlice({
//   name: "Song",
//   initialState: [],
//   reducers: {
//     addSong(state, action) {
//       state.push(action.payload);
//     },
//     removeSong(state, action) {
//       const index = state.indexOf(action.payload);
//       state.splice(index, 1);
//     }
//   },
//   extraReducers(builder) {
//     builder.addCase(reset, (state, action) => {
//       return [];
//     });
//   }
// });

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
});

const startingState = store.getState();
console.log(JSON.stringify(startingState));

//store.dispatch(songSlice.actions.addSong("Some Song!!"));

const finalState = store.getState();
console.log(JSON.stringify(finalState));
export { store };
export { reset, addSong, removeSong, addMovie, removeMovie };
// export const { addSong, removeSong } = songSlice.actions;
// export const { addMovie, removeMovie } = moviesSlice.actions;
