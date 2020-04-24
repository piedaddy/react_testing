import React from 'react';


export default function CommentBox() {

  const handleSendComment = () => {
    
  }

   return (
    <div>
      <h1>Add a comment</h1>
      <textarea rows="10" cols="30"/> 
      <button onClick={handleSendComment} name="submit" value="submit comment">Submit comment</button>
    </div>
  )
}