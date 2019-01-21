import React from 'react';
import { Link } from 'react-router-dom';
import ProductHeader from './ProductHeader';
import ProductPrice from './ProductPrice';

const ProductListItem = props => {
  return (
    <div className='item'>
      <div className='ui small image'>
          <img src={props.image} alt="product-image" />
      </div>
        <div className='content'>
          <ProductHeader title={props.title}/>
          <ProductPrice price={props.price}/>
          <Link to={`/product/${props.id}`}>
            <div className='extra'>
              <div className='ui left basic floated secondary button'>Buy now</div>
            </div>
          </Link>
        </div>
    </div>
  )
};

export default ProductListItem;
