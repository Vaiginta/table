import React, { Component } from 'react';

class Header extends Component {

  constructor () {
    super();
  }
  render () {
    const { headers } = this.props;

    return (
      <div className='header'>
          <div className='header-row'>
            { headers.map((h, i)  => {
                return (
                    <div key={i} className='header-cell'>
                        {h}
                    </div>
                );
            })}
          </div>
      </div>
    );
  }
}

export default Header;