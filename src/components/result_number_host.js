import React from "react";

class ResultNumberHost extends React.Component {
  state = {
    numberOfHost: 0
  };

  componentDidMount() {
    this.findNumberOfHost(this.props.host);
  }

  componentDidUpdate(previousProps) {
    if (previousProps.host !== this.props.host) {
      this.findNumberOfHost(this.props.host);
    }
  }

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
      switch (this.props.class) {
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
      this.props.callback({
        numberOfHost: num,
        numberOfNetwork: networks
      });
    } else if (hosts.type === "network") {
      let networks = (Number.parseInt(hosts.number) - 1).toString(2).length;
      let num;
      switch (this.props.class) {
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
      this.props.callback({
        numberOfHost: num,
        numberOfNetwork: networks
      });
    }
  };

  render() {
    return <div>this have {this.state.numberOfHost} hosts</div>;
  }
}
export default ResultNumberHost;
