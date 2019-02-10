import React from "react";
import { connect } from "react-redux";
class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "inc" });
  };
  decrement = () => {
    this.props.dispatch({ type: "dec" });
  };
  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        {this.props.count}
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

function mapStateToProps({ counterState }) {
  console.log(counterState);
  return { count: counterState.count };
}

export default connect(mapStateToProps)(Counter);
