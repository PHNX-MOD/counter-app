import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };

  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">{this.formatcounter()}</span>
        <button className="btn btn-outline-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatcounter() {
    const { count } = this.state;
    return count === 0 ? count : <h1>Not Zero</h1>;
  }
}
export default Counter;
