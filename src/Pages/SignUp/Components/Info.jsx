import React, { Component } from "react";
import styled from "styled-components";

export default class Info extends Component {
  render() {
    const { id, type, text, onChange, onKeyUp, placeholder } = this.props;

    return (
      <InfoList>
        <label>{text}</label>
        <input
          id={id}
          type={type}
          onChange={onChange}
          onKeyUp={onKeyUp}
          placeholder={placeholder}
        />
      </InfoList>
    );
  }
}

/*-- styled-components --*/
const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  label {
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.Color.grey[800]};
    letter-spacing: -0.5px;
  }
  input {
    width: 100%;
    height: 48px;
    padding: 0 12px;
    font-size: ${({ theme }) => theme.fontSize.medium};
    border: 1px solid ${({ theme }) => theme.Color.grey[300]};
    border-radius: 2px;
    transition: all 0.3s ease-out;
    outline: none;
    &:hover {
      border-color: ${({ theme }) => theme.Color.black};
      transition: all 0.3s ease-out;
    }
    &::placeholder {
      color: ${({ theme }) => theme.Color.grey[400]};
    }
  }
`;
