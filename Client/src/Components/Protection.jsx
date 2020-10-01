import React from 'react';
import Insurance from './Insurance.jsx';

let pointer = { cursor: 'pointer' };
const Protection = ( props ) => {
  return(
    <div className='protection'>
      <p className='protection-title'> Get added protection and confidence. </p>
      <br/>
      <p className='protection-details'> When the unexpected happens, rest easy with Samsung Care+. From a personal setup session to continued protection for mechanical and electrical breakdowns, we'll take care of you every step of the way</p>
      <br/>
      <Insurance ins={ props.ins } pointer={ pointer }/>
      <p className='t-o-s'> By subscribing to Samsung Care+, I agree to Samsung Premium Care <a style={ pointer }>Terms of Service</a> and Service Contract<a style={ pointer }>Terms and Conditions</a></p>
    </div>
  )
}


export default Protection;