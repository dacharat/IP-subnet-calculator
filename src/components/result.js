import React from "react";

// this.props.ip ได้ ip ทั้งก้อน
class Result extends React.Component {
  state = {
    class: "",
    number: { host: 0, network: 0 }
  };

  async componentDidMount() {
    await this.networkClass();
    await this.findNumberOfHost(this.props.host);
  }

  async componentDidUpdate(previousProps) {
    if (previousProps !== this.props) {
      await this.networkClass();
      await this.findNumberOfHost(this.props.host);
    }
  }

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
      console.log('CASE: ', this.state.class);
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
      this.setState({ numberOfHost: num, numberOfNetwork: networks });
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
      this.setState({ numberOfHost: num, numberOfNetwork: networks });
    }
  };

  render() {
    return (
      <div>
        <div>
          <p>Network class: {this.state.class}</p>
        </div>
        {this.state.class && (
          <div>this have {this.state.numberOfHost} hosts</div>
        )}
      </div>
    );
  }
}

export default Result;
