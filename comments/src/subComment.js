import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SubCommentItem from './subComment';

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      comments: []
    };
    // this.addComment = this.addComment.bind(this);
  }

//   handleChange(){
//     return (e) => {
//     this.setState({comment: e.target.value});
//     };
//   }

//   addComment(e) {
//     e.preventDefault();
//     const comments = this.state.comments;
//     comments.push(this.state.comment);
//     this.setState({comment: "", comments: comments});
//   }

  render() {
    // const comments = this.state.comments.map((comment, i) => {
    //   return <SubCommentItem key={i} comment={comment}/>;
    // });
    return (
      <div>
        {this.props.comment}
      </div>
    );
  }
}

export default PostItem;