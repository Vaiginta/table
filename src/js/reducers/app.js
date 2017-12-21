import Immutable, { Map } from 'immutable';
import createReducer
  from './createReducer.js';
import {
  TOGGLE
} from '../action_types.js';
import produktai from '../produktai.json';
export const initialState = Immutable.fromJS({
  produktai:produktai
});

export const toggle = (state, {path}) => {
  let currentValue = state.get(path);

  return state.set(path, !currentValue);
};


export default createReducer(
  initialState,
  {
    [TOGGLE] : toggle
  }
);
