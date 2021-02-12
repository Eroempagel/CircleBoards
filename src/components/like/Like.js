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
    if (this.state.Likes < 1)
      this.setState((state, props) => ({
        Likes: (state.Likes += 1),
      }));
  };

  handleDislikes = (event) => {
    if (this.state.Dislikes < 1)
      this.setState((state, props) => ({
        Dislikes: (state.Dislikes += 1),
      }));
  };

  render() {
    return (
      <div>
        <p> Like this Message</p>
        <button onClick={this.handleLikes}> Likes </button>
        <span>{this.state.Likes}</span>
        <button onClick={this.handleDislikes}> Dislikes </button>
        <span>{this.state.Dislikes}</span>
      </div>
    );
  }
}

export default withAsyncAction("profile", "all")(Like);
