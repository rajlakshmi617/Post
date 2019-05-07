import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    console.log("---->", post);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              onChange={this.onChangeHandler}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <textarea
              name="body"
              onChange={this.onChangeHandler}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit" onSubmit={this.onSubmitHandler}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default PostForm;
