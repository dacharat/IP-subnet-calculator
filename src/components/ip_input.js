import React from "react";
import styled from "styled-components";

const Component = styled.div`
  padding-top: 5em;
`;
const InputInline = styled.div``;
const Button = styled.button`
  margin: 2em;
`;
const Point = styled.span`
  padding: 0.975rem 0.375rem 0em 0.375rem;
`;

class IPInput extends React.Component {
  render() {
    return (
      <Component className="container">
      <h2>IP Subnet Calculation</h2><br />
        <InputInline className="input-group">
          <input className="form-control" type="number" />
          <Point>.</Point>
          <input className="form-control" type="number" />
          <Point>.</Point>
          <input className="form-control" type="number" />
          <Point>.</Point>
          <input className="form-control" type="number" />
        </InputInline>
        <Button className="btn btn-primary">GO!!</Button>
      </Component>
    );
  }
}

export default IPInput;
