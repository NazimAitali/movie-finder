import React from "react";
import Cards from "../Card/Card";
import noData from "./assets/no-data.png";
import error from "./assets/error.png";
import { Button } from "antd";
import { Pagination } from "antd";

function List({ data, load, err, setPage, search, rate, page }) {
  const changePage = (current) => {
    setPage(current);
  };

  return (
    <div className="content">
      <div className="movie">
        <>
          {load ? (
            <div>
            <ul class="loader">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
          </div>
          ) : (
            <>
              {err ? (
                <div>
                  <img src={error} alt="Error"></img>
                </div>
              ) : (
                <>
                  {" "}
                  {data ? (
                    <>
                      {rate ? (
                        <>
                          <div className="pagination">
                            <Pagination
                              simple
                              defaultCurrent={data.page}
                              total={data.total_pages * 10}
                              onChange={changePage}
                            />
                            <Button type="primary" onClick={search}>
                              Go to page {page}
                            </Button>
                          </div>
                          <div className="cards">
                            {data.results
                              .filter((el) => el.vote_average > rate)
                              .map((film, index) => (
                                <Cards
                                  key={index}
                                  name={film.title}
                                  date={film.release_date}
                                  img={film.poster_path}
                                  cap={film.backdrop_path}
                                  overview={film.overview}
                                  rate={film.vote_average}
                                  id={film.id}
                                />
                              ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="pagination">
                            <Pagination
                              simple
                              defaultCurrent={data.page}
                              total={data.total_pages * 10}
                              onChange={changePage}
                            />
                            <Button type="primary" onClick={search}>
                              Go to page {page}
                            </Button>
                          </div>

                          <div className="cards">
                            {data.results.map((film, index) => (
                              <Cards
                                key={index}
                                name={film.title}
                                date={film.release_date}
                                img={film.poster_path}
                                cap={film.backdrop_path}
                                overview={film.overview}
                                rate={film.vote_average}
                                id={film.id}
                              />
                            ))}
                          </div>
                        </>
                      )}{" "}
                    </>
                  ) : (
                    <>
                      <div className="no-data">
                        <img src={noData} alt="No available data"></img>
                      </div>
                    </>
                  )}{" "}
                </>
              )}
            </>
          )}
        </>
      </div>
    </div>
  );
}

export default List;
