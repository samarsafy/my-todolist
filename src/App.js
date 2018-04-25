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
      todos:[]
      
    };
  }
 
addToDo = todoText => {
  const todos = [...this.state.todos];
  todos.push ({text: todoText, created : Date.now(), done: false})
  localStorage.setItem("todos", JSON.stringify(todos))
  this.setState({ todos })
};
searchBtn = todoText =>{
  const todos = [ ...this.state.todos];
  const filteredTodos = todos.filter(i => i.text.includes(todoText))
  this.setState({filteredTodos:[]});
};

 
  render() {
    return (
     <div className="container">
        <div className="row">
          <div className="col s12 m4 l8">
            <Header />
            <CreatePost submit={this.addToDo}/>
            <PostList />
            <SearchBar addToDo={this.addToDO} searchBtn={this.searchBtn} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
