import React, { Component } from 'react';
import Table from './table';
import './app.scss';
class App extends Component {

  constructor () {
    super();
  }

  render () {

    const {
      produktai,
      uzsakymai,
      uzsakymoEilutes,
      pasirinktaUzsakymoEilute,
      pasirinktiUzsakymoEilute,
      kurtiNaujaUzsakyma,
      toggleNewRow,
      isNewRowToggled,
      cellValues,
      setInput,
      saveRow
    } = this.props;
console.log(uzsakymoEilutes.toJS());
    return (
      <div className='app-root'>
        <div className='eilute-wrapper'>
          <div className='new-row-btn' onClick={() => toggleNewRow('uzsakymoEilutes')}>new row</div>
          <Table
            data = {uzsakymoEilutes}
            toggleNewRow = {toggleNewRow}
            isNewRowToggled = {isNewRowToggled}
            path = {'uzsakymoEilutes'}
            setInput = {setInput}
            saveRow = {saveRow}
          />
        </div>
      </div>
    );
  }
}

export default App;
