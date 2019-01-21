import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/index';
import ProductListItem from '../components/ProductListItem';

class ProductList extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const productItems = this.props.products.map((product) => {
      return (
        <ProductListItem
            key={product.id}
            id={product.id}
            image={product.images[2].thumb}
            title={product.title}
            price={product.price}
         />
        )
      });

      return (
        <div className='ui container'>
          <h1 className='ui left aligned header'>Waterguns</h1>
          <div className='ui relaxed divided items'>{productItems}</div>
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps,{fetchProducts})(ProductList);
