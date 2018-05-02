import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import React from "react";
import Post from "./Post";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let todos = this.props.todos;

    // todos = todos.filter(t => t.text.includes(this.props.filter));

    return (
      <div>
        <h1>Todos:</h1>

        {todos.map(p => (
          <Post
            todos={todos}
            removeTodo={this.props.removeTodo}
            markAsDone={this.props.markAsDone}
            moveItem={this.props.moveItem}
            key={p.created}
            post={p}
          />
        ))}
      </div>
    );
  }
}

export default PostList;
