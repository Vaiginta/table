import React, { Component } from 'react';
import Table from './../table';
import './uzsakymai.scss';

class Uzsakymai extends Component {

  constructor () {
    super();
  }
  
  render () {
    const { uzsakymai, uzakymaiProps } = this.props;
    
    return (
      <div className='uzsakymai'>
        <div className='kurti-uzsakyma-btn' onClick={uzakymaiProps.kurtiNaujaUzsakyma}>
          kurti nauja uzsakyma
        </div>
        <Table 
          data = {uzsakymai}
        />
      </div>
    );
  }
}

export default Uzsakymai;
