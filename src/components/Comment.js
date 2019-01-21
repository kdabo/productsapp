import React from 'react';

const Comment = props => {
  return (
    <div className='comment'>
      <div className='avatar'>
          <img alt='avatar' className='avatar' src={props.avatar} />
      </div>
      <div className='content'>
        <span className='author'>{props.firstName}</span>
        <div className='metadata'>
          <span className='date'>{props.timeAgo}</span>
        </div>
        <div className='text'>
          <p>{props.commentText}</p>
        </div>
      </div>
    </div>
  )
};

export default Comment;
