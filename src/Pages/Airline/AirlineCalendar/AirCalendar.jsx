import React from "react";
import { withRouter } from "react-router-dom";
import "react-dates/initialize";
import { DateRangePicker, DayPickerRangeController } from "react-dates";
import "./datePicker.css";
import styled from "styled-components";

class AirCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    };
  }

  render() {
    const { startDate, endDate } = this.state;
    const { openCalendarLayer } = this.props;
    return (
      <>
        {openCalendarLayer && <ModalLayer />}
        <DateRangePicker
          startDatePlaceholderText="가는날 선택"
          endDatePlaceholderText="오는날 선택"
          startDate={startDate} //
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={endDate} //
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          } // PropTypes.func.isRequired,
          minDate={startDate}
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
      </>
    );
  }
}

export default withRouter(AirCalendar);

const ModalLayer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 98;
  background: rgba(0, 0, 0, 0.4);
`;
