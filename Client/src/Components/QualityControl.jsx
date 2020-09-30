import React from 'react';

const QualityControl = ( { handleClick, object, selected } ) => {
  const { modelNum, averageReview } = object;
  const { stars, votes } = averageReview;
  const styl = { cursor: 'pointer' };
  return(
    <div className='quality-control'>
      <p className='product-code'>{ modelNum[ selected ] }</p>
      <span className='all-stars'> _STARS{ stars }{ `(${votes})` } </span>
      <p className='btn-share' onClick={handleClick} style={ styl }>Share your product experience</p>
    </div>

  )
}

export default QualityControl;