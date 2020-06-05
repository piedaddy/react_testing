import React from 'react';
import {mount} from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
beforeEach(()=> {
  const initialState ={ 
    comments: ['Comment 1', 'Comment 2']
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList /> 
    </Root>
  )
});

//to ensure that the test is super good, we need to get redux store to say that it has a comment inside, howvwer as we created the Root component, so we don't have any way of modifying data in there in the store
it('creates one LI per comment', () => {
  console.log(wrapped.find('li').length); // how many li elements were made
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  //now that we are using enzyme it has to be done differently
  //could use the text() method, but for some reason not recommended 
  //so use render method instead
  //CherrioWrapper is like JQuery 
  console.log(wrapped.render().text()); 
  //            return Cheerio element, then call text on it
  expect(wrapped.render().text()).toContain('Comment 1')
  expect(wrapped.render().text()).toContain('Comment 2')
  //or could keep both comments in same parenthesis 


});