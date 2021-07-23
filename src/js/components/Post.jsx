import React, { Component } from "react";
import PropTypes from "prop-types";

class Post extends Component {
  render() {
    return React.createElement(
      "div", { className: 'post-content' }, React.createElement(
        "div",
        { className: 'post card border-success mb-3' },
          React.createElement(
            "div", { className: 'post-author card-header bg-success text-white', id: this.props.id }, this.props.user
          ),
          React.createElement(
            "div", { className: 'post-body card-body' }, this.props.content
          ),
      ),
      this.props.children
    )
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired
};

export default Post;