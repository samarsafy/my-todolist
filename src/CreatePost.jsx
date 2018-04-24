import React from "react";



class CreatePost extends React.Component {
  render() {
    return (
      
        <div className="App">
          <form action="#" clasName=" form-inline mb-5">
            <div className="form-group">
              <label for="todo">Add Todo:</label>
              <input type="text" className="text-white form-control bg-dark border-0 mr-2 w-100" value="milk" id="input" aria-describedby="emailHelp" name="input" placeholder="Buy milk"/>
            </div>
            <button type="submit" className="btn btn-dark">Submit</button>
          </form>
        </div>


    );
  }
}

export default CreatePost;
