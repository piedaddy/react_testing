import React from 'react';
//import ReactDOM from 'react-dom';
import App from 'components/App';

import {shallow} from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';


/*
//we can use helper functions  
//this one is before every test it will be called 
//using let because we will probably need to reassign the value to the variable multiple times 
  let wrapped; 
  beforeEach(()=> {
     wrapped = shallow(<App />);  //and then i could delete it from the it
  });
*/




//this description should be a continuation from 'it', and 'it' is representing the name of the test file, in this case it would be that the App shows a comment box
it('shows a comment box', () => {

/* ***** METHOD WITHOUT ENZYME ******
  const div = document.createElement('div');
  //this is a fake div that will exist inside our terminal, to trick react into thinking that it is working within a browser 
  //document is coming from JSDOM, the depending installed with Jest


  ReactDOM.render(<App />, div); //this proves that it will be renderable 

  //We want code that would look inside the div and see if the CommentBox is in there
  console.log(div.innerHTML);

  //NOT THE BEST APPROACH because 
    expect(div.innerHTML).toContain('Comment Box'); //string needs to be same as content 

      //toContain is the matcher
      //example of a matcher that doesn't need an argument: .toBeTruthy() doesn't expect an argument

  //MUCH BETTER WAY OF TESTING
  // not a real thing --> expect(div).toHaveAnInstanceOf(CommentBox);
  ReactDOM.unmountComponentAtNode(div);
  //this function will look at the div, find the app component that we just rendered into it, and remove it
  //referred to as 'cleanup' to destroy any leftover objects or unmount things
  //overtime if we don't do this, it will slow down testing 

  */ 

  //    wrapped means that it is a component that has some additional functionality loaded on top
  const wrapped = shallow(<App />); 
  //shallow means that it will render just that component, none of its children 

  //look at new component, find every instance of this component
  //.find will return an array of every instance of the component found 
  //we just care that there is one copy, so we use .length
  //.toEqual is a matcher that will look at value we provied and make sure it is equal to 1
  expect(wrapped.find(CommentBox).length).toEqual(1);

});

it('shows a comment list', () => {
  const wrapped = shallow(<App />); 
  expect(wrapped.find(CommentList).length).toEqual(1);
});


