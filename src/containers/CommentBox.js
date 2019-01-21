import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchComments} from '../actions/index'
import CommentForm from './CommentForm';
import CommentList from '../components/CommentList';

class CommentBox extends Component {

  constructor() {
    super();

    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    const {comments} = this.props;

    const comment = comments && comments.map((comment, index) => {
      return (
        <CommentList avatar={comment.avatar}
                     firstName={comment.name}
                     key={index}
                     timeAgo={comment.updatedAt.toString()}
                     commentText={comment.comment}/>
        )
    });

    return (
      <div>
        <CommentForm />
        &nbsp;&nbsp;
        {comment}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps, {fetchComments})(CommentBox);
