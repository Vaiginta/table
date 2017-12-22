import React, { Component } from 'react';
import Produktai from './produktai';
import Uzsakymai from './uzsakymai/uzsakymai';

class App extends Component {

  constructor () {
    super();
  }
  
  render () {
    const { produktai, uzsakymai } = this.props;
    const uzakymaiProps = {
      kurtiNaujaUzsakyma:this.props.kurtiNaujaUzsakyma
    };

    return (
      <div className='app-root'>
        <Uzsakymai 
          {...{uzsakymai, uzakymaiProps}}
        />
        <Produktai 
          {...{produktai}}
        />
      </div>
    );
  }
}

export default App;
