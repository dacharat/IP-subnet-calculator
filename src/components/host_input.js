import React from "react";
import { ChooseHosts, Input } from "./styled";

class HostInput extends React.Component {
  state = {
    hosts: {
      type: "host",
      number: 0
    }
  };

  typeChange = e => {
    this.setState(
      {
        hosts: {
          type: e.target.value,
          number: this.state.hosts.number
        }
      },
      () => {
        this.props.callback(this.state.hosts);
      }
    );
  };

  numberChange = e => {
    this.setState(
      {
        hosts: {
          type: this.state.hosts.type,
          number: e.target.value
        }
      },
      () => {
        this.props.callback(this.state.hosts);
      }
    );
  };

  render() {
    return (
      <ChooseHosts className="container">
        <Input
          className="form-control"
          type="number"
          onChange={this.numberChange}
        />
        <select className="form-control" onChange={this.typeChange}>
          <option value="host">Hosts</option>
          <option value="network">Networks</option>
        </select>
      </ChooseHosts>
    );
  }
}

export default HostInput;
