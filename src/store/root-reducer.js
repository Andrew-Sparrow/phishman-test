import {combineReducers} from 'redux';
import {places} from './places/places';

export const NameSpace = {
  EVENTS: 'EVENTS'
};

export default combineReducers({
  [NameSpace.EVENTS]: places,
});
