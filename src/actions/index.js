import axios from 'axios';
import faker from 'faker';

const API_URL = 'http://private-5815fe-recommendationsknip.apiary-mock.com/products';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';


Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
};

Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key))
};

export function fetchProducts() {
  const request = axios.get(API_URL);

  return {
    type: FETCH_PRODUCTS,
    payload: request
  }
}

export function fetchComments() {
  const data = localStorage.getObj('comments');

  return {
    type: FETCH_COMMENTS,
    payload: data
  }
}

export function createComment(comment, name) {
  let comments = localStorage.getObj('comments');

  if(!comments) {
    comments = []
  }

  comments.push({comment: comment, name: name, updatedAt: new Date(), avatar: faker.image.avatar()});

  localStorage.setObj('comments', comments);

  return {
    type: CREATE_COMMENT,
    payload: comments
  }
}
