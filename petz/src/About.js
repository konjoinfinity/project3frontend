import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      this.props.isLoggedIn === true && (
        <div>
          <h1>About the Co-Founders</h1>
          <div className="about-card">
            <img src="https://i.imgur.com/w2bQF9Q.jpg" alt="Annabelle" />
            <div className="cofounder-info">
              <h3>Annabelle Taylor</h3>
              <p>
                Annabelle loves all things fluffy and fuzzy, math puns, obscene
                amounts of coffee, and (of course) programming! If you're
                looking for a rant, ask her sometime about her feelings on
                non-relational databases---yikes.
              </p>
            </div>
          </div>
          <div className="about-card">
            <img src="https://i.imgur.com/0cV0XWS.jpg" alt="Cathy" />
            <div className="cofounder-info">
              <h3>Cathy Le</h3>
              <p>
                Cathy is an aspirating Software Engineer who dreams of a world
                where there is kibble in every bowl and a leash in every hand.
                This web app is her first group project. Looking forward to
                more!
              </p>
            </div>
          </div>
          <div className="about-card">
            <img src="https://i.imgur.com/ZatpxJz.jpg" alt="Konjo" />
            <div className="cofounder-info">
              <h3>Wesley Scholl (Konjo)</h3>
              <p>
                Wesley also known as Konjo is a full stack software engineer who
                enjoys music, art, coffee, and international travel. He loves
                all animals and owns a cat named snowflake.
              </p>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default About;
