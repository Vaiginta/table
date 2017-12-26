import React, { Component } from 'react';
class Body extends Component {

  constructor () {
    super();
  }
  render () {
    const { body, headers, tableRowAction, isNewRowToggled, path, setInput, saveRow } = this.props;

    return (
      <div className='table-body'>
          { body.map((row, i) => {
              return (
                <div
                  key={i}
                  className='table-row'
                  onClick={() => tableRowAction(row)}
                >
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
          <div className='table-row'>
            { isNewRowToggled && isNewRowToggled.get(path) && headers.map((headerKey, i) => {
              return (
                <div className='table-cell' key={i} data-key={i}>
                  <input onChange={e => setInput(['cellValues', path, headerKey], e.target.value)} autoFocus={i === 0} />
                </div>
              );
            })}
            <div className='save-btn' onClick={() => saveRow(path)}>issaugoti eilute</div>
          </div>
      </div>
    );
  }
}

export default Body;
