import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS |</p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.w3schools.com/html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-html5" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="http://https://www.w3schools.com/css"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="	fa fa-css3" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a
                  href="http://reactjs.org"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="	fa fa-facebook-square" aria-hidden="true" />
                </a>

                {/* Youtube */}
                <a
                  href="http://github.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
