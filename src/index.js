import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h1`
  background-color: red;
`;

export default class extends Component {
  render() {
    return (
      <div>
        <Title>Test</Title>
        <h2>Welcome to React components</h2>
      </div>
    );
  }
}
