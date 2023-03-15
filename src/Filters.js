import "./App.css";
import React from "react";

export default class FilterButtons extends React.Component {
  change = this.change.bind(this);
  change(type) {
    this.props.show(type);
  }
  render() {
    return (
      <div>
        <button
          className="button-33"
          role="button"
          onClick={() => this.change("all")}
        >
          All
        </button>
        <button
          className="button-33"
          role="button"
          onClick={() => this.change("marked")}
        >
          Marked
        </button>
        <button
          className="button-33"
          role="button"
          onClick={() => this.change("unmarked")}
        >
          Unmarked
        </button>
      </div>
    );
  }
}
