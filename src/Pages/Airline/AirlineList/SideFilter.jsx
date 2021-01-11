import axios from "axios";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

function SideFilter({ searchListCardsA }) {
  const [checkboxList, getCheckboxList] = useState([]);
  const [checkedState, setChecked] = useState({
    check1: true,
    check2: true,
    check3: true,
    check4: true,
    check5: true,
    check6: true,
    check7: true,
    check8: true,
    check9: true,
    check10: true,
    check11: true,
    check12: true,
    check13: true,
    check14: true,
    check15: true,
  });

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    axios
      .get("/data/SideFilter.json")
      .then((res) => getCheckboxList(res.data.category));
  };

  const handleChecked = (i) => {
    setChecked({
      [`check${i}`]: !checkedState[`check${i}`],
    });
  };

  return (
    <SideFilterWrap>
      {checkboxList &&
        checkboxList.map((filter, index) => {
          return (
            <>
              <div key={index}>
                <h2>{filter.name}</h2>
              </div>
              <ul>
                {filter.airports.map((detail, i) => {
                  return (
                    <li key={i}>
                      <input
                        type="checkbox"
                        checked={checkedState[`check${detail.id}`]}
                        value={detail.name}
                        id={detail.name}
                        name={detail.id}
                        onClick={() => handleChecked(detail.id)}
                      />
                      <label htmlFor={detail.name}>
                        <span>
                          <i class="fas fa-check-square" />
                        </span>
                        {detail.name}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </>
          );
        })}
    </SideFilterWrap>
  );
}

export default withRouter(SideFilter);

const SideFilterWrap = styled.div`
  width: 240px;
  padding: 8px;
  margin-bottom: 15px;
  

  div {
    width: 240px;
    height: 34px;
    display: flex;
    align-items: center;
    border-top: 1px solid ${({ theme }) => theme.Color.grey[300]};
    padding-top: 15px;
  }

  ul {
    width: 240px;
    margin-bottom: 20px;

    li {
      width: 240px;
      height: 20px;
      margin-top: 14px;

      input[type="checkbox"] {
          display: none;
        }

        input[type="checkbox"] + label {
          color: rgba(0, 0, 0, 0.8);
          font-size: 15px;
        }

        input[type="checkbox"] + label span {
          display: inline-block;
          width: 18px;
          height: 18px;
          border: 0.5px solid ${({ theme }) => theme.Color.blue[300]};
          border-radius: 2px;
          vertical-align: middle;
          margin: -2px 10px 0 0;
          background: white;
          cursor: pointer;

          i {
            position: relative;
            top: -2px;
            left: 5px;
            font-size: 10px;
            color: ${({ theme }) => theme.Color.white};
          }
        }

        input[type="checkbox"]:checked + label span {
          width: 18px;
          height: 18px;
         

          i {
            position: relative;
            top: -2px;
            left: -1px;
            font-size: 20px;
            color: ${({ theme }) => theme.Color.blue[400]};
          }
        }
      }
    }
  }
`;
