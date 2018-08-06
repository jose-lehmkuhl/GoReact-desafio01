import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ post }) => (
  <div className="post-header-container">
    <img src={post.pic} alt={`${post.name} profile pic`} />
    <div className="post-header-info">
      <h2>{post.name}</h2>
      <p>{post.time}</p>
    </div>
  </div>
);

PostHeader.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    message: PropTypes.string,
    pic: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
export default PostHeader;
