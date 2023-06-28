import React from "react";

const Portfolio = ({ data }) => {
  return (
    <section id="portfolio" className="bg-dark">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-thirds s-bgrid-halves cf"
          >
            {data.portfolio &&
              data.portfolio.map((item) => {
                return (
                  <div
                    className="columns portfolio-item flip-card"
                    key={item.name}
                  >
                    <div className="item-wrap flip-card-inner project-desktop">
                      <img src={item.imgUrl} alt="project img" />
                      <div className="overlay flip-card-back">
                        <div className="portfolio-item-meta">
                          <h4 style={{ color: "#E1D9D1" }}>{item.name}</h4>
                        </div>
                        <div className="btn-group">
                          <a href={item.projectUrlCode}>
                            <button className="project-btn">Code</button>
                          </a>
                          <a href={item.projectUrlLive}>
                            <button className="project-btn">Live</button>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="item-wrap project-mobile">
                      <a href={item.projectUrlLive}>
                        <img src={item.imgUrl} alt="project img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h4 style={{ color: "#E1D9D1" }}>{item.name}</h4>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
