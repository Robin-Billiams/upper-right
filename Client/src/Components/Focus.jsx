import React from 'react';


const Focus = ({ data, wishClick, selected, heart }) => {
  const { name } = data;
  return (
    <div className='focus'>
      <h4><div className='product-name'>{ name[ selected ] }</div></h4>
      <div className='wishlist' style={ { cursor: 'pointer' } }>{heart} Wishlist</div>
    </div>
  )
}
{
  //I tried setting line 10 'style' in the CSS but it didn't work and several people on stack over flow had simmilar issues for different reasons. This works though.
}
export default Focus;