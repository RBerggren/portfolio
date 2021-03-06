import React from "react";

export default function Footer(props) {
  const { resumeData } = props;
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {resumeData.socialLinks &&
              resumeData.socialLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.url}>
                      <i className={item.className} />
                    </a>
                  </li>
                );
              })}
          </ul>
          <ul className="copyright">
            <li>© Copyright 2021 CeeVee</li>
            <li>
              Design by{" "}
              <a title="Styleshout" href="http://www.styleshout.com/">
                Styleshout
              </a>
            </li>
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
}
