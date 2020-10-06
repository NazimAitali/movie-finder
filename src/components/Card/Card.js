import React from "react";
import noImage from "./assets/no-photo-available.png";
import comingSoon from "./assets/coming-soon.gif";
import { Rate } from "antd";

function Cards({ name, date, img, cap, overview, rate }) {
  const ph = `https://image.tmdb.org/t/p/w500${img}`;
  const phs = `https://image.tmdb.org/t/p/w500${cap}`;

  const today = new Date();
  const currentDate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  console.log(currentDate);
  return (
    <div className="card">
      {img ? (
        <>
          {date > currentDate ? (
            <div className="profile-card">
              <div>
                <img className="picture" bat alt={name} src={ph} />
              </div>
              <div className="bio">
                <h2>{name}</h2>
                <p>
                  Release date:{date}
                  <br></br>
                  {overview}
                  <br></br>{" "}
                  <img
                    style={{ width: "250px" }}
                    alt={name}
                    src={comingSoon}
                  ></img>
                </p>
              </div>
            </div>
          ) : (
            <div className="profile-card">
              <div>
                <img className="picture" bat alt={name} src={ph} />
              </div>
              <div className="bio">
                <img className="small" alt={name} src={phs}></img>
                <h2>{name}</h2>
                <Rate disabled count={8} allowHalf={true} defaultValue={rate} />
                <div className="date-rate">
                  <h5>Release date:{date}</h5>
                  <h5>Rate :{rate}</h5>
                </div>
                <p>{overview}</p>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {date > currentDate ? (
            <div className="profile-card">
              <div>
                <img className="picture" bat alt={name} src={noImage} />
              </div>
              <div className="bio">
                <h2>{name}</h2>
                <p>
                  Release date:{date}
                  <br></br>
                  {overview}
                  <br></br>{" "}
                  <img
                    style={{ width: "250px" }}
                    alt={name}
                    src={comingSoon}
                  ></img>
                </p>
              </div>
            </div>
          ) : (
            <div className="profile-card">
              <div>
                <img className="picture" bat alt={name} src={noImage} />
              </div>
              <div className="bio">
                <img className="small" alt={name} src={phs}></img>
                <h2>{name}</h2>
                <Rate disabled count={8} allowHalf={true} defaultValue={rate} />
                <div className="date-rate">
                  <h5>Release date:{date}</h5>
                  <h5>Rate :{rate}</h5>
                </div>
                <p>{overview}</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cards;
