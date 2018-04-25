import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import React from "react";
import Post from "./Post";



class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearch: "",
      posts: [],
      form: {}
    };
  }

  HandleSearch = e => {
    this.setState({
      [e.target.name]: e.target.value;
      const search = [...this.state.posts]
      const searchFilter = search.filter(i => i.e.target.value.value)
    });
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <form>
              <div className="input-field">
                <input name="inputSearch" type="search" required onChange = {e => this.HandleSearch(e)} value={this.state.inputSearch} />

                <label className="label-icon" htmlFor="search">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default SearchBar;
