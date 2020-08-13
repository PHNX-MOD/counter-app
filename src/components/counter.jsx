import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 2,
  };

  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";

    return (
      <div>
        <span className={classes}>{this.formatcounter()}</span>
        <button className="btn btn-outline-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatcounter() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}
export default Counter;
