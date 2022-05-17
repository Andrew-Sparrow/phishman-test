import {
  loadEvents
} from './actions';

import { APIRoute } from '../const';

export const fetchEventsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.EVENTS)
    .then(({ data }) => {
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      dispatch(loadEvents(data));
    })
    .catch((err) => {})
);
