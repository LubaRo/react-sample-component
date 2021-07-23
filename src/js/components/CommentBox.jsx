import React, { Component } from "react";
import PropTypes from "prop-types";
import Comment from "./Comment.jsx"
import CreateComment from "./CreateComment.jsx"

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    }
  }
  render() {
    const comments = this.state.comments.map(function (comment) {
      return React.createElement(Comment, {
        key: comment.id,
        id: comment.id,
        content: comment.content,
        user: comment.user
      })
    })
    return React.createElement(
      'div',
      {className: 'commentBox'},
      ...comments,
      React.createElement(CreateComment)
    )
  }
}

export default CommentBox;