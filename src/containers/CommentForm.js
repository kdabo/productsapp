import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createComment} from '../actions/index';

class CommentForm extends Component {

  constructor() {
    super();

    this.state = {
      comments: [],
      comment: '',
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createComment(this.state.comment, this.state.name);
    this.setState({comment: '', name: ''})
  }

  render() {
    return (
      <form className='ui form' onSubmit={this.handleSubmit}>
        <div className='field'>
          <label>Your name</label>
          <input className='ui input' type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
        </div>
        <div className='field'>
          <label>Please rate the product</label>
          <textarea className='field' type='text' name='comment' value={this.state.comment} onChange={this.handleChange}/>
          <input className='ui button' type='submit' value='Post a comment' />
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}


export default connect(mapStateToProps, {createComment})(CommentForm);
