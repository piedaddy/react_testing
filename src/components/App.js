import React from 'react';
import '../App.css';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';


function App() {
  return (
    <div className="App">
      <CommentBox />
      <CommentList />
    </div>
  );
}

export default App;
