import React, { Component } from 'react';
import Table from './../table';
import './eilute.scss';

class Eilute extends Component {

  constructor () {
    super();
  }
  
  render () {
    const { uzsakymai } = this.props;
    
    return (
      <div className='eilute'>
        <Table 
          data = {uzsakymai}
        />
      </div>
    );
  }
}

export default Eilute;
