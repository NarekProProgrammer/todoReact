import "./App.css";
import React from "react";
import Header from "./Header.js";
import Table from "./Table.js";
import Filter from "./Filters.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      showType: "all",
    };
  }
  add = (text) => {
    let newSt = this.state;
    newSt.notes.push({
      txt: text,
    });
    this.setState(newSt);
  };
  show = (type) => {
    let nS = this.state;
    nS.showType = type;
    this.setState(nS);
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
        <Filter show={this.show} />
        <br />
        <br />
        <Table list={this.state.notes} type={this.state.showType} />
      </div>
    );
  }
}

export default App;
