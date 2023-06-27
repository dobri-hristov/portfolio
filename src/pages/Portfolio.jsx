import React from "react";

const Portfolio = ({ data }) => {
  return (
    <section id="portfolio" className="bg-dark">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-thirds s-bgrid-thirds cf"
          >
            {data.portfolio &&
              data.portfolio.map((item) => {
                return (
                  <div className="columns portfolio-item" key={item.name}>
                    <div className="item-wrap">
                      <a href={item.projectUrl}>
                        <img
                          src={item.imgUrl}
                          className="item-img"
                          alt="project img"
                        />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
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
