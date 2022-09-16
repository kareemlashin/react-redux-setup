import React from 'react';
import { connect } from 'react-redux';
//import { Test } from './Secound.styles';

const Secound = (props) => (
  <div className="SecoundWrapper">
    {props.blabla}
  </div>
);


const mapStateToProps = state => ({
   blabla: state.counter.count,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Secound);
