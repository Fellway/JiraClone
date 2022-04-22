import styled from "styled-components";
import { Component } from "react";

const ButtonWrapper = styled.button`
  position: absolute;
  bottom: -100px;
  right: 10px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border-style: none;
  background-color: #F57C00;
  font-size: 50px;
  cursor: pointer;
`

class RoundButton extends Component {
  
  constructor(props, context) {
    super(props, context);
  }
  
  render() {
    return (
      <ButtonWrapper onClick={this.props.onClick}>
        +
      </ButtonWrapper>
    );
  }
}

export default RoundButton;