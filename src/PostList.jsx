import React from "react";
import "./App.css";


class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="App">
        <p>Hallo from PostList component</p>
      </div>;
  }
}

export default PostList;
