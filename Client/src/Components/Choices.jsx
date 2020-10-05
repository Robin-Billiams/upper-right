import React from 'react';

const Choices = ( { select, selected, options, prices } ) => {
  return (
    <div className='Choices'>
      {options.map( ( choice, index ) => {
        let difference = index < selected ? `-$${ Math.abs( prices[ index ] - prices[ selected ] ) }` : `+$${ prices[ index ] - prices[ selected ] }`
        if ( index === selected ) {
          return (
            <span onClick={select.bind( this, index ) } style={ { cursor: 'pointer' } } className='option-select' key={ index }>
              <b className='choice'>{ choice }</b>
            </span>
          )
        } else {
          return (
            <span onClick={ select.bind( this, index ) } style={ { cursor: 'pointer' } } className='option-select' key={ index }>
              <b className='choice'>{ choice }</b> { difference }
            </span>
          )
        }
      })}
    </div>
  );
}

export default Choices;