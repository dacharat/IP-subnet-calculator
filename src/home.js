import React from "react";
import { Component, Button, H2, ErrorInput } from "./components/styled";
import IPInput from "./components/ip_input";
import HostInput from "./components/host_input";
import Result from "./components/result";
import RTable from "./components/result_table"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: {},
      hosts: {},
      showResult: false,
      emptyInput: false,
      result: <Result />
    };
  }

  callbackIP = newIP => {
    this.setState({
      ip: newIP
    });
  };

  callbackHost = value => {
    this.setState({ hosts: value });
  };

  componentDidUpdate() {
    console.log(this.state.ip);
    console.log(this.state.hosts);
  }

  ipFullFill = () => {
    return (
      this.state.ip.first &&
      this.state.ip.second &&
      this.state.ip.third &&
      this.state.ip.fourth
    );
  };

  hostFilled = () => {
    return this.state.hosts.number > 0;
  };

  showResult = () => {
    if (this.ipFullFill() && this.hostFilled())
      this.setState({
        showResult: true,
        emptyInput: false,
        result: <Result ip={this.state.ip} host={this.state.hosts} />
      });
    else this.setState({ emptyInput: true, showResult: false });
    this.forceUpdate();
  };

  render() {
    return (
      <Component className="container">
        <H2>IP Subnet Calculation</H2>
        <IPInput callback={this.callbackIP} />
        <HostInput callback={this.callbackHost} />
        <Button className="btn btn-primary" onClick={this.showResult}>
          GO!!
        </Button>
        {this.state.showResult && this.state.result}
        {this.state.emptyInput && (
          <ErrorInput>Please input all field</ErrorInput>
        )}
        <RTable/>

      </Component>
    );
  }
}

export default Home;
