//has leading lowercase that signals it will export a function, not a class

import React, {Component} from 'react';
import {connect} from 'react-redux';

export default (ChildComponent) => {

  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }
    
    componentDidUpdate() {
      this.shouldNavigateAway();
  
    }
  
    shouldNavigateAway () {
      if (!this.props.auth) {
        this.props.history.push('/');
        //we can navigate around routes
      }
    }

    render() {
      return <ChildComponent {...this.props}/> 
      //takes any props recieved to HOC and passes them down to childComponent 
    }
  };

  function mapStateToProps(state) {
    return {auth: state.auth};
  };

  return connect(mapStateToProps)(ComposedComponent); 
};







