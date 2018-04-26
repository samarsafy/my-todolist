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
    let todos = this.props.todos;
    todos = todos.filter(t => t.text.includes(this.props.filter))

    console.log(todos)
    return <div>
        <h1>Todos:</h1>
        <small>
          <a className="text-success mr-3" href="?state=false">
            <h6>show open</h6>
          </a>
          <a className="text-success mr-3" href="?state=true">
            <h6>show done</h6>
          </a>
          <a className="text-success mr-3" href="./index.html">
            <h6>show all</h6>
          </a>
        </small>
        {todos.map(p => <Post key={p.created} post={p} />)} 
      </div>;
  }
}

export default PostList;
