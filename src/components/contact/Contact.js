import React, { useEffect } from "react";
import "./Contact.css";
const MailtoUI = require("../../../node_modules/mailtoui/dist/mailtoui-min");

export default function Contact(props) {
  useEffect(() => {
    MailtoUI.run();
  });
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">
            Feel free to contact me for any work or suggestions below
          </p>
        </div>
      </div>
      <div className="row">
        <aside className="eigth columns footer-widgets">
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="widget"
          >
            <a
              className="mailtoui btn btn--primary h-full-width"
              href="mailto:robin.berggren@hotmail.se"
            >
              Contact Me
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
