import React from "react";

class Poem extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <p>
          <strong>- By {this.props.author}</strong>
        </p>
        <button onClick={this.props.readButtonClickHandler}>
          {this.props.read ? "Mark as unread" : "Mark as read"}
        </button>
      </div>
    );
  }
}

export default Poem;
