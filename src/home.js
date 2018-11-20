import React from "react";
import { Component, Button, H2 } from "./components/styled";
import IPInput from "./components/ip_input";
import HostInput from "./components/host_input";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: {},
      hosts: {}
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

  render() {
    return (
      <Component className="container">
        <H2>IP Subnet Calculation</H2>
        <IPInput callback={this.callbackIP} />
        <HostInput callback={this.callbackHost}/>
        <Button className="btn btn-primary">GO!!</Button>
      </Component>
    );
  }
}

export default Home;
