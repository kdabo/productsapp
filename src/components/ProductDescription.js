import React from 'react';

const ProductDescription = props => {
  return (
    <div>
      <h4 className='ui left aligned header'>{props.description}</h4>
      <div className='description'>{props.text}</div>
    </div>
  )
};

export default ProductDescription;
