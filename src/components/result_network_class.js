import React from "react";

class ResultNetworkClass extends React.Component {
  state = {
    class: ""
  };

  componentDidMount() {
    this.networkClass();
  }

  componentDidUpdate(previousProps) {
    if (previousProps.ip !== this.props.ip) {
      this.networkClass();
    }
  }

  networkClass = () => {
    let className;
    if (this.props.ip.first < 128) {
      className = "A";
    } else if (this.props.ip.first < 191) {
      className = "B";
    } else if (this.props.ip.first < 255) {
      className = "C";
    } else {
      className = "D";
    }
    this.setState({ class: className });
    this.props.callback(className);
  };

  comvertToBinary = () => {
    (+this.props.ip.first).toString(2);
  };

  render() {
    return (
      <div>
        <p>Network class: {this.state.class}</p>
      </div>
    );
  }
}

export default ResultNetworkClass;
