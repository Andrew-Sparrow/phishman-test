import { createReducer } from '@reduxjs/toolkit';

import {
  loadEvents
} from '../actions';

const initialState = {
  events: [],
  isDataLoaded: false
};

const events = createReducer(initialState, (builder) => {
  builder
    .addCase(loadEvents, (state, action) => {
      state.events = action.payload;
      state.isDataLoaded = true;
    })
});

export { events };
