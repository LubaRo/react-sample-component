import React, {Component, createElement} from "react";
import PropTypes from "prop-types";
import CommentBox from "./CommentBox.jsx";

class Post extends Component {
  render() {
    const post = this.props.post;
    return React.createElement(
      "div", { className: 'post-content' }, React.createElement(
        "div",
        { className: 'post card border-success mb-3' },
          React.createElement(
            "div", { className: 'post-author card-header bg-success text-white', id: post.id }, post.user
          ),
          React.createElement(
            "div", { className: 'post-body card-body' }, post.content
          ),
      ),
      createElement(
        'div',
        {
          className: 'test-block'
        },
        "Children content"
      ),
      createElement(
        CommentBox,
        {
          comments: this.props.comments
        }
      )
    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired
};

export default Post;