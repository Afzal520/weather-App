import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

import ErrorM from "./Loading";
function ShowData({ show, handler, ShowData }) {

  let [changevalue, setvalue] = useState("")


  function change(e) {
    setvalue(e.target.value)

  }


  function getdata(e) {
    e.preventDefault();
    handler(changevalue);
    setvalue("")



  }


  return (
    <>

      <div className="card">

        <div className="search">

          <input onChange={change}
          
            type="text"
            name="name"
            value={changevalue}
            className="search-bar"
            placeholder="search city"
            id=""
          />
          <button onClick={getdata} style={{borderRadius:"50%"}}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

        </div>

        <div className="weather loading mt-4">
        {ShowData ? <div class="spinner-border text-dark" role="status" style={{width:"50px", height:"50px"}}>
            <span className="visually-hidden">Loading...</span>
          </div> : null}
          <h1 className="city">{show.name}</h1>
          <h1 className="temp">Temprature:{show.main.temp}°</h1>
          <h3>Feels :{show.main.feels_like}</h3>
          <h6>
            min:{show.main.temp_min}°/ max:{show.main.temp_max}°
          </h6>
          <div className="flex">
            <img
              src={`https://openweathermap.org/img/wn/${show.weather[0].icon}@2x.png`}
              alt=""
              className="icon"
            />
            <div className="description">Cloudy</div> <br />

          </div>
          <h4><span style={{ fontSize: "25px" }}>  Description:  </span>{show.weather[0].description}</h4>
          <div className="humidity">Humidity:{show.main.humidity}%</div>
          <div className="wind">Wind Speed:{show.wind.speed} km/hr</div>

          <div className="deg">Wind direction: {show.wind.deg}°</div>

          <h6 className="surise">Sunrise:{show.sys.sunrise}</h6>
        </div>
      </div>
    </>
  );
}
export default ShowData;
