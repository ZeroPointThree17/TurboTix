import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SeatPicker from "react-seat-picker";
// import Final from "./Final";
import "./Seats.css";
function Body() {
  const [selected, setSelected] = useState([]);
  const [time, setTime] = useState(0);
  let navigate = useNavigate();
  const rows = [
    [
      { id: 2, number: "A2" },
      { id: 3, number: "A3" },
      { id: 4, number: "A4" },
      { id: 24, number: "A5" },
      null,
      { id: 44, number: "A6" },
      { id: 54, number: "A7" },
      { id: 101, number: "GX" },
      { id: 5, number: "A8" },
      null,
      { id: 7, number: "A10" },
      { id: 8, number: "A11" },
      { id: 9, number: "A12", isReserved: true },
      { id: 101, number: "GX" }
    ],
    [
      { id: 12, number: "B2" },
      { id: 13, number: "B3", isReserved: true },
      { id: 14, number: "B4" },
      { id: 74, number: "B5" },
      null,
      { id: 34, number: "B7" },
      { id: 94, number: "B8" },
      { id: 101, number: "GX" },
      { id: 15, number: "B9" },
      null,
      { id: 17, number: "B11" },
      { id: 18, number: "B12" },
      { id: 19, number: "B13" },
      { id: 101, number: "GX" }
    ],
    [
      { id: 22, number: "C2" },
      { id: 23, number: "C3" },
      { id: 24, number: "C4" },
      { id: 29, number: "C5" },
      null,
      { id: 99, number: "C7" },
      { id: 98, number: "C8" },
      { id: 101, number: "GX" },
      { id: 25, number: "C9" },
      null,
      { id: 27, number: "C11", isReserved: true },
      { id: 28, number: "C12" },
      { id: 29, number: "C13" },
      { id: 101, number: "GX" }
    ],
    [
      { id: 12, number: "D2" },
      { id: 13, number: "D3", isReserved: true },
      { id: 14, number: "D4" },
      { id: 74, number: "D5" },
      null,
      { id: 34, number: "D7" },
      { id: 94, number: "D8" },
      { id: 101, number: "GX" },
      { id: 15, number: "D9" },
      null,
      { id: 17, number: "D11" },
      { id: 18, number: "D12" },
      { id: 19, number: "D13" },
      { id: 101, number: "GX" }
    ],
    [
      { id: 12, number: "E2" },
      { id: 13, number: "E3" },
      { id: 14, number: "E4" },
      { id: 74, number: "E5" },
      null,
      { id: 34, number: "E7" },
      { id: 94, number: "E8" },
      { id: 101, number: "GX" },
      { id: 15, number: "E9" },
      null,
      { id: 17, number: "E11" },
      { id: 18, number: "E12" },
      { id: 19, number: "E13" },
      { id: 101, number: "GX" }
    ],
    [
      { id: 12, number: "F2" },
      { id: 13, number: "F3" },
      { id: 14, number: "F4" },
      { id: 74, number: "F5" },
      null,
      { id: 34, number: "F7" },
      { id: 94, number: "F8" },
      { id: 101, number: "GX" },
      { id: 15, number: "F9" },
      null,
      { id: 17, number: "F11" },
      { id: 18, number: "F12" },
      { id: 19, number: "F13" },
      { id: 101, number: "GX" }
    ],
    [
      { id: 12, number: "G2" },
      { id: 13, number: "G3" },
      { id: 14, number: "G4" },
      { id: 74, number: "G5" },
      null,
      { id: 34, number: "G7", isReserved: true },
      { id: 94, number: "G8" },
      { id: 101, number: "GX" },
      { id: 15, number: "G9" },
      null,
      { id: 17, number: "G11" },
      { id: 18, number: "G12" },
      { id: 19, number: "G15" },
      { id: 101, number: "GX" }
    ]
  ];
  const price = 30;
  const totalprice = price * selected.length;
  const addSeatCallback = ({ row, number, id }, addCb) => {
    setSelected((prevItems) => [...prevItems, number]);
    const newTooltip = `tooltip for id-${id} added by callback`;
    addCb(row, number, id, newTooltip);
  };

  const removeSeatCallback = ({ row, number, id }, removeCb) => {
    setSelected((list) => list.filter((item) => item !== number));
    removeCb(row, number);
  };

  return (
    <div className="seats">
      <div className="screens">
        <img
          className="screen"
          src="https://img.gocollect.com/eyJidWNrZXQiOiJnb2NvbGxlY3QuaW1hZ2VzLnB1YiIsImtleSI6IjdkNWE3ZTk2LTg5MTktNGIwYS1hZjA3LWUzMGJmZDdkM2U0OS5qcGciLCJlZGl0cyI6W119"
          alt="img not found"
        />
      </div>

      <h5 className="seat_price">CLASSIC $30</h5>
      <SeatPicker
        addSeatCallback={addSeatCallback}
        removeSeatCallback={removeSeatCallback}
        rows={rows}
        alpha
        maxReservableSeats={10}
        visible
      />
      {selected.length !== 0 ? (
        <>
          <div className="seat-price">
            <div className="seat-select">
              <h1 className="seats-select">SEAT:{selected.toString()}</h1>
            </div>
            <div className="totalprice">
              <h1 className="price">
                price:{"$"}
                {totalprice}
              </h1>
            </div>
          </div>
          <button
            className="continue"
            onClick={() => navigate(`/Final/${selected}/${totalprice}`)}
          >
            continue
          </button>
        </>
      ) : null}
    </div>
  );
}

export default Body;
