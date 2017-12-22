import React, { Component } from 'react';
import Header from './header.js';
import Body from './body.js';
import './index.scss';

class Table extends Component {

  constructor () {
    super();
  }
  render () {
    const { data } = this.props;

    return (
      <div className='table'>
          <h2>{data.get('name')}</h2>
          <Header headers={data.get('headersNames')} />
          <Body 
            headers={data.get("headersKeys")}
            body={data.get('body')}  
           />
      </div>
    );
  }
}

export default Table;