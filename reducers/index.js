import { combineReducers } from 'redux';

import { audioReducer } from './audio';
import { navReducer } from './nav';

export const reducers = combineReducers({
  audio: audioReducer,
  nav: navReducer
});
