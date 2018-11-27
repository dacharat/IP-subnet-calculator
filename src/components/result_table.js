import React, { Component } from "react";
import styled from "styled-components";
import { Table } from "reactstrap";

const Block = styled.div`
  margin-top: 10px;
`;

export default class RTable extends Component {
  generate = () => {
    let body = [];
    let data = this.props.data;

    data.map(element =>
      body.push(
        <tr>
          <th scope="row">{element.subnet}</th>
          <td>{element.subnetID}</td>
          <td>{element.firstAdd}</td>
          <td>{element.lastAdd}</td>
          <td>{element.broadcast}</td>
        </tr>
      )
    );
    return body;
  };

  render() {
    return (
      <Block>
        <Table bordered hover dark>
          <thead>
            <tr>
              <th>Subnet</th>
              <th>SubnetID</th>
              <th>First</th>
              <th>Last</th>
              <th>Broadcast</th>
            </tr>
          </thead>
          <tbody>{this.generate()}</tbody>
        </Table>
      </Block>
    );
  }
}
