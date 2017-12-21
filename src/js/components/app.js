import React, { Component } from 'react';
import Table from './table';

class App extends Component {

  constructor () {
    super();
  }
  
  render () {
    const { produktai } = this.props;
    
    return (
      <div className='app-root'>
        <Table 
          data = {produktai}
        />
      </div>
    );
  }
}

export default App;
