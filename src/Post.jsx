import React from "react";



class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
 
    <ul id="target" className="collection">
      <li id="template" className="collection-item">
      <label>
        <input type="checkbox" />
        <span>Red</span>
      </label>
      <a href="#!" className="secondary-content"><i className="material-icons">cancel</i></a>
      </li>
    </ul>  
    </div>    
    );
  }
}

export default Post;
