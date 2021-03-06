import React from "react";
import { withAsyncAction } from "../../redux/HOCs";
import Like from "../like/Like";
import Follow from "../follow/Follow";
import Clock from "../clock/Clock";

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      message: "",
      count: 0,
      image: "",
    };
  }

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    this.props.getMessage(this.props.username).then((res) => {
      console.log(res.payload);
      this.setState({
        messages: res.payload.messages,
        count: res.payload.count,
      });
    });
  };

  newMessageHandler = () => {
    let text = this.state.message;
    this.props.createMessage(text).then(() => {
      this.fetchMessages();
      this.setState({
        message: "",
      });
    });
  };

  handleChange = (event) => {
    let data = { ...this.state };

    data[event.target.name] = event.target.value;

    this.setState(data);
  };

  render() {
    let display = <div>No Messages Found</div>;
    if (this.state.messages) {
      display = this.state.messages.map((value) => {
        return (
          <li className="UserMessages" key={value.id}>
            {value.text}
            <Like />
          </li>
        );
      });
    }

    return (
      <div>
        <Clock />
        <div className="Messages">
          <div className="ListMessage">{display}</div>

          <div className="NewMessage">
            <input
              name="message"
              onChange={this.handleChange}
              value={this.state.message}
            />
            <button className="SendMessage" onClick={this.newMessageHandler}>
              <strong>Send Message</strong>
            </button>
            <Follow />
          </div>
        </div>
      </div>
    );
  }
}

export default withAsyncAction("profile", "all")(Messages);
