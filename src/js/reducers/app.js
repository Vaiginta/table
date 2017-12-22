import Immutable, { Map } from 'immutable';
import createReducer
  from './createReducer.js';
import {
  KURTI_NAUJA_UZSAKYMA
} from '../action_types.js';
import produktai from '../produktai.json';
import uzsakymai from '../uzsakymai.json';

export const initialState = Immutable.fromJS({
  produktai:produktai,
  uzsakymai:uzsakymai
});

export const kurtiNaujaUzsakyma = (state, {}) => {
  let uzsakymai = state.getIn(['uzsakymai', 'body']);
  let uzsakymuSkaicius = uzsakymai.size;
  let uzsakymoData = new Date();
  let naujiUzsakymai = uzsakymai.concat(Immutable.fromJS([{uzsakymoNumeris: uzsakymuSkaicius + 1, uzsakymoData: uzsakymoData.toLocaleDateString("en-US").toString()}]))

  return state.setIn(['uzsakymai', 'body'], naujiUzsakymai);
};


export default createReducer(
  initialState,
  {
    [KURTI_NAUJA_UZSAKYMA] : kurtiNaujaUzsakyma
  }
);
