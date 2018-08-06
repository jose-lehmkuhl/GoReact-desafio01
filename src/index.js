import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import Post from './components/Post';

const postsJson = require('../posts.json');

class App extends Component {
  state = {
    posts: postsJson,
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        {posts.map(post => <Post key={post.id} post={post} />)}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
