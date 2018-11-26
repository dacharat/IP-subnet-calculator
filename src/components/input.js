import React from "react";
import { InputInline, Point, Input, ChooseHosts } from "./styled";

class InputValue extends React.Component {
  state = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    number: 0,
    type: "host"
  };

  handleSubmit = e => {
    console.log("55");
  };

  handleInput = e => {
    const input = Number.parseInt(e.target.value);
    this.setState({ [e.target.name]: this.limitIPValue(input) }, () => {
      let test = { first: this.state.first, second: this.state.second, third: this.state.third, fourth: this.state.fourth };
      console.log('test', test);
      
      this.props.callbackip({
        first: this.state.first,
        second: this.state.second,
        third: this.state.third,
        fourth: this.state.fourth
      });
    });
  };

  handleHostInput = e => {
    const input = Number.parseInt(e.target.value);
    this.setState({ [e.target.name]: this.limitHostValue(input) }, () => {
      this.props.callbackhost({
        number: this.state.number,
        type: this.state.type
      });
    });
  };

  typeChange = e => {
    this.setState(
      {
        type: e.target.value
      },
      () => {
        this.props.callbackhost({
          number: this.state.number,
          type: this.state.type
        });
      }
    );
  };

  limitIPValue = value => {
    if (value < 0) {
      return 1;
    } else if (value > 255) {
      return 255;
    } else {
      return value;
    }
  };

  limitHostValue = value => {
    if (value < 0) {
      return 1;
    } else if (value > this.maxValue()) {
      return this.maxValue();
    } else {
      return value;
    }
  };

  maxValue = () => {
    if (this.state.first < 128) {
      return 16777215;
    } else if (this.state.first < 191) {
      return 65535;
    } else if (this.state.first < 255) {
      return 255;
    } else {
      return 1;
    }
  };

  render() {
    return (
      <div className="container">
        <InputInline>
          <Input
            type="number"
            onChange={this.handleInput}
            value={this.state.first}
            name="first"
          />
          <Point>.</Point>
          <Input
            type="number"
            onChange={this.handleInput}
            value={this.state.second}
            name="second"
          />
          <Point>.</Point>
          <Input
            type="number"
            onChange={this.handleInput}
            value={this.state.third}
            name="third"
          />
          <Point>.</Point>
          <Input
            type="number"
            onChange={this.handleInput}
            value={this.state.fourth}
            name="fourth"
          />
        </InputInline>
        <ChooseHosts>
          <Input
            type="number"
            onChange={this.handleHostInput}
            value={this.state.number}
            name="number"
          />
          <select onChange={this.typeChange}>
            <option value="host">Hosts</option>
            <option value="network">Networks</option>
          </select>
        </ChooseHosts>
      </div>
    );
  }
}
export default InputValue;
