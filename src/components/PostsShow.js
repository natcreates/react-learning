import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPost} from '../actions';

class PostsNew extends Component {
  // get the data as soon as component rendered to DOM
  componentDidMount() {
    // match.params.id is a prop provided by react-router via Route
    // params is an object listing all the wildcard tokens in a url
    // we want one called id, which we defined when defining the Route
    const {id} = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const {post} = this.props;

    // check if we have the post. The first time component
    // renders (when component has mounted) we don't have the post yet
    if(!post) {
      return <div>Loading... </div>
    }
    return (
      <div>
        <Link to="/" className="btn btn-primary">Back to Index</Link>
        <h3>{post.title}</h3>
        <h4>Categories: {post.categories}</h4>
        <p>{post.content}</p>
      </div>
    );
  }
}

const mapStateToProps = ({posts}, ownProps) => {
  // ownProps is the props object going to this component
  // return only a single post from the posts obj in state
  // this means the single post is available as this.props.post
  return { post: posts[ownProps.match.params.id]};

}
export default connect(mapStateToProps, fetchPost)(PostsShow);
