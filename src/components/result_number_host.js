import React from "react";

class ResultNumberHost extends React.Component {
  state = {
    number: 0
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
    console.log(this.props.class);

    if (hosts.type === "host") {
      let num = (Number.parseInt(hosts) + 1).toString(2);
      this.setState({ number: num.length });
    } else if (hosts.type === "network") {
      console.log('Im here');
      
      let networks = (Number.parseInt(hosts) - 1).toString(2).length;
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
      this.setState({ number: num });
    }
  };

  render() {
    return <div>this have {this.state.number} hosts</div>;
  }
}
export default ResultNumberHost;
