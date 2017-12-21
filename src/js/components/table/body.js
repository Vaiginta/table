import React, { Component } from 'react';
class Body extends Component {

  constructor () {
    super();
  }
  render () {
    const { body, headers } = this.props;

    return (
      <div className='table-body'>
          { body.map((row, i) => {
              return (
                <div key={i} className='table-row'>
                    { headers.map((headerKey, j) => {
                        return (
                            <div key={j} className='table-cell'>
                                { row.get(headerKey) }
                            </div>  
                        );
                    }) }
                </div>
              );
          }) }
      </div>
    );
  }
}

export default Body;