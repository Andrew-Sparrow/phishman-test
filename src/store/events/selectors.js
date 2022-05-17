import {NameSpace} from '../root-reducer';

export const getEvents = (state) => state[NameSpace.EVENTS].places;
export const getIsDataLoaded = (state) => state[NameSpace.EVENTS].isDataLoaded;
