import React from 'react';

const Insurance = ( { ins, pointer } ) => {
  return (
    <div className='insurance'>
    { ins.map( ( price, key ) => {
      return (
        <div className='insurance-box' style={ pointer }>
          <span className='care' key={ key }>Samsung Care+</span>
          <p className='ins-plan'>${ price } for 2 years plan</p>
        </div>
      )
    })}
    </div>
  )
}

export default Insurance;