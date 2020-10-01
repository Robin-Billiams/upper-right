import React from 'react';

const Insurance = ( { ins, pointer } ) => {
  return (
    <div>
    { ins.map( ( price, index ) => {
      return (
        <span className='insurance-box' style={ pointer }></span>
      )
    })}
    </div>
  )
}

export default Insurance;