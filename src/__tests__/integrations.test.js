import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import moxios from 'moxios';
import App from 'components/App';


beforeEach(() => {
  moxios.install(); //sets it up, tells it to intercept any request it gets from axios 
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200, // so axios thinks the request was successful
    response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}] //list of comments that gets passed back from api
  })

});

afterEach(() =>{
  moxios.uninstall();
});


it('can fetch a list of  comments and display them', (done) => {
  //attempt to render the entire app
  const wrapped = mount (
    <Root>
      <App />
    </Root>
  )
  //find the fetchComments button and click it
  wrapped.find('.fetch-comments').simulate('click');
  //kicks of data fetching process, get action to reducer, reducer takes list of comments, commentList component will rerender
  
  //introduce small pause via setTimeout
  // setTimeout(() => {
  //   wrapped.update();
  //   //expect to find a list of comments
  //   expect(wrapped.find('li').length).toEqual(2);
  //   done();
  //   wrapped.unmount();
  // }, 100)

  //can also wait by using wait
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  })

  //as soon as we reference done, it knows to wait until invoke the function does jest start to consider if the test failed or passed, so makes it wait to consider test completed

 
});
