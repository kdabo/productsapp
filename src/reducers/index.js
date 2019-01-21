import { combineReducers } from 'redux';
import ProductsReducer from './reducer_products';
import CommentsReducer from './reducer_comments';

const rootReducer = combineReducers({
  products: ProductsReducer,
  comments: CommentsReducer,
});

export default rootReducer;
