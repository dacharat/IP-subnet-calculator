import React from "react";

class ResultNetworkClass extends React.Component {
  state = {
    class: ''
  }

  componentDidMount() {
    this.networkClass()
  }

  componentDidUpdate(previousProps) {
    if (previousProps.ip !== this.props.ip) {
      this.networkClass()
    }
  }

  networkClass = () => {
    if (this.props.ip.first < 128) {
      this.setState({ class: 'A' })
    }
    else if (this.props.ip.first < 191) {
      this.setState({ class: 'B' })
    }
    else if (this.props.ip.first < 255) {
      this.setState({ class: 'C' })
    }
    else {
      this.setState({ class: 'D' })
    }
  }

  comvertToBinary = () => {
    (+this.props.ip.first).toString(2);
  }

  render() {
    return <div>
      <p>Network class: {this.state.class}</p>
    </div>;
  }
}

export default ResultNetworkClass;
