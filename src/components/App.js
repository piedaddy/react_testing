import React from "react";
import { Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { changeAuth } from "actions";

//class App extends Component() {
function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const renderButton = () => {
    if (auth) {
      return (
        <button onClick={() => dispatch(changeAuth(false))}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => dispatch(changeAuth(true))}>Sign In</button>
      );
    }
  };

  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>{renderButton()}</li>
      </ul>
    );
  };

  // render() {
  return (
    <div className="App">
      {/* <CommentBox />
        <CommentList /> */}
      {renderHeader()}
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
  //}
}


//THIS GETS REPLACED BY USE SELECTOR ()
      // function mapStateToProps(state) {
      //   return { auth: state.auth };
      // }

      // USESELECTOR() runs whenever function component renders, and its job is to extract data from the Redux store state 
      // USE DISPATCH acts as a replacement for mapDispatchToProps, returns to the reference to the dispatch object, makes the appropriate action happen



//THIS GETS REPLACED BY USE SELECTOR AND USE DISPATCH
    //export default connect(mapStateToProps)(App);


//export default connect(mapStateToProps, actions)(App);
//if i was using class component i would need this


export default App;