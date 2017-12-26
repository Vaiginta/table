import React, { Component } from 'react';
import Table from './../table';
import './eilute.scss';

class Eilute extends Component {

  constructor () {
    super();
  }

  render () {
    const { uzsakymoEilute, toggleNewRow, isNewRowToggled, setInput, saveRow } = this.props;

    return (
      <div className='eilute'>
        <Table
          data = {uzsakymoEilute}
          toggleNewRow = {toggleNewRow}
          isNewRowToggled = {isNewRowToggled}
          path = {'uzsakymoEilutes'}
          setInput = {setInput}
          saveRow = {saveRow}
        />
      </div>
    );
  }
}

export default Eilute;
