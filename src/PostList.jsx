import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import React from "react";



class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    	<div>
        <h1>Todos:</h1>
        <small>
        	<a className="text-success mr-3" href="?state=false">show open</a>
        	<a className="text-success mr-3" href="?state=true">show done</a>
        	<a className="text-success mr-3" href="./index.html">show all</a>
        </small>
    <ul className="collection">
      <li className="collection-item">
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

export default PostList;
