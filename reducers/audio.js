import { combineReducers } from 'redux';
import { TOGGLE_AUDIO } from '../actions/audio';

export const audioReducer = (state = { enabled: false }, action) => {
  switch (action.type) {
    case TOGGLE_AUDIO:
      return {
        enabled: !state.enabled
      };
    default:
      return state;
  }
};
