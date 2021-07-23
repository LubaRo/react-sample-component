import React, { Component } from "react";
import PropTypes from "prop-types";

class Post extends Component {
  render() {
    return React.createElement(
      "div", { className: 'post' }, React.createElement(
        "h2", { className: 'post-author', id: this.props.id }, this.props.user, React.createElement(
            "span", { className: 'post-body' }, this.props.content
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