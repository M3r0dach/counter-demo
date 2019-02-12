import React from "react";
export default class Timer extends React.Component {
  render() {
    const { hour, minute, second } = this.props;
    return (
      <h2>
        {hour}:{minute}:{second}
      </h2>
    );
  }
}
