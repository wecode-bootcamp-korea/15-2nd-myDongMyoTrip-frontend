import React, { Component } from "react";
//import Checkbox from "./Checkbox";
import styled from "styled-components";

export default class CheckList extends Component {
  checkTargetId = (e) => {
    this.props.targetId(e.target.id);
  };
  render() {
    const { format } = this.props;
    return (
      <CheckListWrapper>
        <CheckboxInput
          type="checkbox"
          id={format.id}
          checked={format.checked}
          onClick={this.checkTargetId}
        />
        {format.text}
      </CheckListWrapper>
    );
  }
}

const CheckListWrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 300;
  letter-spacing: -0.5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CheckboxInput = styled.input`
  width: 20px;
  height: 20px;
  margin: 0 8px 0 0;
  border: 1px solid ${({ theme }) => theme.Color.grey[200]};
  border-radius: 50%;
`;
