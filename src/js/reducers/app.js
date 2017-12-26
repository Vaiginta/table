import Immutable, { Map } from 'immutable';
import createReducer
  from './createReducer.js';
import {
  TOGGLE_NEW_ROW,
  SET_INPUT,
  SAVE_ROW
} from '../action_types.js';
import produktai from '../produktai.json';
import uzsakymai from '../uzsakymai.json';
import uzsakymoEilutes from '../uzsakymo_eilute.json';

export const initialState = Immutable.fromJS({
  uzsakymoEilutes:uzsakymoEilutes,
  isNewRowToggled:{},
  cellValues:{}
});

export const saveRow = (state, {path}) => {
  let bodyData = state.getIn([path, 'body']);
  let newRowData = state.getIn(['cellValues', path]);
  let bodyDataWithNewRow = bodyData.concat([newRowData]);
  return state.setIn([path, 'body'], bodyDataWithNewRow);
}

export const toggleNewRow = (state, {path}) => {
  let isNewRowToggled = state.getIn(['isNewRowToggled', path]);
  return state.setIn(['isNewRowToggled', path], !isNewRowToggled );
}

export const setInput = (state, {path, value}) => {
  return state.setIn(path, value);
}

export default createReducer(
  initialState,
  {
    [TOGGLE_NEW_ROW] : toggleNewRow,
    [SET_INPUT] : setInput,
    [SAVE_ROW] : saveRow
  }
);
