import React from "react";
import CommentBox from "components/CommentBox";
import { mount } from "enzyme";
//mount is the FULL DOM render option

import Root from "Root";

//to fix problems with testing when we add redux and there is problems but it is NOT A GOOD WAY OF DOING IT!!  ->
/* 
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from 'reducers';
*/

let wrapped;
beforeEach(() => {
  // wrapped = mount(<CommentBox />);

  //now will have a store inside a provider tag in it's parent heirarchy yay
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );

  /* wrapped = mount(<Provider store = {creatStore(reducers, {})}> <CommentBox /> </Provider>); */
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and 2 buttons", () => {
  //console.log(wrapped.find("textarea").length);
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

//purpose of tests // a function with the tests
describe("the text area", () => {
  beforeEach(() => {
    wrapped
      .find("textarea")
      .simulate("change", { target: { value: "new comment" } });
    wrapped.update();
  });

  //HOW TO FIND OUT IF AN EVENT HAPPENED, SO BE ABLE TO SIMULATE AN EVENT
  it("has a text area that users can type in", () => {
    wrapped
      .find("textarea")
      .simulate("change", { target: { value: "new comment" } });
    //name of the event (real HTML name)
    //instead of e.target.value
    wrapped.update(); // will force it to rerender
    //technically i dont need this anymore because i have the new beforeEach

    //pull prop off of value and compare it with the value that we "gave"
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  //TEST IF TEXTAREA GETS EMPTIED AFTER SUBMITTING

  it("has a text area that gets emptied after form is submitted", () => {
    //using from the beforeEach
    //this extra expectation isn't needed bc we are already running a test to test for that
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");

    wrapped.find("form").simulate("submit");
    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
