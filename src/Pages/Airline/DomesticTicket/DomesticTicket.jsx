import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

class DomesticTicket extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { ticket } = this.props;
    return (
      <div>
        <TicketBox>
          <img className="destination" src={ticket.src} alt={ticket.alt} />
          <TextBox>
            <div>{ticket.name}</div>
            <div>{ticket.location}</div>
            <div>{ticket.date}</div>
            <TextBoxBottom>
              <div>{ticket.price}</div>
              <div>{ticket.trip}</div>
            </TextBoxBottom>
          </TextBox>
        </TicketBox>
      </div>
    );
  }
}

export default withRouter(DomesticTicket);

const TicketBox = styled.div`
  width: 250px;
  height: 260px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;

  .destination {
    width: 250px;
    height: 140px;
    margin: 0;
  }
`;

const TextBox = styled.div`
  padding: 16px;

  div {
    margin-bottom: 10px;
    font-size: 15px;
  }

  div:nth-child(2),
  div:nth-child(3) {
    margin-bottom: 5px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.4);
  }
`;

const TextBoxBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  div:nth-child(2) {
    color: ${({ theme }) => theme.Color.blue[600]};
  }
`;
