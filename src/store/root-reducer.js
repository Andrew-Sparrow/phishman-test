import {combineReducers} from 'redux';
import { events } from './events/events';

export const NameSpace = {
  EVENTS: 'EVENTS'
};

export default combineReducers({
  [NameSpace.EVENTS]: events,
});
