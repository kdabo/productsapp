import React,  { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import ImageZoom from 'react-medium-image-zoom'

import {fetchProducts} from '../actions/index';
import ProductHeader from '../components/ProductHeader';
import ProductDescription from '../components/ProductDescription';
import ProductPrice from '../components/ProductPrice';
import CommentBox from './CommentBox';

class ProductDetail extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const {product} = this.props;

    if (!product) {
      return <div> Loading... </div>
    }

    const galleryPhotos = product.images;
    const thumbsList = galleryPhotos.map((photo, index) => {
      return (
        <ImageZoom
          key={index}
          image={{
            src: photo.thumb,
            className: 'image',
            style: { width: '15rem' }
          }}
          zoomImage={{
            src: photo.original,
          }}
      />)
    });

    return (
      <div className='container ui'>
        <Link className='ui labeled icon button' to='/'>
          <i className='left arrow icon'/>
          Back to Products</Link>
        <ProductHeader title={product.title}/>
        <ProductPrice price={product.price}/>
        <div className='column'>{thumbsList}</div>
        <div className='ui segment'>
          <ProductDescription text={product.description} description='Description:' />&nbsp;
          <ProductDescription text={product.specification} description='Specification:' />
        </div>
        &nbsp;&nbsp;
        <h2 className='ui left aligned header'>Reviews</h2>
        <CommentBox/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  if(!state.products) {
    return {}
  }
  let product = state.products.find(product => {
    if (product.id === parseInt(ownProps.match.params.id)) {
      return product;
    } else {
      return null;
    }
  });
  return {product};
}

export default connect(mapStateToProps,{fetchProducts})(ProductDetail);
