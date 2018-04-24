import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreatePost from './CreatePost';
import Post from './Post';
import PostList from './PostList';
import Header from './Header';

class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {

  };
  }
  
  render() {
    return <div className="App">
        <CreatePost />
        <Post />
        <PostList />
      </div>;
  }
}

export default App;
