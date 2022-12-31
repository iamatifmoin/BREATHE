import React, { useState } from "react";
import all_data from "./script.js";
import "./input.scss";
const Input = () => {
  const [city, setCity] = useState("");
  const [flag, setFlag] = useState(0);
  const [loading, setLoading] = useState(false);
  const [receivedData, setReceivedData] = useState(null);

  const cityChange = (event) => {
    setCity(event.target.value);
  };
  let options = {
    method: "GET",
    headers: { "x-api-key": "ONjyocqX1pcZ4a7BXvodQQ==3cfwYNc7Y0Dn510r" },
  };
  const result = async (event) => {
    setFlag(1);
    event.preventDefault();
    let url = "https://api.api-ninjas.com/v1/airquality?city=" + city;
    setLoading(true);
    await fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setReceivedData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  };

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : flag === 0 ? (
        <form action="" id="myForm">
          <input
            type="text"
            autoComplete="off"
            placeholder="Your City:"
            id="name"
            onChange={cityChange}
          ></input>
          <button onClick={result} id="submit">
            Submit
          </button>
        </form>
      ) : (
        <div className="container" id="container">
          <div className="row1">
            <div
              className="card1"
              id="card1"
              onMouseEnter={all_data.check1enter}
              onMouseLeave={all_data.check1exit}
              style={{
                borderColor:
                  receivedData?.["CO"]["aqi"] < 50
                    ? "#00E400"
                    : receivedData?.["CO"]["aqi"] < 100
                    ? "#FFFF00"
                    : receivedData?.["CO"]["aqi"] < 150
                    ? "#FF7E00"
                    : receivedData?.["CO"]["aqi"] < 200
                    ? "#7e0023"
                    : receivedData?.["CO"]["aqi"] < 300
                    ? "#8F3F97"
                    : receivedData?.["CO"]["aqi"] > 300
                    ? "#7E0023"
                    : "white",
              }}
            >
              <div className="heading">CO</div>
              <div className="data">
                <div className="concentration">
                  Concentration: {receivedData?.["CO"]["concentration"]}
                </div>
              </div>
              <div className="aqi">AQI: {receivedData?.["CO"]["aqi"]}</div>
            </div>
            <div
              className="card2"
              id="card2"
              onMouseEnter={all_data.check2enter}
              onMouseLeave={all_data.check2exit}
              style={{
                borderColor:
                  receivedData?.["NO2"]["aqi"] < 50
                    ? "#00E400"
                    : receivedData?.["NO2"]["aqi"] < 100
                    ? "#FFFF00"
                    : receivedData?.["NO2"]["aqi"] < 150
                    ? "#FF7E00"
                    : receivedData?.["NO2"]["aqi"] < 200
                    ? "#7e0023"
                    : receivedData?.["NO2"]["aqi"] < 300
                    ? "#8F3F97"
                    : receivedData?.["NO2"]["aqi"] > 300
                    ? "#7E0023"
                    : "white",
              }}
            >
              <div className="heading">NO2</div>
              <div className="data">
                <div className="concentration">
                  Concentration: {receivedData?.["NO2"]["concentration"]}
                </div>
              </div>
              <div className="aqi">AQI: {receivedData?.["NO2"]["aqi"]}</div>
            </div>
            <div
              className="card3"
              id="card3"
              onMouseEnter={all_data.check3enter}
              onMouseLeave={all_data.check3exit}
              style={{
                borderColor:
                  receivedData?.["O3"]["aqi"] < 50
                    ? "#00E400"
                    : receivedData?.["O3"]["aqi"] < 100
                    ? "#FFFF00"
                    : receivedData?.["O3"]["aqi"] < 150
                    ? "#FF7E00"
                    : receivedData?.["O3"]["aqi"] < 200
                    ? "#7e0023"
                    : receivedData?.["O3"]["aqi"] < 300
                    ? "#8F3F97"
                    : receivedData?.["O3"]["aqi"] > 300
                    ? "#7E0023"
                    : "white",
              }}
            >
              <div className="heading">O3</div>
              <div className="data">
                <div className="concentration">
                  Concentration: {receivedData?.["O3"]["concentration"]}
                </div>
              </div>
              <div className="aqi">AQI: {receivedData?.["O3"]["aqi"]}</div>
            </div>
            <div
              className="card4"
              id="card4"
              onMouseEnter={all_data.check4enter}
              onMouseLeave={all_data.check4exit}
              style={{
                borderColor:
                  receivedData?.["SO2"]["aqi"] < 50
                    ? "#00E400"
                    : receivedData?.["SO2"]["aqi"] < 100
                    ? "#FFFF00"
                    : receivedData?.["SO2"]["aqi"] < 150
                    ? "#FF7E00"
                    : receivedData?.["SO2"]["aqi"] < 200
                    ? "#7e0023"
                    : receivedData?.["SO2"]["aqi"] < 300
                    ? "#8F3F97"
                    : receivedData?.["SO2"]["aqi"] > 300
                    ? "#7E0023"
                    : "white",
              }}
            >
              <div className="heading">SO2</div>
              <div className="data">
                <div className="concentration">
                  Concentration: {receivedData?.["SO2"]["concentration"]}
                </div>
              </div>
              <div className="aqi">AQI: {receivedData?.["SO2"]["aqi"]}</div>
            </div>
          </div>
          <div className="row2">
            Overall AQI:
            <span
              style={{
                color:
                  receivedData?.["overall_aqi"] < 50
                    ? "#00E400"
                    : receivedData?.["overall_aqi"] < 100
                    ? "#FFFF00"
                    : receivedData?.["overall_aqi"] < 150
                    ? "#FF7E00"
                    : receivedData?.["overall_aqi"] < 200
                    ? "#7e0023"
                    : receivedData?.["overall_aqi"] < 300
                    ? "#8F3F97"
                    : receivedData?.["overall_aqi"] > 300
                    ? "#7E0023"
                    : "white",
              }}
            >
              {receivedData?.["overall_aqi"]}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Input;
