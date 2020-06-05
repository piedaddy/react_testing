import React, {Component} from 'react';
import {connect} from 'react-redux';

class CommentList extends Component {

  renderComments() {
    console.log(this.props.comments)
    return (
      this.props.comments.map(comment => {
        return <li key={comment}> {comment} </li>
      })
    )
  }

  render() {
    return (
      <div>
        <ul>
          <h4>Comment List</h4>
          {this.renderComments()}
          hi
        </ul>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {comments: state.comments}
  //will now show up as props to this component , getting from reducers file 
  //this is how we get the list of comments
}

export default connect(mapStateToProps)(CommentList);