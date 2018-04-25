import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import React from "react";
import Post from './Post';


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
          <a className="text-success mr-3" href="?state=false">
            show open
          </a>
          <a className="text-success mr-3" href="?state=true">
            show done
          </a>
          <a className="text-success mr-3" href="./index.html">
            show all
          </a>
        </small>
        
        {[1, 2, 3, 4].map(p => <Post />)}
      </div>
    );
  }
}

export default PostList;
