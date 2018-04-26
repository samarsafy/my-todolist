import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import React from "react";




class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearch: "",
      
    };
  }
  HandleSearch = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.searchBtn(this.state.inputSearch)
  }

  handleButtonClick = () => {
    this.props.addToDo(this.state.inputSearch)
    this.setState(
      {
        inputSearch: ''
      }
    )
  }

  render() {
    return <div>
        <nav>
          <div className="nav-wrapper">
            <form>
              <div className="input-field">
                <input name="inputSearch" type="search" onChange={e => this.HandleSearch(e)} value={this.state.inputSearch} />

                <label className="label-icon" htmlFor="search">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
      </div>;
  }
}
export default SearchBar;
