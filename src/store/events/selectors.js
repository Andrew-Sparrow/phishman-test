import {NameSpace} from '../root-reducer';

export const getEvents = (state) => state[NameSpace.EVENTS].events;
