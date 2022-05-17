import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_EVENTS: 'events/loadEvents',
};

export const loadEvents = createAction(
  ActionType.LOAD_EVENTS,
  (events) => ({payload: events}),
);

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (url) => ({payload: url}),
);
