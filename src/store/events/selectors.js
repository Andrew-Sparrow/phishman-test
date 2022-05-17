import {NameSpace} from '../root-reducer';

export const getEvents = (state) => state[NameSpace.PLACES].places;
export const getIsDataLoaded = (state) => state[NameSpace.PLACES].isDataLoaded;
