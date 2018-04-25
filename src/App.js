import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import React from 'react';
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
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m4 l8">
            <Header />
              <CreatePost />
              <Post />
            <PostList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
