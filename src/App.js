import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreatePost from './CreatePost';

class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {

  };
  }
  
  render() {
    return <div className="App">
        <CreatePost />
      </div>;
  }
}

export default App;
