import {combineReducers} from 'redux';
import {places} from './places/places';

export const NameSpace = {
  PLACES: 'PLACES'
};

export default combineReducers({
  [NameSpace.PLACES]: places,
});
