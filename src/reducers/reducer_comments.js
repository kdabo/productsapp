import { FETCH_COMMENTS, CREATE_COMMENT } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.payload;
    case CREATE_COMMENT:
      return action.payload;
    default:
      return state;
  }
}
