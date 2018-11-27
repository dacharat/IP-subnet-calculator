import React from "react";
import { Content, Component, Ico, Button, H2, Head, ErrorInput } from "./components/styled";
import Result from "./components/result";
import ico from "./img/math.png"

import InputValue from "./components/input";

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

  ipFullFill = () => {    
    return (
      this.state.ip.first ||
      this.state.ip.second ||
      this.state.ip.third ||
      this.state.ip.fourth
    );
  };

  hostFilled = () => {
    return this.state.hosts.number > 0;
  };

  showResult = () => {
    if (this.ipFullFill() && this.hostFilled()){
      
        this.setState({
          showResult: true,
          emptyInput: false,
          result: <Result ip={this.state.ip} host={this.state.hosts} />
        });
    }
    else this.setState({ emptyInput: true, showResult: false });
    this.forceUpdate();
  };

  render() {
    return (
      <Content>
        <Head><Ico src={ico}></Ico><H2>IP Subnet Calculator</H2></Head>
      <Component className="container">
        <InputValue callbackhost={this.callbackHost} callbackip={this.callbackIP} />
        <Button className="btn btn-primary" onClick={this.showResult}>
          Calculate
        </Button>
        {this.state.showResult && this.state.result}
        {this.state.emptyInput && (
          <ErrorInput>Please input all field</ErrorInput>
        )}
        
      </Component>
      </Content>
    );
  }
}

export default Home;
