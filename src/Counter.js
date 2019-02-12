import React from "react";
import { connect } from "react-redux";
import Timer from "./Timer";
class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "inc" });
  };
  decrement = () => {
    this.props.dispatch({ type: "dec" });
  };
  componentDidMount() {
    this.timeID = setInterval(() => this.increment(), 1000);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <Timer {...this.props} />
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
  componentWillUnmount() {
    clearInterval(this.timeID);
  }
}

function mapStateToProps({ counterState }) {
  console.log(counterState);
  return counterState;
}

export default connect(mapStateToProps)(Counter);
