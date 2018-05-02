import React from "react";
import "./App.css";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <form action="#" className=" form-inline mb-5">
          <div className="form-group">
            <label htmlFor="todo">
              <h1>Add Todo:</h1>
            </label>
            <input
              name="inputValue"
              onChange={e => this.props.handleChange(e)}
              type="text"
              className="text-white form-control bg-dark border-0 mr-2 w-100"
              defaultValue="milk"
              id="input"
              aria-describedby="emailHelp"
              placeholder="Buy milk"
            />
          </div>
          <button
            type="submit"
            className="btn primary"
            onClick={this.props.onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreatePost;
