import React from 'react';

const Financing = ( { instl, total, savings } ) => {
  return (
    <div className='installments'>
      <p className='cost-a-month'>${ instl.toFixed(2) }</p>/mo for <p className='cost-a-month'>48</p> mos at <p className='cost-a-month'>0%</p> APR
      <br/>
      excludes tax and shipping
      <br/>
      <a className='with-financing-btn' > WITH SAMSUNG FINANCING</a>
      <h2 className='dynamic-line'><span className='or'>OR</span></h2>
      <span className='buy-now-price'><p className='discounted'>${ (total - savings).toLocaleString('en') }  </p> <p className='total'>${ total.toLocaleString('en') }</p>
      <br/>
      <p className='savings'>Save ${ savings } </p>
      </span>
    </div>
  )
}
//line 14 will need a function to run on a 13% savings
export default Financing;