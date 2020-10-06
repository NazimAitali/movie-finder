import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import List from "./components/Liste/List";
import "./App.css";
import axios from "axios";
import "./components/Navbar/Navbar.css";
import "./components/Liste/List.css";
import "./components/Card/Card.css";
import "antd/dist/antd.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const [rate, setRate] = useState();
  const [year, setYear] = useState("");

  const newInput = (text) => {
    setInput(text);
  };
  const updateRate = (text) => {
    setRate(text);
  };

  const search = () => {
    setErr("");
    setData();
    setPage(1)
    setRate()
    fetchData();
  };
  const updateYear = (date) => {
    setYear(date);
  };

  const fetchData = async () => {
    setErr("");
    setLoading(true);
    const endPoint = "https://api.themoviedb.org/3/search/movie";
    const apiKey = "a1f6157b7ecec6c7068da162dd7854f0";

    try {
      const response = await axios.get(
        `${endPoint}?api_key=${apiKey}&language=en-US&query=${input}&page=${page}&include_adult=false&year=${year===null?0:year._i}`
      );

      setData(response.data);
      if (!response.data.total_pages) {
        setData(null);
        setErr("error");
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setData(null);
      setErr("error");
    }
  };

  return (
    <div className="App">
      <Navbar
        fetch={fetchData}
        search={search}
        newInput={newInput}
        updateRate={updateRate}
        year={updateYear}
      />
      <List
        setData={setData}
        data={data}
        load={loading}
        err={err}
        setPage={setPage}
        page={page}
        fetch={fetchData}
        search={search}
        rate={rate}
      />
    </div>
  );
}

export default App;
