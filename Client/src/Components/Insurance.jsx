import React from 'react';

const Insurance = ( { ins, pointer, selection } ) => {
  return (
    <div className='insurance'>
    { ins.map( ( price, key ) => {
      return (
        <div className='insurance-box' style={ pointer } key={ key }>
          <span className='care' >Samsung Care+</span>
          <p className='ins-plan'>${ price[selection] } for 2 years plan</p>
        </div>
      )
    })}
    </div>
  )
}

export default Insurance;