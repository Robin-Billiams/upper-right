import React from 'react';

const Financing = ( { instl, total } ) => {
  return (
    <div className='installments'>
      <p className='cost-a-month'>${ instl }</p>/mo for <p className='cost-a-month'>48</p> mos at <p className='cost-a-month'>0%</p> APR
      <br/>
      excludes tax and shipping
      <br/>
      <a className='with-financing-btn' > WITH SAMSUNG FINANCING</a>
      <hr/>
      <span className='buy-now-price'><p className='discounted'>${ (total - 1000).toLocaleString('en') }  </p> <p className='total'>${ total.toLocaleString('en') }</p>
      <br/>
      <p className='savings'>Save $1000</p>
      </span>
    </div>
  )
}
//line 14 will need a function to run on a 13% savings
export default Financing;