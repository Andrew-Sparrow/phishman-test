import {
  loadEvents
} from './actions';

import { APIRoute } from '../const';

export const fetchEventsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.EVENTS)
    .then(({data}) => {
      dispatch(loadEvents(data));
    })
    .catch((err) => {})
);
