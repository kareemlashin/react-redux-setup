import React from 'react';
import { connect } from 'react-redux';
import { decreaseCounter, increaseCounter } from '../../state/counter.actions';

const Base = (props) => (
  <div className="SecoundWrapper">
    <button onClick={()=>{props.increaseCounter()}}>
    increaseCounter
    </button>
    <button onClick={()=>{props.decreaseCounter()}}>
    increaseCounter
    </button>
  </div>
);


const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
    increaseCounter: () => dispatch(increaseCounter('1')),
    decreaseCounter: () => dispatch(decreaseCounter('2')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Base);
