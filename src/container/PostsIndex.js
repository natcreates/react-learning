import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {map} from 'lodash';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {
  // make the API call as should as we load
  // called when component present in DOM
  // called automatically first time rendered
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
          {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
        <div>
          <div className="text-xs-right">
            <Link className="btn btn-primary" to="/posts/new">
              Add New Post
            </Link>
          </div>
          <h3>Posts</h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
}
// the below passing of an object instead of mapDispatchToProps
// has the same affect- connect will pass result to dispatch
export default connect (mapStateToProps, {fetchPosts})(PostsIndex);
