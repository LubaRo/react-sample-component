import React from "react";
import PropTypes from "prop-types";

class Comment extends React.Component {
  render() {
    return (
      <div className='comment card mb-3'>
        <div className='comment-author card-header'>
          {this.props.user}
        </div>
        <div className='comment-content card-body'>
          {this.props.content}
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

export default Comment;