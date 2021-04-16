import React from "react";
import "./Portfolio.css";

export default function Portfolio(props) {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            <div className="work">
              <div className="workItem">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://robins-shop.netlify.app/"
                >
                  <img
                    className="workItem"
                    src="images/robins-shop.png"
                    alt="Shop"
                  />
                </a>
              </div>
              <div className="workItem">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://luffarschack.netlify.app/"
                >
                  <img
                    className="workImages"
                    src="images/tic.png"
                    alt="TicTacToe"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
