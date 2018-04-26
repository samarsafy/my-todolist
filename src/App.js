import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import React from 'react';
import './App.css';
import CreatePost from './CreatePost';
import PostList from './PostList';
import Header from './Header';
import SearchBar from './SearchBar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      db: JSON.parse(localStorage.getItem("todos")) || [],
      todos: [],filter:"",
      items: ""
    };
  }

  addToDo = e => {
    e.preventDefault();
    const todos = [...this.state.todos];
    todos.push({ text: this.state.input, created: Date.now(), done: false });

    localStorage.setItem("todos", JSON.stringify(todos));
    this.setState({ todos });
  };
  HandleSearch = e => {
    this.setState({
      filter: e.target.value
    });
    
  }

  handleButtonClick = () => {
    this.props.addToDo(this.state.inputSearch)
    this.setState({
      inputSearch: ''
    })
  };
  removeTodo = index => {
    const items = [...this.state.items];
    items.splice(index);
    this.setState({ items });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    
  };

  render() {
    return (
      < div className = "container  deep-purple lighten-4" >
        <div className="row">
          <div className="col s12 m4 l8">
            <Header />
            <CreatePost onSubmit={this.addToDo} handleChange={this.handleChange}/>
            <PostList filter= {this.state.filter} todos={this.state.todos}/>
            <SearchBar HandleSearch={this.HandleSearch} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
