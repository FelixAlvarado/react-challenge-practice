import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentItem from './commentItem';

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      comments: []
    };
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  handleChange(){
    return (e) => {
    this.setState({comment: e.target.value});
    };
  }

  addComment(e) {
    e.preventDefault();
    const comments = this.state.comments;
    comments.push(this.state.comment);
    this.setState({comment: "", comments: comments});
  }

  deleteComment(e,idx) {
    e.preventDefault();
      const comments = this.state.comments.slice(0,idx).concat(this.state.comments.slice(idx + 1));
      this.setState({comments: comments});
  }

  render() {
    const comments = this.state.comments.map((comment, i) => {
      return <li key={i}><button onClick={(e) => this.deleteComment(e,i)}>Delete</button><CommentItem comment={comment}/></li>;
    });
    return (
      <div>
      <div className="floatLeft">{this.props.post}</div>
      <form   className="floatLeft" onSubmit={(e) => this.addComment(e)}>
         <input onChange={this.handleChange()} value={this.state.comment}/>
          <input type="submit"/>
       </form>
       <br/>
       <ul>
          {comments}
          </ul>
      </div>
    );
  }
}

export default PostItem;