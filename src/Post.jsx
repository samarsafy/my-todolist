import React from "react";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul id="target" className="collection">
          <li id="template" className="collection-item">
            <label>
              <span>{this.props.post.text}</span>
              <input onChange={e => this.props.handleChange(e)} />
              <a
                href="#!"
                onClick={this.props.removeTodo}
                className="secondary-content"
              >
                <i className="material-icons">cancel</i>
              </a>
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default Post;
