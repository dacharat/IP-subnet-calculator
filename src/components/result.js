import React from "react";
import ResultNetworkClass from "./result_network_class";
import ResultNumberHost from './result_number_host'

class Result extends React.Component {
  state = {
    class: 'A'
  }

  callbackState = value => {
    this.setState({class: value})
  }

  render() {
    return (
      <div>
        <ResultNetworkClass ip={this.props.ip} callback={this.callbackState} />
        <ResultNumberHost host={this.props.host} class={this.state.class} />
      </div>
    );
  }
}

export default Result;
