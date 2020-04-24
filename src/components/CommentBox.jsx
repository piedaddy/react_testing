import React, {useEffect, useState} from 'react';
import '../App.css';


export default function CommentBox() {
  const [comment, setComment] = useState('');

  const handleSendComment = () => {
    
  }

  const handleCommentChange = (e) => {
    console.log('e', e.target.value)
    setComment(e.target.value);
  }

   return (
    <div className="comments" >
      <h2>Add a comment</h2>
      <textarea onChange={handleCommentChange} className="comment_box" rows="10" cols="30" placeholder="this is my comment" value={comment}/> 
      <div>
      <button onClick={handleSendComment} name="submit" value="submit comment">Submit comment</button>
      </div>
    </div>
  )
}