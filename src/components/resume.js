import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>HIMANSHU YADAV</h2>
            <h4 style={{ color: "grey" }}>OBJECTIVE</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              I am seeking a competitive and challenging environment so that i
              can serve your organisation through my knowledge and excel myself
              through hard work and dedication.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Janak Puri,New Delhi</p>
            <h5>Phone</h5>
            <p>(+91)-(9990132292)</p>
            <h5>Email</h5>
            <p>himanshuyadav2409@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2011}
              endYear={2012}
              schoolName="VEDA VYASA D.A.V. PUBLIC SCHOOL"
              schoolDescription="CLASS-X           CGPA=8.20"
            />
            <Education
              startYear={2013}
              endYear={2014}
              schoolName="VEDA VYASA D.A.V. PUBLIC SCHOOL"
              schoolDescription="CLASS-XII        Percentage=86.20"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <Education
              startYear={2015}
              endYear={2019}
              schoolName="NETAJI SUBHAS INSTITUE OF TECHNOLOGY"
              schoolDescription="Branch:Instrumentation and Control Engineering      CGPA:7.50"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startMonth={5}
              startYear={2018}
              endMonth={7}
              endYear={2018}
              end
              jobName="XEBIA IT ARCHITECT PVT. LTD."
              jobDescription="Software Developer Intern"
            />

            <Experience
              startMonth={7}
              startYear={2019}
              endMonth={9}
              endYear={2019}
              jobName="BHAVNA SOFTWARE PVT. LTD."
              jobDescription="Software Engineer Trainee"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="C++/C" progress={70} />
            <Skills skill="javascript" progress={80} />
            <Skills skill="HTML/CSS" progress={10} />
            <Skills skill="React" progress={60} />
            <Skills skill="NodeJs" progress={15} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
