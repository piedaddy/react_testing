import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from 'reducers';
import reduxPromise from 'redux-promise';


// export default (props) => {
//   return (
//     // <Provider store={createStore(reducers, {})}>
//     <Provider store={createStore(reducers, props.initialState)}>
//       {props.children}
//     </Provider>
//   )
// }



//because only one component, CommentList, needs to use that modified state, we have to change this function a bit so the other components that use it will be able to work still
//now i can set a default value for initalState so that if the component doesn't clarify that value, it will just use the default and everyone will be happy
export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(reduxPromise))
  //we have now taught redux how to act with asynchronous action creators 
  return (
    // <Provider store={createStore(reducers, {})}>
    <Provider store={store}>
      {children}
    </Provider>
  )
}

//now whenever we call this function, it will make all this, it will be able to wrap a component in Provider tag
//create store is a function, the way that we create an instance of the redux store to use inside our app
//the empty object as the second argument is v important! we use the store to store STATE
//every reducer runs once during set up, and then sets inital state to empty object, redux uses the 
//but we can edit that second argument 

//now we have provided an initial starting state into our Root component, which will then be able to pass that down

