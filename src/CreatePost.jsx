import React from "react";
import "./App.css";

class CreatePost extends React.Component {
  render() {
    return <div className="App">
        <form action="#" className=" form-inline mb-5">
          <div className="form-group">
            <label htmlFor="todo"><h1>Add Todo:</h1></label>
            <input onChange={e => this.props.handleChange(e)} type="text" className="text-white form-control bg-dark border-0 mr-2 w-100" defaultValue="milk" id="input" aria-describedby="emailHelp" name="input" placeholder="Buy milk" />
          </div>
          <button type="submit" className="btn primary" onClick={this.props.onSubmit}>
            Submit
          </button>
        </form>
      </div>;
  }
}

export default CreatePost;
