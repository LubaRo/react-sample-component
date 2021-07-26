import React from "react";
import PropTypes from "prop-types";
import CommentBox from "./CommentBox.jsx";

class Post extends React.Component {
  render() {
    const post = this.props.post;
    return (
      <div className='post-content'>
        <div className='post card border-success mb-3'>
          <div className='post-author card-header bg-success text-white' id={post.id}>
            {post.user}
          </div>

          <div className='post-body card-body'>
            {post.content}
          </div>
        </div>
        <CommentBox comments={this.props.comments} />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired
};

export default Post;