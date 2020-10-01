import React from 'react';

const Insurance = ( { ins, pointer } ) => {
  return (
    <div className='insurance'>
    { ins.map( ( price, index ) => {
      return (
        <div className='insurance-box' style={ pointer }>
          <span className='care+'>Samsung Care+</span>
          <p className='ins-plan' key={ index }>${ price } for 2 years plan</p>
        </div>
      )
    })}
    </div>
  )
}

export default Insurance;