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
          <Header headers={data.get('headers')} />
          <Body 
            headers={data.get("headers")}
            body={data.get('body')}  
           />
      </div>
    );
  }
}

export default Table;