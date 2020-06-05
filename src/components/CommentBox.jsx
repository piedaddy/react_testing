import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as actions from "actions";
//will grab all actions from actions directory
import requireAuth from 'components/requireAuth';

class CommentBox extends Component {
  //const [comment, setComment] = useState('');
  state = { comment: "" };


  handleSubmit = (e) => {
    e.preventDefault(); //keeps page from reloading
    //call an action creator

    //actions.saveComment(comment);
    this.props.saveComment(this.state.comment);
    //save the comment
    //setComment('');
    this.setState({ comment: "" });
  };

  handleCommentChange = (e) => {
    console.log("e", e.target.value);
    //setComment(e.target.value);
    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <h2>Add a comment</h2>
          <textarea
            onChange={this.handleCommentChange}
            className="comment_box"
            rows="10"
            cols="30"
            placeholder="this is my comment"
            value={this.state.comment}
          />
          <div>
            <button>Submit comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
        {/* we are giving a callback function that it can call at any time, not when it first gets rendered, so it doesn't have () with it
        when we bind action creator to the component, which we did in the export code below, it gets binded to the props object for the component itself  */}
      </div>
    );
  }
};


export default connect(null, actions)(requireAuth(CommentBox));
//actions being passed as props down to Comment Box 
