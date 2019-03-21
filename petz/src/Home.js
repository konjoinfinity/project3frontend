import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Comment from "./Components/Comment";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/comments")
      .then(res => {
        const limitedArray = res.data.slice(0, 5);
        this.setState({ comments: limitedArray });
      })
      .catch(err => console.log(err));
  }

  render() {
    let results = [];
    this.state.comments.map(comment =>
      results.push(<Comment data={comment} key={comment._id} />)
    );
    return (
      this.props.isLoggedIn === true && (
        <div>
          <h2>
            <em>The Daily Fire Hydrant</em>
          </h2>
          {results}
        </div>
      )
    );
  }
}

export default Home;
