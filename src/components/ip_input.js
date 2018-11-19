import React from "react";
import { InputInline, Point, Input } from "./styled";

class IPInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: {
        first: 0,
        second: 0,
        third: 0,
        fourth: 0
      }
    };
  }

  firstValueInput = e => {
    this.setState(
      {
        ip: {
          first: e.target.value,
          second: this.state.ip.second,
          third: this.state.ip.third,
          fourth: this.state.ip.fourth
        }
      },
      () => {
        this.props.callback(this.state.ip);
      }
    );
  };

  secondValueInput = e => {
    this.setState(
      {
        ip: {
          first: this.state.ip.first,
          second: e.target.value,
          third: this.state.ip.third,
          fourth: this.state.ip.fourth
        }
      },
      () => {
        this.props.callback(this.state.ip);
      }
    );
  };

  thirdValueInput = e => {
    this.setState(
      {
        ip: {
          first: this.state.ip.first,
          second: this.state.ip.second,
          third: e.target.value,
          fourth: this.state.ip.fourth
        }
      },
      () => {
        this.props.callback(this.state.ip);
      }
    );
  };

  fourthValueInput = e => {
    this.setState(
      {
        ip: {
          first: this.state.ip.first,
          second: this.state.ip.second,
          third: this.state.ip.third,
          fourth: e.target.value
        }
      },
      () => {
        this.props.callback(this.state.ip);
      }
    );
  };

  render() {
    return (
      <div className="container">
        <h2>IP Subnet Calculation</h2>
        <br />
        <InputInline className="input-group">
          <Input
            className="form-control"
            type="number"
            name="first"
            onChange={this.firstValueInput}
          />
          <Point>.</Point>
          <Input
            className="form-control"
            type="number"
            onChange={this.secondValueInput}
          />
          <Point>.</Point>
          <Input
            className="form-control"
            type="number"
            onChange={this.thirdValueInput}
          />
          <Point>.</Point>
          <Input
            className="form-control"
            type="number"
            onChange={this.fourthValueInput}
          />
        </InputInline>
      </div>
    );
  }
}

export default IPInput;
