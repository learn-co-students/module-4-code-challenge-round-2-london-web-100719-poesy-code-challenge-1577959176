import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const POEMS_URL = "http://localhost:3000/poems";

class App extends React.Component {
  state = {
    poems: [],
    readPoems: [],
    showForm: false
  };

  componentDidMount() {
    fetch(POEMS_URL)
      .then(res => res.json())
      .then(poems => this.setState({ poems }));
  }

  readPoem = poem => {
    if (this.state.readPoems.includes(poem.id)) {
      this.setState({
        readPoems: this.state.readPoems.filter(pid => pid !== poem.id)
      });
    } else {
      this.setState({
        readPoems: [...this.state.readPoems, poem.id]
      });
    }
  };

  addPoem = poem => {
    fetch(POEMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(poem)
    })
      .then(res => res.json())
      .then(poem => this.setState({ poems: [...this.state.poems, poem] }));
  };

  render() {
    const poems = this.state.poems.map(poem => {
      return {
        ...poem,
        read: this.state.readPoems.includes(poem.id)
      };
    });
    return (
      <div className="app">
        <div className="sidebar">
          <button
            onClick={() => this.setState({ showForm: !this.state.showForm })}
          >
            Show/hide new poem form
          </button>
          {this.state.showForm && <NewPoemForm addPoem={this.addPoem} />}
        </div>
        <PoemsContainer poems={poems} readPoem={this.readPoem} />
      </div>
    );
  }
}

export default App;
