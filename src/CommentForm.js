import React, { Component } from 'react'

export default class CommentForm extends Component {
  // static contextType = CommentsContext

  handleSubmit = (ev) => {
    ev.preventDefault()
    const { author, comment } = ev.target

    /* change code */

    console.log({
      author: author.value,
      comment: comment.value,
    })

    author.value = ''
    comment.value = ''
  }

  render() {
    return (
      <div className='CommentForm'>
        <h3>Add a comment</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='author'>Author:</label>
            <input type='text' id='author' />
          </div>
          <div>
            <label htmlFor='comment'>Comment:</label>
            <textarea id='comment' />
          </div>
          <button type='submit'>
            Post comment
          </button>
        </form>
      </div>
    )
  }
}
