import React, { Component } from 'react';
import Table from './../table';
import './uzsakymai.scss';

class Uzsakymai extends Component {

  constructor () {
    super();
    this.pasirinktiEilute = this.pasirinktiEilute.bind(this);
  }

  pasirinktiEilute(row) {
    this.props.uzsakymaiProps.pasirinktiUzsakymoEilute(row.get('uzsakymoEilutesId'));
  }

  render () {
    const {
      uzsakymai,
      kurtiNaujaUzsakyma,
      uzsakymoEilutes,
      pasirinktiUzsakymoEilute,
      pasirinktaUzsakymoEilute,
      isNewRowToggled
    } = this.props.uzsakymaiProps;

    return (
      <div className='uzsakymai'>
        <div className='kurti-uzsakyma-btn' onClick={kurtiNaujaUzsakyma}>
          kurti nauja uzsakyma
        </div>
        <Table
          data = {uzsakymai}
          tableRowAction = {this.pasirinktiEilute}
          isNewRowToggled = {isNewRowToggled}
          path = {'uzsakymai'}
        />
      </div>
    );
  }
}

export default Uzsakymai;
