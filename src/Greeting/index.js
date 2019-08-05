import React from 'react';
import { changeWord } from './actions';
import { connect } from 'react-redux';
import Greeting from './Greeting';

const mapStateToProps = state => {
  return {
    name: state.greeting.name
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: (value) => {
      dispatch(changeWord(value))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)

