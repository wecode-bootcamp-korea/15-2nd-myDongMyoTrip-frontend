import React from "react";
import { Link, withRouter } from "react-router-dom";
import AirCalendar from "../AirlineCalendar/AirCalendar";
import CityModal from "../Modal/CityModal";
import SeatModal from "../Modal/SeatModal";
import moment from "moment";
import "moment/locale/ko";
import styled from "styled-components";

class MainSearch extends React.Component {
  constructor() {
    super();
    moment.locale("ko");
    this.state = {
      openCityModal: false,
      openSeatModal: false,
      openCalendarLayer: false,
      cityValue: "",
      countA: 1,
      countB: 0,
      countC: 0,
      passengerNum: 0,
    };
  }

  handleCityValue = (e) => {
    this.setState({
      cityValue: e.target.innerText,
    });
    this.showCityModal();
  };

  showCityModal = () => {
    const { openCityModal } = this.state;
    this.setState({
      openCityModal: !openCityModal,
    });
  };

  showSeatModal = () => {
    const { openSeatModal } = this.state;
    this.setState({
      openSeatModal: !openSeatModal,
    });
  };

  showCalendarLayer = () => {
    const { openCalendarLayer } = this.state;
    this.setState({
      openCalendarLayer: !openCalendarLayer,
    });
  };

  DecreaseA = () => {
    const { countA } = this.state;
    if (countA > 1) {
      this.setState({
        countA: countA - 1,
      });
    }
  };

  IncreaseA = () => {
    const { countA, countB, countC } = this.state;
    if (countA + countB + countC < 9) {
      this.setState({
        countA: countA + 1,
      });
    } else {
      alert("최대 9명까지만 예약 가능합니다.");
    }
  };

  DecreaseB = () => {
    const { countB } = this.state;
    if (countB >= 1) {
      this.setState({
        countB: countB - 1,
      });
    }
  };

  IncreaseB = () => {
    const { countA, countB, countC } = this.state;
    if (countA + countB + countC < 9) {
      this.setState({
        countB: countB + 1,
      });
    } else {
      alert("최대 9명까지만 예약 가능합니다.");
    }
  };

  DecreaseC = () => {
    const { countC } = this.state;
    if (countC >= 1) {
      this.setState({
        countC: countC - 1,
      });
    }
  };

  IncreaseC = () => {
    const { countA, countB, countC } = this.state;
    if (countA + countB + countC < 9) {
      this.setState({
        countC: countC + 1,
      });
    } else {
      alert("최대 9명까지만 예약 가능합니다.");
    }
  };

  limitPassengerNum = (e) => {
    const { countA, countB, countC } = this.state;
    this.setState({
      passengerNum: countA + countB + countC,
    });
    console.log("aa");
  };

  render() {
    console.log(this.state.passengerNum);
    const {
      openSeatModal,
      openCityModal,
      openCalendarLayer,
      cityValue,
      countA,
      countB,
      countC,
    } = this.state;
    return (
      <Selectors>
        <CitySelector>
          <input type="text" placeholder="서울(SEL)" />
          <button>
            <i class="fas fa-arrows-alt-h" />
          </button>
          <input
            type="text"
            placeholder="도착지가 어디인가요?"
            value={cityValue}
            onClick={this.showCityModal}
          />
        </CitySelector>
        {openCityModal && (
          <CityModal
            cityValue={cityValue}
            handleCityValue={this.handleCityValue}
            showModal={this.showCityModal}
          />
        )}
        <div onClick={this.showCalendarLayer}>
          <AirCalendar openCalendarLayer={openCalendarLayer} />
        </div>
        <SeatSelector>
          <SeatTitle onClick={this.showSeatModal}>
            <div>
              <i class="far fa-user" />
              <span onChange={this.limitPassengerNum}>
                승객 {countA + countB + countC}명, 일반석
              </span>
            </div>
            <button>
              <i class="fas fa-chevron-down" />
            </button>
          </SeatTitle>
        </SeatSelector>
        {openSeatModal && (
          <SeatModal
            showModal={this.showSeatModal}
            countA={countA}
            countB={countB}
            countC={countC}
            DecreaseA={this.DecreaseA}
            DecreaseB={this.DecreaseB}
            DecreaseC={this.DecreaseC}
            IncreaseA={this.IncreaseA}
            IncreaseB={this.IncreaseB}
            IncreaseC={this.IncreaseC}
          />
        )}
        <Link to="/AirlineList">
          <SearchBtn>검색</SearchBtn>
        </Link>
      </Selectors>
    );
  }
}

export default withRouter(MainSearch);

const Selectors = styled.div`
  width: 1064px;
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

const SearchBtn = styled.button`
  width: 70px;
  height: 47.5px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.Color.blue[400]};
  border-radius: 3px;
  color: ${({ theme }) => theme.Color.white};
  background-color: ${({ theme }) => theme.Color.blue[400]};
  cursor: pointer;
`;
