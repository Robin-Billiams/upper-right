import React from 'react';

const Choices = ( { select, selected, options, prices } ) => {
  return (
    <div className='Choices'>
      {options.map( ( choice, index ) => {
        let difference = prices[ index ] - prices[ selected ] ;
        if ( index === selected ) {
          return (
            <span onClick={select.bind( this, index ) } style={ { cursor: 'pointer' } } className='option-select' key={ index }>
              { choice }
            </span>
          )
        } else {
          return (
            <span onClick={ select.bind( this, index ) } style={ { cursor: 'pointer' } } className='option-select' key={ index }>
              { choice } +${ difference }
            </span>
          )
        }
      })}
    </div>
  );
}

export default Choices;