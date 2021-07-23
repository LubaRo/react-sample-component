import React, { Component } from "react";
import PropTypes from "prop-types";

class Comment extends Component {
  render() {
    return React.createElement(
      "div",
      { className: "comment card mb-3" },
      React.createElement(
      "div", { className: "commentAuthor card-header" }, this.props.user
      ),
      React.createElement(
        "div", { className: "commentContent card-body" }, this.props.content
      )
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

export default Comment;