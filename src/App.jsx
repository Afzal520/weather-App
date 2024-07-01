import { useState, useEffect } from "react";
import ShowData from "./component/Showdata";

import Loading from "./component/Loading";
function App() {
  let [apidata, setdata] = useState();
  let [search, setsearch] = useState("london");
  let Api_key = "8cc18a4d5f841cdad6b7744b3aff9b44";
  let Dat = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${Api_key}&units=metric`
      );
      const result = await response.json();
      if (response.status === 200) {
        setdata(result);
      } else if (response.status === 400) {
        alert("inter city name");
      } else if (response.status === 404) {
        alert("data not found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  function hand(s) {
    setsearch(s);
  }
  console.log(search);
  console.log(apidata);

  useEffect(() => {
    Dat();
  }, [search]);

  return (
    <>
      {!apidata ? (
        <Loading data="Loading Data...."></Loading>
      ) : (
        <ShowData show={apidata} handler={hand}></ShowData>
      )}
    </>
  );
}

export default App;
