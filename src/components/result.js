import React from "react";
import ResultNetworkClass from "./result_network_class";
import ResultNumberHost from './result_number_host'

class Result extends React.Component {
  render() {
    return (
      <div>
        <ResultNetworkClass ip={this.props.ip} />
        <ResultNumberHost host={this.props.host} />
      </div>
    );
  }
}

export default Result;
