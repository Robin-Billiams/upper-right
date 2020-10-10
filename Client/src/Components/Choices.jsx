import React from 'react';

const Choices = ( { select, selected, options, prices } ) => {
  return (
    <div className='Choices'>
      {options.map( ( choice, index ) => {
        let difference = index < selected ? `-$${ Number( ( Math.abs( prices[ index ] - prices[ selected ] ) ).toFixed( 2 ) ).toLocaleString( 'en' ) }` : `+$${ Number( ( prices[ index ] - prices[ selected ] ).toFixed( 2 ) ).toLocaleString( 'en' ) }`
        console.log( difference)
        if ( index === selected ) {
          return (
            <span onClick={select.bind( this, index ) } style={ { cursor: 'pointer' } } className='option-select' key={ index }>
              <b className='choice'>The { choice }</b>
            </span>
          )
        } else {
          return (
            <span onClick={ select.bind( this, index ) } style={ { cursor: 'pointer' } } className='option-select' key={ index }>
              <b className='choice'>The { choice }</b> { difference }
            </span>
          )
        }
      })}
    </div>
  );
}

export default Choices;