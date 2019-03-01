import React from 'react'

function Comment({ comment }) {
  return (
    <div className='Comment'>
      <span className='author'>{comment.author} says:</span>
      <p className='comment'>{comment.comment}</p>
    </div>
  )
}

Comment.defaultProps = {
  comment: {},
}

export default Comment
