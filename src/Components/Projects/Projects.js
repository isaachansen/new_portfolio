import React, { Component } from "react";
import { TiArrowLeftThick } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import qndp from "./qndp_img.jpg";
import sneaks from "./sneaks_img.jpg";
import chattier from "./chat-tier.jpg";
import "./Projects.scss";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects-background">
        <NavLink to="/">
          <TiArrowLeftThick className="arrow" />
        </NavLink>
        <div className="project-grid">
          <div className="project-1">
            <div className="img-loc">
              <img className="img" src={qndp} alt="qndp" />
            </div>
            <div className="paragraph">
              <h1 className="proj-title">QNDP</h1>
              <h3 className="proj-text">
                * NOT RELEASED YET * <br></br> A minimalistic static site used
                by QNDP, a parent company for smaller businesses.
              </h3>
              <h3 className="proj-text">Created with React</h3>
            </div>
            <div className="pro-links">
              <a href="https://github.com/isaachansen/QNDP-site">
                <button className="proj-btn">VIEW CODE</button>
              </a>
              {/* <button className="proj-btn">LIVE SITE</button> */}
            </div>
          </div>
          <div className="project-2">
            <div className="img-loc">
              <img className="img" src={sneaks} alt="sneaks" />
            </div>
            <div className="paragraph">
              <h1 className="proj-title">SNEAKS</h1>
              <h3 className="proj-text">
                A fullstack E-Commerce website. Features include Stripe
                checkout, account creation and fully functional cart.
              </h3>
              <h3 className="proj-text">
                Created with React, React Redux, Node.js, Express, Massive,
                BCrypt and SASS
              </h3>
            </div>
            <div className="pro-links">
              <a href="https://github.com/isaachansen/sneaks">
                <button className="proj-btn">VIEW CODE</button>
              </a>
              <a href="https://www.sneaksco.com">
                <button className="proj-btn">LIVE SITE</button>
              </a>
            </div>
          </div>
          <div className="project-3">
          <div className="img-loc">
              <img className="img" src={chattier} alt="chattier" />
            </div>
            <div className="paragraph">
            <h1 className="proj-title">CHAT-TIER</h1>
              <h3 className="proj-text">
                * NOT HOSTED YET * <br></br>
                Full-stack live chat application built with the purpose of learning Socket.io
              </h3>
              <h3 className="proj-text">
                Created with React, Node.js, Express, Socket.io and SASS
              </h3>
            </div>
            <div className="pro-links">
            <a href="https://github.com/isaachansen/Chat-tier">
                <button className="proj-btn">VIEW CODE</button>
              </a>
              {/* <button className="proj-btn">LIVE SITE</button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
