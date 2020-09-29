import React from 'react';

const QualityControl = ( { handleClick, object } ) => {
  const { modelNum, averageReview } = object;
  const { stars, votes } = averageReview;
  const styl = { cursor: 'pointer' };
  return(
    <div className='quality-control'>
      <p className='product-code'>{ modelNum }</p><span className='all-stars'> { stars }_STARS{ votes } </span><p className='btn-share' onClick={handleClick} style={ styl }>Share</p>
    </div>
  )
}

export default QualityControl;