import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {this.props.poems.map(poem => (
          <Poem
            {...poem}
            readButtonClickHandler={() => this.props.readPoem(poem)}
          />
        ))}
      </div>
    );
  }
}

export default PoemsContainer;
