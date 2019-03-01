import React from 'react'
import Comment from './Comment'
import CommentsContext from './CommentsContext'

function CommentList(props) {
  return (
    <CommentsContext.Consumer>
      {context => (
        <div className='CommentList'>
          <h3>Comments</h3>
          {!context.comments.length ? <div>No comments</div> : (
            <ul>
              {context.comments.map((comment, i) =>
                <li key={i}>
                  <Comment comment={comment} />
                </li>
              )}
            </ul>
          )}
        </div>
      )}
    </CommentsContext.Consumer>
  )
}

export default CommentList
