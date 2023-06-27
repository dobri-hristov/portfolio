import React from "react";

const Footer = ({ data }) => {
  return (
    <footer className="bg-dark">
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {data.socialLinks &&
              data.socialLinks.map((item, i) => {
                return (
                  <li key={i}>
                    <a href={item.url}>
                      <i className={item.className} />
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;