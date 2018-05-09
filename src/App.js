import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import React from "react";
import "./App.css";
import CreatePost from "./CreatePost.jsx";
import PostList from "./PostList";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { Switch, Route, NavLink } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      filteredTodos: JSON.parse(localStorage.getItem("filteredTodos")) || [],
      inputValue: ""
    };
  }

  addToDo = e => {
    e.preventDefault();

    let todos = [...this.state.todos];
    todos.push({
      text: this.state.inputValue,
      created: Date.now(),
      done: false
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    this.setState({ todos, filteredTodos: [] });
  };
  HandleSearch = e => {
    this.setState({
      filter: e.target.value
    });
  };

  handleButtonClick = () => {
    this.props.addToDo(this.state.inputValue);
    this.setState({
      inputValue: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  //Delete todo

  removeTodo = index => {
    console.log(index);
    const todos = [...this.state.todos];

    todos.splice(index, 1);
    this.setState({ todos });
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  markAsDone = todoID => {
    const todos = [...this.state.todos];
    const index = todos.findIndex(i => todoID.text === i.todoID);
    console.log(todos[index].done);
    todos[index].done = !todos[index].done;
    this.setState({ todos });
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  // moves items in todolist up or down depending on "direction" parameter
  moveItem = (todoID, direction) => {
    const todos = [...this.state.todos];
    const index = todos.findIndex(todo => todo.created === todoID);
    const [todoItem] = todos.splice(index, 1);
    if (direction === "up") todos.splice(index - 1, 0, todoItem);
    else todos.splice(index + 1, 0, todoItem);
    this.setState({ todos });
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  render() {
    return (
      <div className="container  deep-purple lighten-4">
        <div className="row">
          <div className="col s12 m4 l8">
            <Header />
            <CreatePost
              onSubmit={this.addToDo}
              handleChange={this.handleChange}
            />
            <nav className="z-depth-0 white">
              <div className="nav-wrapper">
                <ul id="nav-mobile" className="right">
                  <li>
                    <NavLink className="grey-text" exact to="/">
                      All
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="grey-text" to="/open">
                      Open
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="grey-text" to="/closed">
                      Closed
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            <Switch>
              <Route
                exact
                path="/"
                component={() => (
                  <PostList
                    todos={this.state.todos}
                    removeTodo={this.removeTodo}
                    markAsDone={this.markAsDone}
                    moveItem={this.moveItem}
                  />
                )}
              />
              <Route
                path="/open"
                component={() => (
                  <PostList
                    todos={this.state.todos.filter(i => !i.done)}
                    removeTodo={this.removeTodo}
                    markAsDone={this.markAsDone}
                    moveItem={this.moveItem}
                  />
                )}
              />
              <Route
                path="/closed"
                component={() => (
                  <PostList
                    todos={this.state.todos.filter(i => i.done)}
                    removeTodo={this.removeTodo}
                    markAsDone={this.markAsDone}
                    moveItem={this.moveItem}
                  />
                )}
              />
            </Switch>
            <SearchBar HandleSearch={this.HandleSearch} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
