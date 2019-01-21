import React from 'react';
import Comment from './Comment';

const CommentList = props => {
 return (
    <div className='ui comments'>
      <Comment avatar={props.avatar}
               firstName={props.firstName}
               timeAgo={props.timeAgo}
               commentText={props.commentText}
      />
    </div>
  )
};

export default CommentList;
