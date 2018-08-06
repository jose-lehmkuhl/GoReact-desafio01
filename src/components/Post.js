import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = ({ post }) => (
  <div className="post-container">
    <PostHeader post={post} />
    <hr />
    <p>{post.message}</p>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    message: PropTypes.string,
    pic: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Post;
