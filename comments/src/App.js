import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostItem from './postItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: "",
      posts: []
    };
    this.addPost = this.addPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  handleChange(){
    return (e) => {
    this.setState({post: e.target.value});
    };
  }

  addPost(e) {
    e.preventDefault();
    const posts = this.state.posts;
    posts.push(this.state.post);
    this.setState({post: "", posts: posts});
  }

  deletePost(e,idx) {
    e.preventDefault();
      const posts = this.state.posts.slice(0,idx).concat(this.state.posts.slice(idx + 1));
      this.setState({posts: posts});
  }

  render() {
    const posts = this.state.posts.map((post, i) => {
      return <li key={i}><button onClick={(e) => this.deletePost(e,i)}>Delete</button><PostItem post={post}/></li>;
    });
    return (
      <div>
       <h1>Put in your post</h1>
       <form onSubmit={(e) => this.addPost(e)}>
         <input onChange={this.handleChange()} value={this.state.post}/>
          <input type="submit"/>
       </form>
       <br/>
       <ul>
         {posts}
         </ul>
      </div>
    );
  }
}

export default App;
