import React from "react";

class NewPoemForm extends React.Component {
  state = {
    title: "",
    author: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    this.props.addPoem({ ...this.state });
    this.setState({
      title: "",
      author: "",
      content: ""
    });
  };

  render() {
    return (
      <form
        className="new-poem-form"
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      >
        <input placeholder="Title" name="title" />
        <input placeholder="Author" name="author" />
        <textarea
          placeholder="Write your masterpiece here..."
          rows={10}
          name="content"
        />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
