import React, { Component } from "react";
import PostForm from "./postform";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }
  render() {
    const postItem = this.state.posts.map(post => (
      <div>
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      </div>
    ));
    return (
      <div>
        <PostForm />
        <h1>Posts</h1>
        {postItem}
      </div>
    );
  }
}

export default Posts;
