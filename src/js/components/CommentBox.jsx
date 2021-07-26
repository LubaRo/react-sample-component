import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment.jsx"
import CreateComment from "./CreateComment.jsx"

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    }
    this.commentSubmitHandler = this.commentSubmitHandler.bind(this);
  }
  commentSubmitHandler(userName, text) {
    const newCommentsList = this.state.comments.concat([{ user: userName, content: text, id: Date.now()}]);

    this.setState({
      comments: newCommentsList
    })
  }
  render() {
    const comments = this.state.comments.map(function (comment) {
      return <Comment
        key={comment.id}
        id={comment.id}
        content={comment.content}
        user={comment.user}
      />;
    });

    return (
      <div>
        <div className='comments-list'>{comments}</div>
        <CreateComment onSubmitHandler={this.commentSubmitHandler} />
      </div>
    );
  }
}

CommentBox.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  }))
}

export default CommentBox;