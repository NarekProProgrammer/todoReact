import "./App.css";
import React from "react";
import Header from "./Header.js";
import Table from "./Table.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }
  add = (text) => {
    let newSt = this.state;
    newSt.notes.push({
      txt: text,
    });
    this.setState(newSt);
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header add={this.add} />
        <br />
        <br />
        <Table list={this.state.notes} />
      </div>
    );
  }
}

export default App;
