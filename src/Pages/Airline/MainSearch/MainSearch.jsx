import React from "react";
import { withRouter } from "react-router-dom";
import AirCalendar from "../Modal/AirlineCalendar/AirCalendar";
import CityModal from "../Modal/CityModal";
import SeatModal from "../Modal/SeatModal";
import moment from "moment";
import "moment/locale/ko";
import styled from "styled-components";

const MODAL_NAME = {
  city: "openCityModal",
  seat: "openSeatModal",
  cal: "openCalendarLayer",
};

const PASS_TYPE = {
  adultNum: "adult",
  childNum: "child",
  infantNum: "infant",
};

class MainSearch extends React.Component {
  constructor() {
    super();
    moment.locale("ko");
    this.state = {
      openCityModal: false,
      openSeatModal: false,
      openCalendarLayer: false,
      adult: 1,
      child: 0,
      infant: 0,
      passengerNum: 0,
      depPlace: "",
      arrPlace: "",
      startDate: "",
      endDate: "",
      depModal: false,
      arrModal: false,
    };
  }

  handleModalState = (id) => {
    const { openCityModal, openSeatModal, openCalendarLayer } = this.state;
    const modalStateObj = {
      city: !openCityModal,
      seat: !openSeatModal,
      cal: !openCalendarLayer,
    };
    return modalStateObj[id];
  };

  showModal = (id, type) => {
    const stateName = MODAL_NAME[id];
    this.setState({
      [stateName]: this.handleModalState(id),
    });
    if (type === "dep") {
      this.setState({
        depModal: !this.state.depModal,
      });
    } else if (type === "arr") {
      this.setState({
        arrModal: !this.state.arrModal,
      });
    }
  };

  handleDepValue = (type, city) => {
    console.log(type, city);
    if (type === "arr") {
      this.setState({
        arrPlace: city,
        arrModal: !this.state.arrModal,
      });
    } else {
      this.setState({
        depPlace: city,
        depModal: !this.state.depModal,
      });
    }
  };

  DecreasePassNum = (id) => {
    const stateName = PASS_TYPE[id];
    if (stateName === "child" || stateName === "infant") {
      this.state[stateName] > 0 &&
        this.setState({
          [stateName]: this.handleDecreaseState(id),
        });
    } else if (stateName === "adult") {
      this.state[stateName] > 1 &&
        this.setState({
          [stateName]: this.handleDecreaseState(id),
        });
    }
  };

  handleDecreaseState = (id) => {
    const { adult, child, infant } = this.state;
    const decreaseState = {
      adultNum: adult - 1,
      childNum: child - 1,
      infantNum: infant - 1,
    };
    return decreaseState[id];
  };

  IncreasePassNum = (id) => {
    const { adult, child, infant } = this.state;
    const stateName = PASS_TYPE[id];
    if (adult + child + infant < 9) {
      this.setState({
        [stateName]: this.handleIncreaseState(id),
      });
    } else {
      alert("최대 9명까지만 예약 가능합니다.");
    }
  };

  handleIncreaseState = (id) => {
    const { adult, child, infant } = this.state;
    const increaseState = {
      adultNum: adult + 1,
      childNum: child + 1,
      infantNum: infant + 1,
    };
    return increaseState[id];
  };

  render() {
    const {
      openSeatModal,
      openCityModal,
      openCalendarLayer,
      depModal,
      arrModal,
      arrPlace,
      depPlace,
      adult,
      child,
      infant,
    } = this.state;

    return (
      <Selectors>
        <CitySelector>
          <input
            type="text"
            id="departure"
            placeholder="김포(GMP)"
            value={depPlace}
            onClick={() => this.showModal("city", "dep")}
          />
          {depModal && (
            <CityModal
              departure
              depPlace={depPlace}
              handleDepValue={this.handleDepValue}
              onClickToCancel={() => this.showModal("city", "dep")}
            />
          )}
          <button>
            <i class="fas fa-arrows-alt-h" />
          </button>
          <input
            type="text"
            id="arrival"
            placeholder="도착지가 어디인가요?"
            value={arrPlace}
            onClick={() => this.showModal("city", "arr")}
          />
          {arrModal && (
            <CityModal
              arrival
              arrPlace={arrPlace}
              handleDepValue={this.handleDepValue}
              onClickToCancel={() => this.showModal("city", "arr")}
            />
          )}
        </CitySelector>
        <div onClick={() => this.showModal("cal")}>
          <AirCalendar openCalendarLayer={openCalendarLayer} />
        </div>
        <SeatSelector>
          <SeatTitle onClick={() => this.showModal("seat")}>
            <div>
              <i class="far fa-user" />
              <span onChange={this.limitPassengerNum}>
                승객 {adult + child + infant}명, 일반석
              </span>
            </div>
            <button>
              <i class="fas fa-chevron-down" />
            </button>
          </SeatTitle>
        </SeatSelector>
        {openSeatModal && (
          <SeatModal
            showModal={this.showModal}
            adult={adult}
            child={child}
            infant={infant}
            DecreasePassNum={this.DecreasePassNum}
            IncreasePassNum={this.IncreasePassNum}
          />
        )}
      </Selectors>
    );
  }
}

export default withRouter(MainSearch);

const Selectors = styled.div`
  width: 988px;
  display: flex;
  justify-content: space-between;

  margin: 20px 0;
`;

const CitySelector = styled.div`
  width: 422px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.Color.white};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.Color.white};

  input {
    width: 190px;
    height: 46px;
    font-size: 16px;
    font-weight: 600;
    padding-left: 14px;
    border: none;
    color: ${({ theme }) => theme.Color.grey[500]};

    :focus {
      outline: none;
    }

    ::placeholder {
      font-weight: 400;
      color: ${({ theme }) => theme.Color.grey[500]};
    }
  }
  button {
    width: 32px;
    height: 32px;
    border: none;
    color: ${({ theme }) => theme.Color.grey[600]};
    background-color: ${({ theme }) => theme.Color.grey[100]};
  }
`;

const SeatSelector = styled.div`
  width: 270px;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 14px;
  border: 1px solid ${({ theme }) => theme.Color.white};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.Color.white};
`;

const SeatTitle = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;

  i {
    font-size: 19px;
    color: ${({ theme }) => theme.Color.blue[500]};
  }

  span {
    padding-left: 14px;
    font-size: 16px;
    color: ${({ theme }) => theme.Color.grey[500]};
  }

  button {
    border: none;
    background-color: ${({ theme }) => theme.Color.white};

    i {
      font-size: 19px;
      color: ${({ theme }) => theme.Color.grey[700]};
    }
  }
`;
