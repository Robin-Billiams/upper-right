import React from 'react';

const Financing = ( { instl, total } ) => {
  return (
    <div className='installments'>
      <p className='cost-a-month'>${ instl }</p>/mo for <p className='cost-a-month'>48</p> mos at <p className='cost-a-month'>0%</p> APR
      <br/>
      excludes tax and shipping
      <br/>
      <a className='with-financing-btn' style={ { cursor: 'pointer' } }> WITH SAMSUNG FINANCING</a>
      <hr/>
      <span className='buy-now-price'><p className='discounted'>${ total - 1000 }</p><p className='total'>${ total }</p> </span>
    </div>
  )
}

export default Financing;