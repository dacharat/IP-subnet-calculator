import React from "react";
import ResultNetworkClass from "./result_network_class";
import ResultNumberHost from "./result_number_host";

class Result extends React.Component {
  state = {
    class: "A",
    numberOfHost: 0
  };

  callbackNetworkClass = value => {
    this.setState({ class: value });
  };

  callbackNumberOfHost = value => {
    this.setState({ numberOfHost: value });
  };

  render() {
    return (
      <div>
        <ResultNetworkClass
          ip={this.props.ip}
          callback={this.callbackNetworkClass}
        />
        <ResultNumberHost
          host={this.props.host}
          class={this.state.class}
          callback={this.callbackNumberOfHost}
        />
      </div>
    );
  }
}

export default Result;
