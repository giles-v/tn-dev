import { combineReducers } from 'redux';
import { SELECT_NAVITEM } from '../actions/nav';

const DEFAULT_SELECTED_ITEM_STATE = {
  selections: []
};

export const navReducer = (state = DEFAULT_SELECTED_ITEM_STATE, action) => {
  switch (action.type) {
    case SELECT_NAVITEM:
      // strip away any nav selections equal to or beyond this one
      const selections = state.selections.filter((item) => item.x < action.x);
      // add on this one
      selections.push({
        x: action.x,
        y: action.y
      });
      return {
        selections
      };
    default:
      return state;
  }
};
