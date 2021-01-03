import React, { Component } from "react";
import Info from "./Info";
import styled from "styled-components";

class Form extends Component {
  render() {
    const { format } = this.props;
    return (
      <FormWrapper>
        {format.data.map((input, index) => (
          <Info
            key={index}
            id={input.id}
            type={input.type}
            text={input.text}
            onChange={input.onChange}
            onKeyUp={input.onKeyUp}
            placeholder={input.placeholder}
          />
        ))}
      </FormWrapper>
    );
  }
}

export default Form;

const FormWrapper = styled.div``;
