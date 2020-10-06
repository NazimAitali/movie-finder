import React from "react";
import logo from "./assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Input } from "antd";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { DatePicker, Space } from "antd";
import { InputNumber } from "antd";
const { Search } = Input;

const Navbar = ({ search, newInput, updateRate, year }) => {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <div className="side-menu" id="open">
      <div className="left">
        <div className="btn-menu">
          <div className="right-open">
            <i>
              <a href="#open">
                <FontAwesomeIcon icon={faBars} />
              </a>{" "}
            </i>
          </div>
          <div className="right-close">
            <i>
              <a href="#close">
                <FontAwesomeIcon icon={faBars} />
              </a>{" "}
            </i>
          </div>
        </div>
        <div className="logo">
          {" "}
          <img src={logo} alt="logo-golden-movie"></img>
        </div>
        <div className="menu-container">
          <ol className="menu">
            <li className="search">
              <Input
                placeholder="Search Movie"
                onChange={(event) => newInput(event.target.value)}
              />
            </li>
            <ol className="filter-container">
              <li className="rate">
                <InputNumber
                placeholder="Rate★★★"
                  min={1}
                  max={100000}
                  onChange={(text) => updateRate(text)}
                />
              </li>
              <li className="date">
                <DatePicker format="YYYY" onChange={year} picker="year" />
              </li>
            </ol>
            
          </ol>
        </div>
        <li className="btn-search">
              <Button
                type="primary"
                icon={<SearchOutlined />}
                onClick={search}
                icon={<SearchOutlined />}
              >
                Search
              </Button>
            </li>
      </div>
    </div>
    /** 
    <div className="nav-container">
      <ol className="input-container">
        <div className="logo">
          <img src={logo} alt="logo-golden-movie"></img>
        </div>

        <ol className="search-container">
          <li className="search">
            <div className="search-bar">
              <label>Research movies</label>
              <Input
                placeholder="Search input"
                onChange={(event) => newInput(event.target.value)}
              />
            </div>
          </li>

          
            <li className="filter">
              <li>
                <label>Filter rate</label>
                <InputNumber
                  min={1}
                  max={100000}
                  onChange={(text) => updateRate(text)}
                />
              </li>

              <li>
                <label>Filter year</label>
                <Space direction="vertical">
                  <DatePicker
                    format="YYYY"
                    className="date"
                    onChange={year}
                    picker="year"
                  />
                </Space>
              </li>
            </li>
            <div>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={search}
            icon={<SearchOutlined />}
          >
            Search
          </Button>
        </div>
        </ol>
       
      </ol>
      <div className="indicator">
        <div className="icone-menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
    
*/
  );
};

export default Navbar;
