import React from "react";
import { getSubnetArray } from "../functions/subnet_logic";
import RTable from "./result_table";

// this.props.ip ได้ ip ทั้งก้อน
class Result extends React.Component {
  state = {
    class: "",
    number: { host: 0, network: 0 },
    data: []
  };

  async componentDidMount() {
    await this.networkClass();
    await this.findNumberOfHost(this.props.host);
    await this.fetchData();
  }

  async componentDidUpdate(previousProps) {
    if (previousProps !== this.props) {
      await this.networkClass();
      await this.findNumberOfHost(this.props.host);
      await this.fetchData();
    }
  }

  fetchData = () => {
    this.setState({
      data: getSubnetArray(
        this.props.ip,
        this.state.number.network,
        this.state.number.host
      )
    });
  };

  networkClass = () => {
    let className;
    if (this.props.ip.first < 128) {
      className = "A";
    } else if (this.props.ip.first < 191) {
      className = "B";
    } else if (this.props.ip.first < 255) {
      className = "C";
    } else {
      className = "D";
    }
    this.setState({ class: className });
  };

  findNumberOfHost = hosts => {
    // let numberOfHost = 0;
    // while (true) {
    //   if (hosts >= Math.pow(2, numberOfHost)) {
    //     numberOfHost++;
    //   } else {
    //     this.setState({ number: numberOfHost });
    //     break;
    //   }
    // }
    if (hosts.type === "host") {
      let num = (Number.parseInt(hosts.number) + 1).toString(2).length;
      let networks;
      console.log("CASE: ", this.state.class);
      switch (this.state.class) {
        case "A":
          networks = 24 - num;
          break;
        case "B":
          networks = 16 - num;
          break;
        case "C":
          networks = 8 - num;
          break;
        case "D":
          networks = 0 - num;
          break;
        default:
          networks = 0;
      }
      this.setState({ number: { host: num, network: networks } });
    } else if (hosts.type === "network") {
      let networks = (Number.parseInt(hosts.number) - 1).toString(2).length;
      let num;
      switch (this.state.class) {
        case "A":
          num = 24 - networks;
          break;
        case "B":
          num = 16 - networks;
          break;
        case "C":
          num = 8 - networks;
          break;
        case "D":
          num = 0 - networks;
          break;
        default:
          num = 0;
      }
      this.setState({ number: { host: num, network: networks } });
    }
  };

  renderTable = () => {
    console.log(this.props.ip);
    console.log(this.state.number.host);
    console.log(this.state.number.network);
    console.log(this.state.data);

    return <RTable data={this.state.data} />;
  };

  render() {
    return (
      <div>
        <h4>Network class: {this.state.class}</h4>
        <div className="col-md-6" />
        <div className="row">
          <div className="col-md-6">
            <h4>
              Number of <u>subnets</u> {this.state.number.network}{" "}
              bits/ {Math.pow(2, this.state.number.network)} networks
            </h4>
          </div>
          <div className="col-md-6">
            <h4>
              Number of <u>hosts</u> {this.state.number.host} bits/{" "}
              {Math.pow(2, this.state.number.host)} hosts
            </h4>
          </div>
        </div>
        {this.renderTable()}
      </div>
    );
  }
}

export default Result;
