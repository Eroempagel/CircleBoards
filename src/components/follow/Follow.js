
import React, { Component } from "react";
import { render } from "react-dom";
import { withAsyncAction } from "../../redux/HOCs";

class Follow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Follow: 0,
    };
  }

  handleFollow = (event) => {
    this.setState((state, props) => ({
      Follow: (state.Follow += 1),
    }));
  };

  render() {
    return (
      <div>
        <button>
          <strong>Follow</strong>
        </button>
      </div>
    );
  }
}

export default withAsyncAction("profile", "all")(Follow);
