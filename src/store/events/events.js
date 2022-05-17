import { createReducer } from '@reduxjs/toolkit';
import { adaptServerDataToClient } from '../../utils';

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
      state.events = adaptServerDataToClient(action.payload);
      state.isDataLoaded = true;
    })
    .addDefaultCase((state, action) => state)
});

export { events };
