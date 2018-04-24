import React from "react";



class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <p>Hallo from Post component</p>
      </div>
    );
  }
}

export default Post;
