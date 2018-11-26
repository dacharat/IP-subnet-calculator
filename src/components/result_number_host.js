import React from "react";

class ResultNumberHost extends React.Component {
  state = {
    number: 0
  };

  componentDidMount() {
    this.findNumberOfHost(this.props.host.number);
  }

  componentDidUpdate(previousProps) {
    if (previousProps.host !== this.props.host) {
      this.findNumberOfHost(this.props.host.number);
    }
  }

  findNumberOfHost = hosts => {
    let numberOfHost = 0;
    while (true) {
      if (hosts >= Math.pow(2, numberOfHost)) {
        numberOfHost++;
      } else {
        this.setState({ number: numberOfHost });
        break;
      }
    }
  };

  render() {
    return <div>this have {this.state.number} hosts</div>;
  }
}
export default ResultNumberHost;
