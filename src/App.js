import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';

class App extends Component {


  render() { 
    return (
     
      <div>
        <span>{this.props.age}</span><br/>
        <button onClick={this.props.onAgeup}>+</button>
        <button onClick={this.props.onAgedown}>-</button>
      </div>
    );
  }
} 
const map_state_to_props = (state) =>{
  return{
    age:state.age
  }
}
const map_dispatch_to_props = (dispatch) =>{
return{
  onAgeup:() => dispatch({
    type:'age_up'
  }),
  onAgedown:() => dispatch({
    type:'age_down'
  }),
};
}

export default connect(map_state_to_props,map_dispatch_to_props)(App);
