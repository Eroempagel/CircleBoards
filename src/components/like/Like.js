import React, { Component } from "react";
import { render } from "react-dom";
import { withAsyncAction } from "../../redux/HOCs";

class Like extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Likes: 0,
      Dislikes: 0,
    };
  }

  handleLikes = (event) => {
    this.setState((state, props) => ({
      Likes: (state.Likes += 1),
    }));
  };

  handleDislikes = (event) => {
    this.setState((state, props) => ({
      Dislikes: (state.Dislikes += 1),
    }));
  };

  // handleDislikes = (event) => {
  //     let totalDislikes = this.setState.Dislikes;
  // }
  // handleChange = (event) => {
  //     let data = {...this.state};

  //     data[event.target.name] = event.target.value;

  //     this.setState(data);
  //   }

  render() {
    return (
      <div>
        <p> Like this Message</p>;
        <button onClick={this.handleLikes}> Likes </button>;
        <button onClick={this.handleDislikes}> Dislikes </button>;
      </div>
    );
  }
}

export default withAsyncAction("profile", "all")(Like);
