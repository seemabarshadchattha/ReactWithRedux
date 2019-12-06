import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Redux from "../Redux/Redux";
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementHandle = () => {
    Redux.dispatch({ type: "INCREMENT", incrementvalue: 1 });
    this.setState({ count: Redux.getState().count });
  };

  decrementHandle = () => {
    Redux.dispatch({ type: "DECREMENT", decrementvalue: 1 });
    this.setState({ count: Redux.getState().count });
  };

  render() {
    return (
      <div>
        <h1>Counter : {this.state.count}</h1>
        <div>
          <Button
            variant="contained"
            color="secondary"
            style={{ margin: 10 }}
            onClick={this.decrementHandle}
          >
            Decrement
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.incrementHandle}
          >
            Increment
          </Button>
        </div>
      </div>
    );
  }
}

export default Counter;
