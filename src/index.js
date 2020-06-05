import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";


/*
/////////////////////////////////////////
older way of doing it, before we fixed it so it could work in the tests!
/////////////////////////////////////////
import { Provider } from "react-redux";
//will be the thing that connects states to diff components
import { createStore } from "redux";
import reducers from "reducers";
//using absolute

ReactDOM.render(
  //first arg: list of reducers //second arg: initial state for store
  <Provider store={createStore(reducers, {})}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
/////////////////////////////////////////
*/  

import Root from 'Root';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render (
  <Root>
    <BrowserRouter>
      {/* <App /> */}
      <Route path="/" component={App} />
      {/* whenever someone goes to url with /, it will show the App component  */}
    </BrowserRouter>
  </Root>,
  document.querySelector('#root')
);
