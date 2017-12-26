import {
  TOGGLE_NEW_ROW,
  SET_INPUT,
  SAVE_ROW
 } from '../action_types.js';

export const saveRow = (path) => {
  return {
    type: SAVE_ROW,
    path
  }
}

export const toggleNewRow = (path) => {

 return {
   type: TOGGLE_NEW_ROW,
   path
 };
};

export const setInput = (path, value) => {

 return {
   type: SET_INPUT,
   path,
   value
 };
};
