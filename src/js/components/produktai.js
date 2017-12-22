import React, { Component } from 'react';
import Table from './table';

class Produktai extends Component {

  constructor () {
    super();
  }
  
  render () {
    const { produktai } = this.props;
    
    return (
      <div className='produktai'>
        <Table 
          data = {produktai}
        />
      </div>
    );
  }
}

export default Produktai;
