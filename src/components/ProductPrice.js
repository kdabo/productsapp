import React from 'react';

const ProductPrice= (props) => {
  return (
    <div className='ui large transparent left icon'>
      <h1><i className='euro sign icon'></i> {props.price}</h1>
    </div>
  )
};

export default ProductPrice;
