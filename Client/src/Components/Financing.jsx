import React from 'react';

const Financing = ( { total } ) => {
  return (
    <div className='installments'>
      <p className='cost-a-month'>${ total }</p>/mo for <p className='cost-a-month'>48</p> mos at <p className='cost-a-month'>0%</p> APR
      <br/>
      excludes tax and shipping
      <br/>
      <a className='with-financing-btn'> WITH SAMSUNG FINANCING</a>

    </div>
  )
}

export default Financing;