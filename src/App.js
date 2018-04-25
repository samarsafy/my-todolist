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
      db: JSON.parse(localStorage.getItem("todolist")) || [],
      posts: []
    };
  }

} 
addToDo = todoText => {
  const todos = [...this.state.todos];
  todos.push ({text: todoText, created : Data.now(), done: false});
  this.setState({ todos, filteredTodos: []});
};
searchBtn = todoText =>{
  const todos = [ ...this.state.todos];
  const filteredTodos = todos.filter(i => i.text.inculdes(todoText))
  this.setState({filteredTodos:[]});
};

 
  render() 
  {
    return (
     <div className="container">
        <div className="row">
          <div className="col s12 m4 l8">
            <Header />
            <CreatePost />
            <PostList />
            <SearchBar addToDo={this.addToDO} searchBtn={this.searchBtn} />
          </div>
        </div>
      </div>
    );
  }


export default App;
